import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {

  const {signIn} = use(AuthContext)

  
  const handleLogin = (e)=> {
    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password})

    signIn(email, password)
    .then((result)=> {
      const user = result.user;
      console.log(user)
    }).catch((error)=> {
      console.log(error.message)
    })
    
  }


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-title flex justify-center">
            <h2 className="font-semibold text-center text-2xl">Login your account</h2>
        </div>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            {/* Email */}
            <input type="email" className="input" placeholder="Email" name="email"/>
            <label className="label">Password</label>
            {/* Password */}
            <input type="password" className="input" placeholder="Password" name="password"/>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>

            <p className="mt-5 text-center font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary">Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
