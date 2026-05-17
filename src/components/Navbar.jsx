import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between p-3 w-100vh m-2 bg-emerald-500 text-white font-bold rounded-md'>
        <div className=' hover:underline'><span>Minhaj Shah</span></div>
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar