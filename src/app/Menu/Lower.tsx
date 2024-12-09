import React from 'react'
import Image from 'next/image';
import StarterImg from "../../../public/MenuPageImg/Rectangle 8874.png"
import CourseImg from "../../../public/MenuPageImg/unsplash_-GFCYhoRe48 (1).png"
import Desert from "../../../public/MenuPageImg/unsplash_90HdOlGbjck.png"
import Drink from "../../../public/MenuPageImg/unsplash_akwA-GPF710.png"

const  Lower = () => {
    return (
      <div className="bg-white px-6 py-8">
        {/* Two-Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Starter Menu Section */}
          <div className="flex justify-center lg:justify-start">
            {/* Left Image */}
            <Image
              src={Desert} // Replace with actual image URL
              height={626}
              width={448}
              alt="Dish"
              className="w-full max-w-[448px] rounded-lg"
            />
          </div>
          <div>
            {/* Starter Menu Content */}
            <h2 className="font-bold text-[32px] sm:text-[48px] mb-4 text-center lg:text-left">
              Deserts
            </h2>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Fig and lemon cake</span>
                  <span className="text-[#FF9F0D] font-bold">425</span>
                </div>
                <p className="text-sm text-gray-600">Maple glazed, topped with lemon drizzle</p>
                <p className="text-xs text-gray-500">560Cal</p>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Creamy mascarpone cake</span>
                  <span className="text-[#FF9F0D] font-bold">435</span>
                </div>
                <p className="text-sm text-gray-600">Gorgeous mix of fresh berries with cream</p>
                <p className="text-xs text-gray-500">300Cal</p>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Pastry, blueberries, lemon juice</span>
                  <span className="text-[#FF9F0D] font-bold">145</span>
                </div>
                <p className="text-sm text-gray-600">Grilled onions, avocado, and fresh herbs</p>
                <p className="text-xs text-gray-500">400Cal</p>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Pain au chocolat</span>
                  <span className="text-[#FF9F0D] font-bold">355</span>
                </div>
                <p className="text-sm text-gray-600">Smashed yellow potatoes, coconut milk base</p>
                <p className="text-xs text-gray-500">350Cal</p>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Divider */}
        <hr className="my-8 border-gray-300" />
  
        {/* Main Course Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Main Course Content */}
            <h2 className="font-bold text-[32px] sm:text-[48px] mb-4 text-center lg:text-left">
              Drinks
            </h2>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Caffè macchiato</span>
                  <span className="text-[#FF9F0D] font-bold">325</span>
                </div>
                <p className="text-sm text-gray-600">Toasted French bread topped with cheese</p>
                <p className="text-xs text-gray-500">600Cal</p>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Aperol Spritz Capacianno</span>
                  <span className="text-[#FF9F0D] font-bold">435</span>
                </div>
                <p className="text-sm text-gray-600">Ginger sauce, crispy noodles, cashews</p>
                <p className="text-xs text-gray-500">450Cal</p>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Caffe Latte Campuri</span>
                  <span className="text-[#FF9F0D] font-bold">145</span>
                </div>
                <p className="text-sm text-gray-600">Fresh greens, avocado, olives, and feta</p>
                <p className="text-xs text-gray-500">250Cal</p>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="font-medium">Tormentoso BushTea Pintoage</span>
                  <span className="text-[#FF9F0D] font-bold">355</span>
                </div>
                <p className="text-sm text-gray-600">Smashed yellow potatoes, coconut milk base</p>
                <p className="text-xs text-gray-500">350Cal</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            {/* Right Image */}
            <Image
              src={Drink} // Replace with actual image URL
              alt="Burger"
              className="w-full max-w-[448px] rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Lower;