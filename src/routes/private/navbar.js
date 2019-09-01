import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../../css/bootstrap.css";
import "../../css/style.css";

// import navigation component
import Dashboard from "../../pages/private/navbar/dashboard";
import CreatePost from "../../pages/private/navbar/createPost";
import Schedule from "../../pages/private/navbar/schedule";
import Search from "../../pages/private/navbar/search";
import Notification from "../../pages/private/navbar/notfication";
import User from "../../pages/private/navbar/user";
// Importing Social pages component
import Facebook from "../../pages/private/social/facebook/facebook";
import Twitter from "../../pages/private/social/twitter/twitter";
import Instagram from "../../pages/private/social/instagram/instagram";
import Reddit from "../../pages/private/social/reddit/reddit";
import Linkedin from "../../pages/private/social/linkedin/linkedin";
import Youtube from "../../pages/private/social/youtube/youtube";
import Pinterest from "../../pages/private/social/pinterest/pinterest";

// importing navbar icon

import scheduleIcon from "../../img/navIcon/schedule.svg";
import searchIcon from "../../img/navIcon/search.svg";
import notificationIcon from "../../img/navIcon/notification.svg";
import userIcon from "../../img/navIcon/user.svg";

// importing social logos
import facebookLogo from "../../img/socialLogo/facebook.svg";
import twitterLogo from "../../img/socialLogo/twitter.svg";
import instagramLogo from "../../img/socialLogo/instagram.svg";
import redditLogo from "../../img/socialLogo/reddit.svg";
import linkedinLogo from "../../img/socialLogo/linkedin.svg";
import youtubeLogo from "../../img/socialLogo/youtube.svg";
import pinterestLogo from "../../img/socialLogo/pinterest.svg";

function Navbar() {
  return (
    <Router>
      <div>
        {/* Navbar Navigation start here  */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-white rounded">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="navbar-brand">
                Dashboard
              </Link>
            </li>
            <li className="nav-item active ">
              <Link to="/createpost/facebook" className="nav-link createPost">
                <button type="link" className="btn btn-sm btn-outline-success">
                  Create Post
                </button>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/schedule/" className="nav-link">
                <img
                  src={scheduleIcon}
                  className="navIcon"
                  alt="Schedule Icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Schedule"
                />
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/search/" className="nav-link">
                <img
                  src={searchIcon}
                  className="navIcon"
                  alt="Search Icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Search"
                />
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/notification/" className="nav-link">
                <img
                  src={notificationIcon}
                  className="navIcon"
                  alt="Notification Icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Notification"
                />
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/user/" className="nav-link">
                <img
                  src={userIcon}
                  className="navIcon"
                  alt="User Icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Profile"
                />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar Navigation start here */}

        <div className="wrapper float-left">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <li className="nav-item active">
                <Link to="/facebook/" className="nav-link sideBar">
                  <img
                    src={facebookLogo}
                    className="sidebarLogo"
                    alt="Facebook Icon"
                  />
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/twitter/" className="nav-link sideBar">
                  <img
                    src={twitterLogo}
                    className="sidebarLogo"
                    alt="Twitter Icon"
                  />
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/instagram/" className="nav-link sideBar">
                  <img
                    src={instagramLogo}
                    className="sidebarLogo"
                    alt="Instagram Icon"
                  />
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/reddit/" className="nav-link sideBar">
                  <img
                    src={redditLogo}
                    className="sidebarLogo"
                    alt="Reddit Icon"
                  />
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/linkedin/" className="nav-link sideBar">
                  <img
                    src={linkedinLogo}
                    className="sidebarLogo"
                    alt="LinkedIn Icon"
                  />
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/youtube/" className="nav-link sideBar">
                  <img
                    src={youtubeLogo}
                    className="sidebarLogo"
                    alt="Youtube Icon"
                  />
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/pinterest/" className="nav-link sideBar">
                  <img
                    src={pinterestLogo}
                    className="sidebarLogo"
                    alt="Pinterest Icon"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Navbar Route start here */}
        <div className="float-left dashArea">
          <Route path="/" exact component={Dashboard} />
          <Route path="/createpost/facebook" component={CreatePost} />
          <Route path="/schedule/" component={Schedule} />
          <Route path="/search/" component={Search} />
          <Route path="/notification/" component={Notification} />
          <Route path="/user/" component={User} />
          {/* Sidebar Route start here */}
          <Route path="/facebook/" exact component={Facebook} />
          <Route path="/twitter/" component={Twitter} />
          <Route path="/instagram/" component={Instagram} />
          <Route path="/reddit/" component={Reddit} />
          <Route path="/linkedin/" component={Linkedin} />
          <Route path="/youtube/" component={Youtube} />
          <Route path="/pinterest/" component={Pinterest} />
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
