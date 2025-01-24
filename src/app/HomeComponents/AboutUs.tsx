import Image from 'next/image'
import React from 'react'
import Image1 from "../../../public/AboutUsImages/unsplash_fdlZBWIP0aM.png"
import Image2 from "../../../public/AboutUsImages/unsplash_jpkfc5_d-DI.png"
import Image3 from "../../../public/AboutUsImages/unsplash_mAQZ3X_8_l0.png"
import Link from 'next/link'
const AboutUs = () => {
  return (
    <div className='pb-6'>
  <section className="flex flex-col-reverse lg:flex-row text-white justify-between items-center px-6 lg:px-10 py-10 lg:py-20">
    {/* Text Content */}
    <div className="max-w-lg text-center lg:text-left">
      <h2 className="text-[#FF9F0D] text-[32px] font-greatVibes font-normal mb-2">About us</h2>
      <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-snug">
        <span className="text-[#FF9F0D]">We</span> Create the Best Food Product
      </h1>
      <p className="mt-4 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in facilis modi iure suscipit sed, praesentium sit repellendus neque quidem aspernatur illo ut quas quo laudantium cumque expedita hic dolores?
      </p>
      <Link href={"../Shop"}>
      <button className="mt-6 px-6 py-3 bg-[#FF9F0D] text-black font-semibold rounded-[30px] hover:bg-yellow-500">
        See Menu
      </button></Link>
    </div>

    {/* Images Section */}
    <div className="relative mt-10 lg:mt-0 flex flex-col items-center lg:items-end space-y-6 lg:space-y-4">
      {/* Main Image */}
      <div>
        <Image
          alt="Main Dish"
          src={Image1}
          width={624}
          height={330}
          className="rounded-md h-auto w-full lg:w-[624px]"
        />
      </div>

      {/* Two Small Images */}
      <div className="flex flex-wrap justify-between gap-4 lg:gap-6 w-full">
        <Image
          src={Image2}
          alt="Small Image 1"
          height={194}
          width={322}
          className="rounded-md h-auto w-[45%] sm:w-[48%] lg:w-[310px]"
        />
        <Image
          src={Image3}
          alt="Small Image 2"
          height={194}
          width={322}
          className="rounded-md h-auto w-[45%] sm:w-[48%] lg:w-[310px]"
        />
      </div>
    </div>
  </section>
</div>

  )
}

export default AboutUs

