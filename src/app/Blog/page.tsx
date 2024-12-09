import React from 'react'
import Navbar from '../Navbar'
import Main from './Main'
import Footer from '../HomeComponents/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-black'>
      <h1 className='font-bold text-white text-5xl text-center p-12'>Blog List</h1></div>
      <Main/>
      <Footer/>
    </div>
  )
}

export default page