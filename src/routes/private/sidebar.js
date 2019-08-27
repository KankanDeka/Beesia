import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../../css/bootstrap.css";

import Facebook from "../../pages/private/social/facebook/facebook";
import Twitter from "../../pages/private/social/twitter/twitter";
import Instagram from "../../pages/private/social/instagram/instagram";
import Reddit from "../../pages/private/social/reddit/reddit";
import Linkedin from "../../pages/private/social/linkedin/linkedin";
import Youtube from "../../pages/private/social/youtube/youtube";
import Pintarest from "../../pages/private/social/pintarest/pintarest";

function Sidebar() {
  return (
    <Router>
      <div>
        <div class="wrapper">
          <nav id="sidebar">
            <ul class="list-unstyled components">
              <li className="nav-item active">
                <Link to="/facebook/" className="nav-link">
                  Facebook
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/twitter/" className="nav-link">
                  Twitter
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/instagram/" className="nav-link">
                  Instagram
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/reddit/" className="nav-link">
                  Reddit
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/linkedin/" className="nav-link">
                  LinkdeIn
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/youtube/" className="nav-link">
                  Youtube
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/pintarest/" className="nav-link">
                  Pintarest
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Route path="/facebook/" exact component={Facebook} />
        <Route path="/twitter/" component={Twitter} />
        <Route path="/instagram/" component={Instagram} />
        <Route path="/reddit/" component={Reddit} />
        <Route path="/linkedin/" component={Linkedin} />
        <Route path="/youtube/" component={Youtube} />
        <Route path="/pintarest/" component={Pintarest} />
      </div>
    </Router>
  );
}

export default Sidebar;
