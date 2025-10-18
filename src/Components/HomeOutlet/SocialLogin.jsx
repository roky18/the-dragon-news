import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5  ">Login With</h2>
      <div className="space-y-4">
        <button className="btn btn-secondary btn-outline w-full"><FcGoogle size={22}/>Login With Google</button>
        <button className="btn btn-primary btn-outline w-full"><RxGithubLogo size={22} />Login With GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogin;
