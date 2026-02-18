import React, { useEffect, useState } from "react";
import "./Recomended.css";
import { API_KEY, valueConvater } from "../../data";
import { Link } from "react-router-dom";
const Recomended = ({ categoryId }) => {
  const [apidata, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=30&key=${API_KEY}`;

    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apidata.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="side-video-list"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConvater(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recomended;
