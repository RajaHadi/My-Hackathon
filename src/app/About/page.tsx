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
