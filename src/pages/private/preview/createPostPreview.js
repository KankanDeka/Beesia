import React from "react";
import "../../../css/bootstrap.css";
import "../../../css/style.css";

import UserProfileIcon from "../../../img/createpost/user.svg";

export const FacebookPreview = props => {
  return (
    <div className="PostPreview shadow-lg bg-white rounded">
      <img
        src={UserProfileIcon}
        className="userProfileIcon float-left"
        alt=""
      />
      <div className="facebookPreviewUsername">
        <h6>Kankan Deka in Guwahati Assam, India</h6>
        <p>August 9, 2019</p>
      </div>
      <p className="text-justify lead post-text"> {props.preview.text} </p>
      <img
        src={props.preview.file}
        className="PreviewImage text-center rounded"
        alt=""
      />
    </div>
  );
};
export const InstagramPreview = props => {
  return (
    <div className="PostPreview">
      <p className="text-justify lead post-text"> {props.preview.text} </p>
      <img
        src={props.preview.file}
        className="PreviewImage text-center rounded"
        alt=""
      />
    </div>
  );
};
export const TwitterPreview = props => {
  return (
    <div className="PostPreview">
      <p className="text-justify lead post-text"> {props.preview.text} </p>
      <img
        src={props.preview.file}
        className="PreviewImage text-center rounded"
        alt=""
      />
    </div>
  );
};
export const LinkedinPreview = props => {
  return (
    <div className="PostPreview">
      <p className="text-justify lead post-text"> {props.preview.text} </p>
      <img
        src={props.preview.file}
        className="PreviewImage text-center rounded"
        alt=""
      />
    </div>
  );
};
export const RedditPreview = props => {
  return (
    <div className="PostPreview">
      <p className="text-justify lead post-text"> {props.preview.text} </p>
      <img
        src={props.preview.file}
        className="PreviewImage text-center rounded"
        alt=""
      />
    </div>
  );
};
export const YoutubePreview = props => {
  return (
    <div className="PostPreview">
      <p className="text-justify lead post-text"> {props.preview.text} </p>
      <img
        src={props.preview.file}
        className="PreviewImage text-center rounded"
        alt=""
      />
    </div>
  );
};
