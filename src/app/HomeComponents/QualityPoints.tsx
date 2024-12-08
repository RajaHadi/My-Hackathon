import Image from 'next/image'
import React from 'react'
import Q1 from "../../../public/Quality/Group (1).png"
import Q2 from "../../../public/Quality/Group (2).png"
import Q3 from "../../../public/Quality/Group (3).png"
import Q4 from "../../../public/Quality/Group (4).png"
const QualityPoints = () => {
  return (
    <div className='flex flex-wrap  justify-around gap-6 px-4'>
      <div className='flex flex-col items-center text-center'>
        <Image src={Q1} alt='no' height={120} width={120} className='pb-2' />
        <p className='font-bold text-[24px]'>Professional Chefs</p>
        <p className='font-bold text-[40px]'>420</p>
      </div>
      <div className='flex flex-col items-center text-center'>
        <Image src={Q2} alt='no' height={120} width={120} className='pb-2' />
        <p className='font-bold text-[24px]'>Items Of Food</p>
        <p className='font-bold text-[40px]'>320</p>
      </div>
      <div className='flex flex-col items-center text-center'>
        <Image src={Q3} alt='no' height={120} width={120} className='pb-2' />
        <p className='font-bold text-[24px]'>Years Of Experienced</p>
        <p className='font-bold text-[40px]'>30+</p>
      </div>
      <div className='flex flex-col items-center text-center'>
        <Image src={Q4} alt='no' height={120} width={120} className='pb-2' />
        <p className='font-bold text-[24px]'>Happy Customers</p>
        <p className='font-bold text-[40px]'>220</p>
      </div>
    </div>
  );
};

export default QualityPoints;

