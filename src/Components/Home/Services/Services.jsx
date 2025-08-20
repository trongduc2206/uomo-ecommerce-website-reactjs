import React from "react";
import "./Services.css";

import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <section className="serviceBox" aria-label="Service Box 1">
          <FaCartFlatbedSuitcase size={50} style={{ marginBottom: "20px" }} />
          <h3>Fast And Free Delivery</h3>
          <p>Free delivery for all orders over $140</p>
        </section>
        <section className="serviceBox" aria-label="Service Box 2">
          <TfiHeadphoneAlt size={50} style={{ marginBottom: "20px" }} />
          <h3>24/7 Customer Support</h3>
          <p>Friendly 24/7 customer support</p>
        </section>
        <section className="serviceBox" aria-label="Service Box 3">
          <RiShieldCheckLine size={50} style={{ marginBottom: "20px" }} />
          <h3>Money Back Guarantee</h3>
          <p>We return money within 30 days</p>
        </section>
      </div>
    </>
  );
};

export default Services;
