import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary p-2 ">Latest</p>
      <Marquee className="flex gap-10" pauseOnHover={true} speed={55}>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened !Power by:----♻♻🛠⛏✒📁📁 MD RAKIBUL ISLAM ROKY..Junior Web Developer.....😉😉
        </p>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened !Power by:----♻♻🛠⛏✒📁📁 MD RAKIBUL ISLAM ROKY..Junior Web Developer.....😉😉
        </p>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened !Power by:----♻♻🛠⛏✒📁📁 MD RAKIBUL ISLAM ROKY..Junior Web Developer.....😉😉
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
