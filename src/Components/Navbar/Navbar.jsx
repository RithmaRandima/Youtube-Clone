import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <span className="menu-icon">menu</span>
          {/* img */}
          <span className="logo">logo </span>
        </div>

        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <span>search_ic</span>
          </div>
        </div>

        <div className="nav-right flex-div">
          <span>upload_ic</span>
          <span>more_ic</span>
          <span>notification_ic</span>
          <span className="user-icon">profile_ic</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
