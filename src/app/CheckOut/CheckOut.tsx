import React from 'react'
import Image from 'next/image';
import Img from '../../../public/Rectangle 8933.png'


export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 flex py-16 items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Address Section */}
          <div>
            <h2 className="text-[20px] font-bold mb-6">Shipping Address</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
              />
              <input
                type="text"
                placeholder="Company"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <select className="border border-gray-300 p-3 rounded-lg w-full">
                  <option>Choose country</option>
                  <option>USA</option>
                  <option>India</option>
                </select>
                <select className="border border-gray-300 p-3 rounded-lg w-full">
                  <option>Choose city</option>
                  <option>New York</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Zip code"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Address 1"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Address 2"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
              />
            </form>
          </div>

          {/* Order Summary Section */}
          <div>
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {/* Product Items */}
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <Image
                      src={Img}
                      alt="Chicken Tikka Kabab"
                      className="w-16 h-16 rounded-lg"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-[16px]">Chicken Tikka Kabab</h3>
                      <p className="text-sm text-gray-500">150 gm net</p>
                      <p className="text-sm font-bold">$105</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Pricing Details */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <p>Sub-total</p>
                <p>$1,306</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Discount</p>
                <p>25%</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Tax</p>
                <p>$54.755</p>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <p>Total</p>
                <p>$432.655</p>
              </div>
            </div>

            {/* Action Buttons */}
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg w-full mt-6">
              Place an order
            </button>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-8 items-center">
          <button className="text-gray-500 underline">Back to cart</button>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg">
            Proceed to shipping
          </button>
        </div>
      </div>
    </div>
  );
}
