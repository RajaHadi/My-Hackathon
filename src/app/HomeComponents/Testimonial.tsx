import Image from 'next/image'
import React from 'react'
import pic from "../../../public/TostImg/Ellipse 6.png"
import Quotes from "../../../public/TostImg/Quotes.png"
import Star from "../../../public/TostImg/star.png"
import Dot from "../../../public/TostImg/Dot.png"
const Testimonial = () => {
    return (
      <div>
        {/* Title Section */}
        <div className="sm:text-center text-white pl-6 lg:text-left">
          <h1 className="font-normal pt-10 text-[32px] text-[#FF9F0D]">Testimonials</h1>
          <h2 className="font-bold text-5xl">What our clients are saying</h2>
        </div>
  
        {/* Testimonial Card */}
        <div className="pt-16 flex justify-center items-center">
          <div className="w-full max-w-[800px] h-auto flex flex-col items-center gap-5 bg-[#FFFFFF] px-4 sm:px-8">
            <Image src={pic} alt="no" width={133} height={133} className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]" />
            <Image src={Quotes} width={48} height={48} alt="no" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]" />
            <div className="w-full max-w-[650px] lg:text-left sm:text-center">
              <p className="font-normal text-[16px] sm:text-[18px] text-[#4F4F4F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.
              </p>
            </div>
            <Image src={Star} alt="no" className="w-[100px] sm:w-[120px]" />
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#333333]">Alamin Hasan</h2>
            <p className="font-normal text-[14px] sm:text-[16px] text-[#828282]">Food Specialist</p>
            <Image src={Dot} alt="no" className="w-[20px] sm:w-[24px]" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;
  
  
  
  