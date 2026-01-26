import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, valueConvater } from "../../data";
import moment from "moment";

import {
  BiSolidDislike,
  BiSolidLike,
  BiSolidSave,
  BiSolidShare,
  BiSolidShareAlt,
} from "react-icons/bi";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    // fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // fetching comment data

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData?.statistics?.viewCount
            ? valueConvater(apiData.statistics.viewCount)
            : "16K"}
          Views &bull;{" "}
          {apiData?.snippet?.publishedAt &&
            moment(apiData.snippet.publishedAt).fromNow()}
        </p>

        <div>
          <span>
            <BiSolidLike className="status-icon" />
            {apiData ? valueConvater(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <BiSolidDislike className="status-icon" />2
          </span>
          <span>
            <BiSolidShare className="status-icon" />
            share
          </span>
          <span>
            <BiSolidSave className="status-icon" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Title Here"}</p>
          <span>
            {channelData
              ? valueConvater(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscriber
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>

        <hr />
        <h4>
          {apiData ? valueConvater(apiData.statistics.commentCount) : "102"}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div className="comments" key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>1 day ago</span>
                </h3>
                <p> {item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <BiSolidLike className="comment-status-icon" />
                  <span>
                    {valueConvater(
                      item.snippet.topLevelComment.snippet.likeCount,
                    )}
                  </span>

                  <BiSolidDislike className="comment-status-icon" />
                  <span>24</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
