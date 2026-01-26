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

const Sidebar = ({ sidebar, setCategory, category }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => {
            setCategory(0);
          }}
        >
          <GoHomeFill className="side-link-icon" />
          <p>Home</p>
        </div>

        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => {
            setCategory(20);
          }}
        >
          <IoGameController className="side-link-icon" />
          <p>Gaming</p>
        </div>

        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => {
            setCategory(2);
          }}
        >
          <FaCarAlt className="side-link-icon" />
          <p>Automobiles</p>
        </div>

        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => {
            setCategory(17);
          }}
        >
          <IoMdFootball className="side-link-icon" />
          <p>Sports</p>
        </div>

        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => {
            setCategory(24);
          }}
        >
          <BiSolidCameraMovie className="side-link-icon" />
          <p>Entertainment</p>
        </div>

        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => {
            setCategory(28);
          }}
        >
          <FaLaptop className="side-link-icon" />
          <p>Technology</p>
        </div>

        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => {
            setCategory(10);
          }}
        >
          <IoIosMusicalNotes className="side-link-icon" />
          <p>Music</p>
        </div>

        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => {
            setCategory(22);
          }}
        >
          <FaBloggerB className="side-link-icon" />
          <p>Blogs</p>
        </div>

        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => {
            setCategory(25);
          }}
        >
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
