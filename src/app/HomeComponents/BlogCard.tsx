import Image from 'next/image'
import React from 'react'

const BlogCard = (props:any) => {
    return (
      <div className="w-full sm:w-[48%] lg:w-3/12 mb-6 sm:mb-0">
        <Image 
          src={props.image} 
          alt="no" 
          height={348} 
          width={423} 
          className="w-full h-auto" 
        />
        <p className="font-normal text-[16px] text-[#FF9F0D] mt-3">10 February 2022</p>
        <p className="font-bold text-[20px] lg:text-[24px] mt-2">
          Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
        </p>
        <p className="font-normal text-[16px] mt-2 text-[#828282]">Learn More</p>
      </div>
    );
  };
  
  export default BlogCard;
  
