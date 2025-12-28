import React from 'react'
import { FaGithub, FaGooglePlus } from 'react-icons/fa'

const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-bold'>Login With</h2>
        <div className='flex flex-col gap-3 mt-5'>
            <button className='btn btn-outline btn-info'><FaGooglePlus />Login with Google</button>
            <button className='btn btn-outline'><FaGithub />Login with Github</button>
        </div>
    </div>
  )
}

export default SocialLogin