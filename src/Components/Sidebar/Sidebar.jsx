import React from "react";
import "./Sidebar.css";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          {/* img */}
          <img src="" alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>

        <div className="side-link">
          <img src="" alt="" />
          <p>PewDiepie</p>
        </div>
        <div className="side-link">
          <img src="" alt="" />
          <p>mrBeast</p>
        </div>
        <div className="side-link">
          <img src="" alt="" />
          <p>Justin beaber</p>
        </div>
        <div className="side-link">
          <img src="" alt="" />
          <p>5-Minute</p>
        </div>
        <div className="side-link">
          <img src="" alt="" />
          <p>Imposible</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
