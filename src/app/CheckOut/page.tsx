import React from 'react'
import Navbar from '../Navbar'
import Checkout from './CheckOut'
import Footer from '../HomeComponents/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-black'>
      <h1 className='font-bold text-white text-5xl text-center p-12'>CheckOut Page</h1></div>
      <Checkout/>
      <Footer/>
    </div>
  )
}

export default page
