import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// importing preview
import {
  FacebookPreview,
  InstagramPreview,
  TwitterPreview,
  LinkedinPreview,
  RedditPreview,
  YoutubePreview
} from "../preview/createPostPreview";

// importing createpost icon
import addMediaIcon from "../../../img/createpost/addmedia.svg";
import galleryIcon from "../../../img/createpost/gallery.svg";

// importing social logos
import facebookLogo from "../../../img/socialLogo/facebook.svg";
import twitterLogo from "../../../img/socialLogo/twitter.svg";
import instagramLogo from "../../../img/socialLogo/instagram.svg";
import redditLogo from "../../../img/socialLogo/reddit.svg";
import linkedinLogo from "../../../img/socialLogo/linkedin.svg";
import youtubeLogo from "../../../img/socialLogo/youtube.svg";

//  Adding CSS
import "../../../css/bootstrap.css";
import "../../../css/style.css";

class CreatePost extends Component {
  state = {
    file: <img src={galleryIcon} className="" alt="" />,
    text: "Some beautifull lines goes here..."
  };

  handleChange = event => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  };
  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="formContainer float-left">
          <form>
            <textarea
              type="text"
              className="createPostForm"
              placeholder="Write something here..."
              onChange={this.handleTextChange}
            ></textarea>
            <div className="createPostDefaultImage">
              <img
                src={this.state.file}
                className="createPostImagePreview text-center rounded"
                alt=""
              />
            </div>
            <button type="button" className="btn btn-outline-dark btn-sm">
              <img
                src={addMediaIcon}
                className="addMediaIcon"
                alt="add Media Icon"
                data-toggle="tooltip"
                data-placement="top"
                title="Add Media"
              />
              <label id="createPostInputLabel" htmlFor="createPostInput">
                Add Photo
              </label>
              <input
                type="file"
                name="photo"
                id="createPostInput"
                onChange={this.handleChange}
              />
            </button>
            
          </form>
        </div>
        <div className="previewPanel">
          <section>
            <Router>
              <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active preview-bar">
                    <Link to="/createpost/facebook" className="nav-link" >
                      <img
                        src={facebookLogo}
                        className="previewBarIcon"
                        alt="Schedule Icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Schedule"
                      />
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/createpost/instagram" className="nav-link">
                      <img
                        src={instagramLogo}
                        className="previewBarIcon"
                        alt="Search Icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Search"
                      />
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/createpost/twitter" className="nav-link">
                      <img
                        src={twitterLogo}
                        className="previewBarIcon"
                        alt="Notification Icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Notification"
                      />
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/createpost/linkedin" className="nav-link">
                      <img
                        src={linkedinLogo}
                        className="previewBarIcon"
                        alt="User Icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Profile"
                      />
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/createpost/reddit" className="nav-link">
                      <img
                        src={redditLogo}
                        className="previewBarIcon"
                        alt="User Icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Profile"
                      />
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/createpost/youtube" className="nav-link">
                      <img
                        src={youtubeLogo}
                        className="previewBarIcon"
                        alt="User Icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Profile"
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="float-left">
                <Route
                  path="/createpost/facebook"
                  render={() => <FacebookPreview preview={this.state} />}
                />
                <Route
                  path="/createpost/instagram"
                  render={() => <InstagramPreview preview={this.state} />}
                />
                <Route
                  path="/createpost/twitter"
                  render={() => <TwitterPreview preview={this.state} />}
                />
                <Route
                  path="/createpost/linkedin"
                  render={() => <LinkedinPreview preview={this.state} />}
                />
                <Route
                  path="/createpost/reddit"
                  render={() => <RedditPreview preview={this.state} />}
                />
                <Route
                  path="/createpost/youtube"
                  render={() => <YoutubePreview preview={this.state} />}
                />
              </div>
            </Router>
          </section>
        </div>
      </div>
    );
  }
}

export default CreatePost;
