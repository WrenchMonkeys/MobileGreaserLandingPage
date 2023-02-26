import Image from "react-bootstrap/Image";
import React from "react";

import "./styles.scss";

const MarketplaceButton = (props: { href: string; src: string; }) => {
  return (
      <a className="w-50 mw-200" href={props.href}>
        <Image className="img-fluid w-100" src={props.src}/>
      </a>
  )
}

export default MarketplaceButton;