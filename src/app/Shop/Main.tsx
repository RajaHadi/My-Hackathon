import React from "react";
import Image from "next/image";
import I1 from "../../../public/ShopImg/Mask Group (3).png"
import I2 from "../../../public/ShopImg/unsplash_LgTyii0GDKQ.png"
import I3 from "../../../public/ShopImg/Mask Group (4).png"
import I4 from "../../../public/ShopImg/Mask Group (5).png"
import I5 from "../../../public/ShopImg/Mask Group (6).png"
import I6 from "../../../public/ShopImg/Mask Group (7).png"

const Main = () => {
  return (
    <div className="min-h-screen mt-14 bg-gray-100 p-4">
      {/* Header with Sort By and Show */}
      <header className="flex items-center justify-start space-x-4 mb-4">
        <select className="p-2 border rounded-md">
          <option>Sort By: Newest</option>
          <option>Sort By: Price</option>
          <option>Sort By: Popular</option>
        </select>
        <select className="p-2 border rounded-md">
          <option>Show: Default</option>
          <option>Show: Highest Rated</option>
        </select>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Products Section */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={I1}
              alt="Fresh Lime"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Fresh Lime</h3>
              <p className="text-[#FF9F0D]">$3.00</p>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={I2}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={I3}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={I4}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={I5}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={I6}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I1}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I2}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I3}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I4

              }
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
           <Image
              src={I5}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I6}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I3}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I2}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
              src={I1}
              alt="Chocolate Muffin"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D]">$4.00</p>
            </div>
          </div>
          {/* Add more products as needed */}
        </div>

        {/* Sidebar */}
        <aside className="w-1/4 pl-4">
          {/* Search */}
          <div className="mb-4 mt-3">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full p-2 border bg-[#FF9F0D1A] rounded-md"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-4 flex flex-col gap-3">
            <h2 className="text-[20px] font-bold mb-2">Category</h2>
            <ul className="space-y-2 flex flex-col gap-4">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Sandwiches
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Burger
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Chicken Chop
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Drinks
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Pizza
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Thai
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Non Veg
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Un Categorized
                </label>
              </li>
            </ul>
          </div>

          {/* Filter By Price */}
          <div className="mb-4 pt-4">
            <h2 className="text-lg font-bold mb-2">Filter by Price</h2>
            <input type="range" min="0" max="100" className="w-full" />
          </div>

          {/* Latest Products */}
          <div className="mb-4">
            <h2 className="text-[20px] font-bold mb-2">Latest Products</h2>
            <ul className=" flex flex-col gap-4 space-y-2">
              <li>
                <p className="text-gray-700">Pizza - $12.00</p>
              </li>
              <li>
                <p className="text-gray-700">Burger - $8.00</p>
              </li>
              <li>
                <p className="text-gray-700">Chicken Chop - $10.00</p>
              </li>
              <li>
                <p className="text-gray-700">Cup Cakes - $10.00</p>
              </li>
              <li>
                <p className="text-gray-700">Cookies - $10.00</p>
              </li>
            </ul>
          </div>

          {/* Product Tags */}
          <div>
            <h2 className="text-lg font-bold pt-4 mb-2">Product Tags</h2>
            <div className="flex flex-wrap gap-4">
              <span className="px-2 py-1 bg-gray-200 rounded">Pizza</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Burger</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Drinks</span>
              <span className="px-2 py-1 bg-[#FF9F0D] rounded">Sandwiches</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Cookies</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Services</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Our Menu</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Tandoori</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Main;
