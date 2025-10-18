import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img className="w-[400px]" src={logo} alt="" />
      <h3 className="text-accent">Journalism Without Fear or Favour</h3>

      <p className="font-semibold text-accent">{format(new Date(), "EEEE,MMMM dd,yyyy")}</p>
    </div>
  );
};

export default Header;
