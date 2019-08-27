import React, { Component } from "react";
import addMediaIcon from "../../../img/createpost/addmedia.svg";

import "../../../css/bootstrap.css";
import "../../../css/style.css";
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    return (
      <div className="formContainer">
        <form>
          <textarea
            type="text"
            className="createPostForm"
            placeholder="Write anything here..."
            onChange={this.handleChange}
          ></textarea>
          <img src={this.state.file} className="createPostImagePreview" alt="" />
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
              Photo/Video
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
    );
  }
}

export default CreatePost;
