import React from "react";
import "./Navbar.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { SiYoutubemusic } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { RiVideoUploadFill } from "react-icons/ri";
import { VscExtensions } from "react-icons/vsc";
import { IoIosNotifications } from "react-icons/io";
import user_profile from "../../assets/user_profile.jpg";

const Navbar = ({ setSidebar }) => {
  return (
    <div>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <HiMenuAlt2
            className="menu-icon"
            onClick={() => {
              setSidebar((prev) => (prev === false ? true : false));
            }}
          />

          <span className="logo">
            <SiYoutubemusic className="logo-icon" />
            ReelStories
          </span>
        </div>

        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <IoSearchSharp style={{ fontSize: "20px" }} />
          </div>
        </div>

        <div className="nav-right flex-div">
          <span>
            <RiVideoUploadFill className="upload-logo" />
          </span>
          <span>
            <VscExtensions />
          </span>
          <span>
            <IoIosNotifications />
          </span>
          <span className="user-icon">
            <img src={user_profile} alt="" />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
