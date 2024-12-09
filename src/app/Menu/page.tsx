import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar'
import Main from './Main'
import QualityPoints from '../HomeComponents/QualityPoints'
import Lower from './Lower'
import partners from "../../../public/MenuPageImg/Clients and partner.png"
import Footer from '../HomeComponents/Footer'
import FoodMenu from '../About/Foodmenu'
const Menu = () => {
  return (
    <div>
    
      <Navbar/>
      <div className='bg-black'>
      <h1 className='font-bold text-white text-5xl text-center p-12'>Our Menu</h1></div>
      <Main/>
      <div className='bg-black p-14'>
      <QualityPoints/></div>
      <Lower/>
      <Image src={partners} alt='no' className='px-6 py-8'/>
     
      <Footer/>
      
    </div>
  )
}

export default Menu
