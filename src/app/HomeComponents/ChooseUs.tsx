import Image from 'next/image'
import React from 'react'
import img1 from "../../../public/ChooseUs/unsplash_lP5MCM6nZ5A.png"
import img2 from "../../../public/ChooseUs/unsplash_dphM2U1xq0U (1).png"
import img3 from "../../../public/ChooseUs/unsplash_CLMpC9UhyTo.png"
import img4 from "../../../public/ChooseUs/unsplash_-GFCYhoRe48.png"
import img5 from "../../../public/ChooseUs/unsplash_tzl1UCXg5Es.png"
import img6 from "../../../public/ChooseUs/unsplash_mmnKI8kMxpc.png"
import Hamburger from "../../../public/ChooseUs/Hamburger (1).png"
import wine from "../../../public/ChooseUs/Wine.png"
import cookie from "../../../public/ChooseUs/Cookie.png"
const ChooseUs = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between px-6 lg:px-10  lg:py-20'>
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col sm:flex-row gap-6'>
        <Image src={img1} alt='no' width={362} height={356} className='h-auto w-full sm:w-[362px]' />
        <Image src={img2} alt='no' height={231} width={281} className='h-auto w-full sm:w-[280px]' />
      </div>
      <div className='flex flex-col sm:flex-row gap-6'>
        <Image src={img3} alt='no' height={306} width={244} className='h-auto w-full sm:w-[244px]' />
        <Image src={img4} alt='no' width={221} height={226} className='h-auto w-full sm:w-[221px]' />
        <div className='flex flex-col gap-6'>
          <Image src={img5} alt='no' width={161} height={168} className='h-auto w-full sm:w-[161px]' />
          <Image src={img6} alt='no' width={161} height={166} className='h-auto w-full sm:w-[161px]' />
        </div>
      </div>
    </div>
    <div className="max-w-lg text-center lg:pl-10 lg:text-left mt-10 lg:mt-0">
      <h2 className="text-[#FF9F0D] text-[32px] font-semibold mb-2">Why choose us</h2>
      <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-tight lg:leading-snug">
        <span className="text-[#FF9F0D]">Ex</span>traordinary taste and Experienced
      </h1>
      <p className="mt-4 pb-9 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam laboriosam labore quidem sed ipsum consequuntur ratione, officiis in est aut repellat voluptates distinctio dolorem quod fugit deserunt corrupti excepturi? Voluptate rerum mollitia perspiciatis nobis, saepe doloribus impedit minus sint?
      </p>
      <div className='flex pb-10 gap-6'>
        <div className='w-[102px] flex justify-center items-center h-[100px] bg-[#FF9F0D]'>
          <Image src={Hamburger} alt='o' width={56} height={56} />
        </div>
        <div className='w-[102px] h-[100px] flex justify-center items-center bg-[#FF9F0D]'>
          <Image src={wine} alt='o' width={56} height={56} />
        </div>
        <div className='w-[102px] h-[100px] flex justify-center items-center bg-[#FF9F0D]'>
          <Image src={cookie} alt='o' width={56} height={56} />
        </div>
      </div>
      <div className='w-[355px] h-[93px] rounded-md flex justify-around items-center bg-white'>
        <p className='font-bold text-[48px] text-[#FF9F0D]'>30+</p>
        <p className='font-bold text-[24px] text-[#1E1E1E]'>Years of <br />Experience</p>
      </div>
    </div>
  </div>
  
  

  
  
  

  )
}

export default ChooseUs
