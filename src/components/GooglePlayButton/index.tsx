import Image from "react-bootstrap/Image";
import badge from "../../static/images/google-play-badge.png";
import React from "react";

import './styles.scss';

const GooglePlayButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <Image className="img-fluid w-md-50" src={badge}/>
    </div>
  )
}

export default GooglePlayButton;