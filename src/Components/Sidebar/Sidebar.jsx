import React from "react";
import "./Sidebar.css";
import { GoHomeFill } from "react-icons/go";
import { IoGameController } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";

import user_img1 from "../../assets/user_profile.jpg";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          {/* img */}
          <GoHomeFill className="side-link-icon" />
          <p>Home</p>
        </div>
        <div className="side-link">
          {/* img */}
          <IoGameController className="side-link-icon" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          {/* img */}
          <FaCarAlt className="side-link-icon" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          {/* img */}
          <IoMdFootball className="side-link-icon" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          {/* img */}
          <BiSolidCameraMovie className="side-link-icon" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          {/* img */}
          <FaLaptop className="side-link-icon" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          {/* img */}
          <IoIosMusicalNotes className="side-link-icon" />
          <p>Music</p>
        </div>
        <div className="side-link">
          {/* img */}
          <FaBloggerB className="side-link-icon" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          {/* img */}
          <ImNewspaper className="side-link-icon" />
          <p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>

        <div className="side-link">
          <img src={user_img1} alt="" />
          <p>PewDiepie</p>
        </div>
        <div className="side-link">
          <img src={user_img1} alt="" />
          <p>mrBeast</p>
        </div>
        <div className="side-link">
          <img src={user_img1} alt="" />
          <p>Justin beaber</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
