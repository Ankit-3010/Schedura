import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Schedura is your all-in-one solution for smart, simple, and efficient appointment scheduling. We're committed to helping you save time, stay organized, and deliver a smoother booking experience for everyone. Your schedule, simplified.
</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 9876543210</li>
            <li>schedura@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Schedura.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
