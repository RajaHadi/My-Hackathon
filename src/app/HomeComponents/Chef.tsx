import React from 'react'
import Image from 'next/image'
import Chef1 from "../../../public/ChefImg/Chef card.png"
import Chef2 from "../../../public/ChefImg/Card 2.png"
import Chef3 from "../../../public/ChefImg/Chef Card 1.png"
import Chef4 from "../../../public/ChefImg/Chef Card 1 (1).png"

const Chef = () => {
  return (
    <div className='flex flex-col  pb-5 items-center'>
      <h1 className='font-normal text-[#FF9F0D] text-[32px]'>Chef</h1>
      <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl pb-10'>
        <span className='text-[#FF9F0D]'>Me</span>et Our Chef
      </h2>
      <div className='flex flex-wrap gap-4 justify-center'>
        <Image src={Chef1} alt='no' width={312} height={391} className='w-[280px] sm:w-[280px] md:w-[280px] lg:w-[280px]' />
        <Image src={Chef2} alt='no' width={312} height={391} className='w-[280px] sm:w-[280px] md:w-[280px] lg:w-[280px]' />
        <Image src={Chef3} alt='no' width={312} height={391} className='w-[280px] sm:w-[280px] md:w-[280px] lg:w-[280px]' />
        <Image src={Chef4} alt='no' width={312} height={391} className='w-[280px] sm:w-[280px] md:w-[280px] lg:w-[280px]' />
      </div>
      <div className='pt-7'>
        <button className='rounded-3xl border-2 border-[#FF9F0D] px-5 py-2 font-normal text-[16px]'>
          See More
        </button>
      </div>
    </div>
  );
};

export default Chef;

