import React from 'react'
// import classes from './RegisterPage.module.css'

export const RegisterPage = () => {
  return (
    <div className='mt-8 bg-white  rounded-lg'>
        <h1 className='text-main text-4xl mt-5 mb-5'>Register</h1>
        <div>
            <form action="/register" method="post" className='flex flex-col justify-center items-center'>
                <input type="text" className='p-2 m-4 border-black border rounded-lg w-96' name="username" placeholder="Username" />
                <input type="email" className='p-2 m-4 border-black border rounded-lg w-96' name="email" placeholder="Email" />
                <input type="password" className='p-2 m-4 border-black border rounded-lg w-96' name="password" placeholder="Password" />
                <input type="password" className='p-2 m-4 border-black border rounded-lg w-96' name="password2" placeholder="Confirm Password" />
                <input type="submit" value="Register" className='w-80 p-2 m-8 bg-main rounded-lg text-white font-semibold hover:opacity-80 cursor-pointer' />
            </form>
        </div>
    </div>
  )
}
