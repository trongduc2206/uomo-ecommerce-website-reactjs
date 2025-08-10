import React from "react";
import "./Banner.css";

import { Link } from "react-router-dom";

const Banner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="banner">
        <div className="bannerLeft">
          <h3 className="bannerh6">Starting At $19</h3>
          <h3 className="bannerh3">Women's T-shirts</h3>
          <h3 className="bannerh5">
            <Link to="/shop" onClick={scrollToTop} style={{ color: "white" }}>
              Shop Now
            </Link>
          </h3>
        </div>
        <div className="bannerRight">
          <h3 className="bannerh6" style={{ color: "black" }}>
            Starting At $39
          </h3>
          <h3 className="bannerh3" style={{ color: "black" }}>
            Men's Sportswear
          </h3>
          <h3 className="bannerh5">
            <Link to="/shop" onClick={scrollToTop} style={{ color: "black" }}>
              Shop Now
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
