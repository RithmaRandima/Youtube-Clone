import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video1.mp4";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src="" alt="" />
            125
          </span>
          <span>
            <img src="" alt="" />2
          </span>
          <span>
            <img src="" alt="" />
            share
          </span>
          <span>
            <img src="" alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={user_profile} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Dolores cum
          iure rerum quae incidunt obcaecati libero
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quas delectus, harum voluptas sapiente magnam incidunt nisi, qui
              illum explicabo aperiam debitis quia.
            </p>
            <div className="comment-action">
              {/* <img src="" alt="" />like */}
              <span>24</span>
              {/* <img src="dis-like" alt="" /> */}
            </div>
          </div>
        </div>

        {/* comment 02 */}
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quas delectus, harum voluptas sapiente magnam incidunt nisi, qui
              illum explicabo aperiam debitis quia.
            </p>
            <div className="comment-action">
              {/* <img src="" alt="" />like */}
              <span>24</span>
              {/* <img src="dis-like" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
