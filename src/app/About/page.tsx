import React from 'react'
import Navbar from '../Navbar'
import About from './Main'
import Image from 'next/image'
import Img from "../../../public/AboutUsImages/Contanyt.png"
import TeamMember from './TeamMember'
import Testimonial from '../HomeComponents/Testimonial'
import FoodMenu from './Foodmenu'
import Footer from '../HomeComponents/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-black'>
      <h1 className='font-bold text-white text-5xl text-center p-12'>About Us</h1></div>
      <About/>
      <Image src={Img} alt='No' className='py-8'/>
      <TeamMember/>
      <Testimonial/>
      <FoodMenu/>
      <Footer/>
    </div>
  )
}

export default page
