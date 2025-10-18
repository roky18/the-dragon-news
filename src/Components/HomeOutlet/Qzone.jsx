import React from "react";
import swiming from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import play from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swiming} alt="" />
        <img src={classImg} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
