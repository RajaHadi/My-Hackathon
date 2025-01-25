'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import N1 from "../../public/NavbarIcons/MagnifyingGlass.png"
import N2 from "../../public/NavbarIcons/User.png"
import N3 from "../../public/NavbarIcons/Handbag.png"
import { useState } from "react";

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4">
        <SignedOut>
                  
                  <SignInButton>
                  <button
                            className="px-4 py-1 bg-[rgb(255,159,13)] text-white font-semibold rounded-lg shadow-md hover:bg-[rgb(255,135,24)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                        >
                            Sign In
                        </button>
                  </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton 
                     appearance={{
                      elements: {
                          userButtonTrigger:
                              "px-3  bg-[rgb(255,159,13)] text-white font-medium rounded hover:bg-[rgb(255,135,24)] transition",
                      },
                  }}
                    />
                  </SignedIn>
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-3xl font-bold">
          Food<span className="text-[#FF9F0D]">tuck</span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links (Hidden on Small Screens) */}
        <ul className="hidden lg:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-[#FF9F0D] text-[#FF9F0D]">
              Home
            </Link>
          </li>
          <li>
            <Link href="../Menu" className="hover:text-[#FF9F0D]">
              Menu
            </Link>
          </li>
          <li>
            <Link href="../Blog" className="hover:text-[#FF9F0D]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="../About" className="hover:text-[#FF9F0D]">
              About
            </Link>
          </li>
          <li>
            <Link href="../Shop" className="hover:text-[#FF9F0D]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[#FF9F0D]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search/Input Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href={""}>
            <Image src={N1} alt="icon1" width={24} height={24} />
          </Link>
          <Link href={""}>
            <Image src={N2} alt="icon2" width={24} height={24} />
          </Link>
          <Link href={"../Cart"}>
            <Image src={N3} alt="icon3" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link href="/" className="hover:text-[#FF9F0D]">
                Home
              </Link>
            </li>
            <li>
              <Link href="../Menu" className="hover:text-[#FF9F0D]">
                Menu
              </Link>
            </li>
            <li>
              <Link href="../Blog" className="hover:text-[#FF9F0D]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="../About" className="hover:text-[#FF9F0D]">
                About
              </Link>
            </li>
            <li>
              <Link href="../Shop" className="hover:text-[#FF9F0D]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#FF9F0D]">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            <Link href={""}>
              <Image src={N1} alt="icon1" width={24} height={24} />
            </Link>
            <Link href={""}>
              <Image src={N2} alt="icon2" width={24} height={24} />
            </Link>
            <Link href={"../Cart"}>
              <Image src={N3} alt="icon3" width={24} height={24} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
