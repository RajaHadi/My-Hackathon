// components/HeroSection.js
import Image from "next/image";
import HandBag from "../../../public/NavbarIcons/Handbag.png"
import HeaderHero from "../../../public/HeaderHeroImage/Image.png"
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
    {/* Navbar */}
    <nav className="relative bg-black text-white">
      {/* Centered Logo - Separate Section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl  md:text-3xl font-bold py-2 pb-10">
        <span className="text-[#FF9F0D]">Food</span>tuck
      </div>
  
      {/* Navbar Links */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-10">
        {/* All Menu Links */}
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><Link href={"../Menu"} className="hover:text-yellow-400">Menu</Link></li>
          <li><Link href={""} className="hover:text-yellow-400">Blog</Link></li>
          <li><Link href={"../About"} className="hover:text-yellow-400">About</Link></li>
          <li><Link href={"../Shop"} className="hover:text-yellow-400">Shop</Link></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
  
        {/* Right Section: Search Input */}
        <div className="flex mt-4 md:mt-0 items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 border-2 border-[#FF9F0D] focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <button className="text-yellow-400 hover:text-yellow-500">
            <Image src={HandBag} width={24} height={24} alt="no" />
          </button>
        </div>
      </div>
    </nav>
  
    {/* Hero Section */}
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-10  lg:py-10">
      {/* Text Content */}
      <div className="max-w-lg text-center lg:text-left">
        <h2 className="text-[#FF9F0D] text-lg font-semibold mb-2">Its Quick & Charming!</h2>
        <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-snug">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h1>
        <p className="mt-4 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sed phasellus dictum neque.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#FF9F0D] text-black font-semibold rounded-[30px] hover:bg-yellow-500">
          See Menu
        </button>
      </div>
  
      {/* Image */}
      <div className="relative mt-10 lg:mt-0">
        <Image
          src={HeaderHero}
          height={670}
          width={700}
          alt="Food Plate"
          className="rounded-full mx-auto lg:mx-0 w-[250px] sm:w-[300px] md:w-[500px] lg:w-[624px] h-auto"
        />
      </div>
    </section>
  </div>
  
  );
}

