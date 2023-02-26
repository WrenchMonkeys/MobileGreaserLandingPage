import Image from "react-bootstrap/Image";
import badge from "../../static/images/google-play-badge.png";
import React from "react";

const GooglePlayButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <Image className="img-fluid w-25" src={badge}/>
    </div>
  )
}

export default GooglePlayButton;