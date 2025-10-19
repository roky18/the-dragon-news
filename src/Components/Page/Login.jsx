import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl text-fuchsia-500 font-bold">Login Your Account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
         
          <button className="btn btn-neutral mt-4">Login</button>
           <p className='flex justify-center pt-3'>Dont’t Have An Account ? <Link to="/auth/register" className='text-red-500 font-semibold'>Register</Link></p>
          
        </fieldset>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;