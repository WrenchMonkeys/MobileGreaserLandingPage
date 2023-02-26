import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";

import googleBadge from "../../static/images/google-play-badge.png";
import appleBadge from "../../static/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

import React from 'react';

import Divider from "../../components/Divider";
import MarketplaceButton from "../../components/MarketplaceButton";

function Index() {
  return (
    <Container>
      {/* TODO: refactor each hero into an HOC component */}
      <div className="d-flex flex-row">
        <div className="p-3 d-flex flex-column w-50">
          <h1>On Demand Mobile Mechanics</h1>
          <p className="text-secondary">Mobile Greaser helps you service your vehicle any time, any location, at your convenience.</p>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <MarketplaceButton href="https://play.google.com/store/apps?gl=us" src={appleBadge}/>
            <MarketplaceButton href="https://play.google.com/store/apps?gl=us" src={googleBadge}/>
          </div>
        </div>
        <div className="p-3 d-flex align-middle d-flex align-items-center w-50">
          <Image className="mx-auto img-fluid" src="https://via.placeholder.com/300"/>
        </div>
      </div>
      <Divider/>
      <div className="d-flex flex-column">
        <div className="p-3 d-flex flex-column justify-content-center align-items-center">
          <h2>Save time at the shop</h2>
          <p>Join our clients to save time and money on your vehicle maintenance</p>
        </div>
        <div className="p-3 d-flex">
          <Image className="mx-auto img-fluid w-100 h-auto" src="https://via.placeholder.com/1200x300"/>
        </div>
      </div>
      <Divider/>
      <div className="d-flex flex-row-reverse">
        <div className="p-3 d-flex flex-column justify-content-center w-50">
          <h2>Get a complete service report</h2>
          <p>With every service request, we will include a free 50 point inspection report.</p>
        </div>
        <div className="p-3 d-flex align-middle d-flex align-items-center w-50">
          <Image className="mx-auto img-fluid" src="https://via.placeholder.com/300"/>
        </div>
      </div>
      <Divider/>
      <div className="d-flex flex-row">
        <div className="p-3 d-flex flex-column justify-content-center w-50">
          <h2>Drive with piece of mind</h2>
          <p>With our 5000 mile warranty on all services we offer, you never have to worry about improper installation or faulty parts again</p>
        </div>
        <div className="p-3 d-flex align-middle d-flex align-items-center w-50">
          <Image className="mx-auto img-fluid" src="https://via.placeholder.com/300"/>
        </div>
      </div>
      <Divider/>
      <div className="d-flex flex-row-reverse">
        <div className="p-3 d-flex flex-column justify-content-center w-50">
          <h2>Simple and affordable Pricing</h2>
          <p>With our flat rate pricing you never have to worry about being up-sold at the shop again.</p>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <MarketplaceButton href="https://play.google.com/store/apps?gl=us" src={appleBadge}/>
            <MarketplaceButton href="https://play.google.com/store/apps?gl=us" src={googleBadge}/>
          </div>
        </div>
        <div className="p-3 d-flex align-middle d-flex align-items-center w-50">
          <Image className="mx-auto img-fluid" src="https://via.placeholder.com/300"/>
        </div>
      </div>
      <Divider/>
      <footer className="py-3 d-flex flex-lg-row flex-column justify-content-lg-around">
        <section className="p-2 d-flex flex-column justify-content-lg-between">
          <h5 className="fw-bold">Mobile Greaser</h5>
          <p>Copyright © 2023 Mobile Greaser, Inc. All rights reserved</p>
        </section>
        <section className="p-2 d-flex flex-column justify-content-lg-between">
          <h5 className="fw-bold">Company</h5>
          <p><a className="text-secondary" href="https://twitter.com">Twitter</a></p>
          <p><a className="text-secondary" href="mailto:egomez@mobilegreaser.com">team@mobilegreaser.com</a></p>
        </section>
        <section className="p-2 d-flex flex-column justify-content-lg-between">
          <h5 className="fw-bold">Legal</h5>
          <p><a className="text-secondary" href="https://google.com">Terms of Service</a></p>
          <p><a className="text-secondary" href="https://google.com">Privacy Policy</a></p>
        </section>
      </footer>
    </Container>
  );
}

export default Index;
