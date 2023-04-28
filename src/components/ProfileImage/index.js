import React from "react";
import { imageStyle } from "./style";

const ProfileImage = (props) => {
  return <img style={imageStyle} src={props.img} />;
};

export default ProfileImage;
