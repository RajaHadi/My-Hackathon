import React from "react";
import Image from "next/image";
import F1 from "../../../public/FooterImg/Mask Group.png"
import F2 from "../../../public/FooterImg/Mask Group (1).png"
import F3 from "../../../public/FooterImg/Mask Group (2).png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Support Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold ">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-sm mt-2">
            Dont wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-auto px-4 py-2 bg-[#FF9F0D]  rounded-l-md"
            />
            <button className="bg-white text-[#FF9F0D] px-4 py-2 rounded-r-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mt-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="mt-4 text-sm">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable safe and professional chauffeured car
            service in major cities across the world
          </p>
          <div className="mt-4">
            <h4 className="font-semibold">Opening Hours</h4>
            <p>Mon - Sat: 9:00 - 6:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-bold">Useful Links</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm space-y-2">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-bold">Help?</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm space-y-2">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h3 className="text-lg font-bold">Recent Posts</h3>
          <ul className="mt-4 space-y-4">
            <li className="text-sm flex items-center">
              <div className="w-16 h-16 flex-shrink-0"><Image src={F1} alt="no"/></div>
              <div className="ml-4">
                <p>20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </li>
            <li className="text-sm flex items-center">
              <div className="w-16 h-16 flex-shrink-0"><Image src={F2} alt="no"/></div>
              <div className="ml-4">
                <p>20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </li>
            <li className="text-sm flex items-center">
              <div className="w-16 h-16 flex-shrink-0"><Image src={F3} alt="no"/></div>
              <div className="ml-4">
                <p>20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          Copyright © 2022 by Ayeman All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;