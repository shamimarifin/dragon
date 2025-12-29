import React, { use, useState } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../../Provider/AuthProvider'


const Register = () => {
  
  const {createUser,setUser} = use(AuthContext)
  const [error , setError] = useState()


  // Reset Status

  const handleRegister = (e)=> {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email, password)
    .then((result)=> {
      const user = result.user
      setUser(user)
    }).catch((error)=> {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-title flex justify-center">
            <h2 className="font-semibold text-center text-2xl">Register your account</h2>
        </div>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className='label'>Your Name</label>
            <input type="text" className="input" name="name" placeholder="Enter your name" required/>
            <label className='label'>Photo Url</label>
            <input type="text" className="input" name="photo" placeholder="Enter your url" required/>
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" required/>
            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" required/>
            
            <button type='submit' className="btn btn-neutral mt-4">Register</button>

            <p className="mt-5 text-center font-semibold">Already Have An Account ? <Link to="/auth/login" className="text-secondary">Login</Link></p>
          </fieldset>

          <div className='mt-4'>
            <p className='text-red-400'>{error}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register