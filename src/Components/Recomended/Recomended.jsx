import React from "react";
import "./Recomended.css";
import thumbnail1 from "../../assets/pic_1.jpg";
const Recomended = () => {
  return (
    <div className="recommended">
      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className="vid-info">
          <h4>best channel that help you to be a web Developer</h4>
          <p>GreetStack</p>
          <p>199K Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className="vid-info">
          <h4>best channel that help you to be a web Developer</h4>
          <p>GreetStack</p>
          <p>199K Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className="vid-info">
          <h4>best channel that help you to be a web Developer</h4>
          <p>GreetStack</p>
          <p>199K Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className="vid-info">
          <h4>best channel that help you to be a web Developer</h4>
          <p>GreetStack</p>
          <p>199K Views</p>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
