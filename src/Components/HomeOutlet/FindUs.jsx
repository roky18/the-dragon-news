import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join w-full join-vertical">
          <button className="btn justify-start join-item">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn justify-start join-item">
            <FaTwitter></FaTwitter> Twitter
          </button>
          <button className="btn justify-start join-item"><FaInstagram></FaInstagram>Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
