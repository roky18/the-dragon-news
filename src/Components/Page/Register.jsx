import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl text-teal-500 font-bold">Register your account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Name</label>
          <input type="Text" className="input" placeholder="Your Name" />
            {/* photoUrl*/}
          <label className="label">Photo Url</label>
          <input type="Text" className="input" placeholder="Your photo Url" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
         
          <button className="btn btn-neutral mt-4">Register</button>
           <p className='flex justify-center pt-3'>Already Have An Account ? <Link to="/auth/login" className='text-green-500 font-semibold'>Please Login</Link></p>
          
        </fieldset>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;