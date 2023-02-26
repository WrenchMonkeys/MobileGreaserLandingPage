import Image from "react-bootstrap/Image";
import React from "react";

const MarketplaceButton = (props: { href: string; src: string; }) => {
  return (
      <a className="w-50" href={props.href}>
        <Image className="img-fluid w-100" src={props.src}/>
      </a>
  )
}

export default MarketplaceButton;