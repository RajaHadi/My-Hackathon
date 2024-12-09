import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import N1 from "../../public/NavbarIcons/MagnifyingGlass.png"
import N2 from "../../public/NavbarIcons/User.png"
import N3 from "../../public/NavbarIcons/Handbag.png"
const Navbar = () => {
    return (
      <nav className="bg-black text-white px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="text-3xl font-bold">
            Food<span className="text-[#FF9F0D]">tuck</span>
          </div>
  
          {/* Hamburger Menu for Small Screens */}
          <div className="lg:hidden">
            <button aria-label="Toggle Menu">
              
            </button>
          </div>
  
          {/* Navbar Links (Hidden on Small Screens) */}
          <ul className="hidden lg:flex space-x-6 text-lg">
            <li><Link href="#home" className="hover:text-[#FF9F0D] text-[#FF9F0D]">Home</Link></li>
            <li><Link href="../Menu" className="hover:text-[#FF9F0D]">Menu</Link></li>
            <li><Link href="../Blog" className="hover:text-[#FF9F0D]">Blog</Link></li>
            <li><Link href="../About" className="hover:text-[#FF9F0D]">About</Link></li>
            <li><Link href="../Shop" className="hover:text-[#FF9F0D]">Shop</Link></li>
            <li><Link href="#contact" className="hover:text-[#FF9F0D]">Contact</Link></li>
          </ul>
  
          {/* Search Input */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href={""}><Image src={N1} alt="no" width={24} height={24} /></Link>
            <Link href={""}><Image src={N2} alt="no" width={24} height={24} /></Link>
            <Link href={"../CheckOut"}><Image src={N3} alt="no" width={24} height={24} /></Link>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><Link href="#home" className="hover:text-[#FF9F0D]">Home</Link></li>
            <li><Link href="../Menu" className="hover:text-[#FF9F0D]">Menu</Link></li>
            <li><Link href="../Blog" className="hover:text-[#FF9F0D]">Blog</Link></li>
            <li><Link href="../About" className="hover:text-[#FF9F0D]">About</Link></li>
            <li><Link href="../Shop" className="hover:text-[#FF9F0D]">Shop</Link></li>
            <li><Link href="#contact" className="hover:text-[#FF9F0D]">Contact</Link></li>
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            <Link href={""}><Image src={N1} alt="no" width={24} height={24} /></Link>
            <Link href={""}><Image src={N2} alt="no" width={24} height={24} /></Link>
            <Link href={"../CheckOut"}><Image src={N3} alt="no" width={24} height={24} /></Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;

