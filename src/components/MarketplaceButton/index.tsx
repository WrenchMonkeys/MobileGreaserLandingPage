import Image from "react-bootstrap/Image";
import React from "react";

const MarketplaceButton = (props: { href: string; src: string; }) => {
  return (
    <div className="w-50">
      <a href={props.href}>
        <Image className="img-fluid w-50 h-auto" src={props.src}/>
      </a>
    </div>
  )
}

export default MarketplaceButton;