'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const parsedCart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
  
    // Validate and clean cart data
    const validCart = parsedCart.map((item) => ({
      ...item,
      price: item.price || 1, //
      quantity: item.quantity || 1, 
    }));
  
    setCartItems(validCart);
  
    
    const calculatedSubtotal = validCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, []);
  

  const shippingCost:number = 0; // Adjust as needed
  const discount :number = 0.25; // 25% discount
  const taxRate:number = 0.1; // 10% tax
  const discountedSubtotal = subtotal * (1 - discount);
  const tax = discountedSubtotal * taxRate;
  const total = discountedSubtotal + tax + shippingCost;

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
                required
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
              required
                type="email"
                placeholder="Email address"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
              />
              <input
              required
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
              />
              <input
              required
                type="text"
                placeholder="Company"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <select className="border border-gray-300 p-3 rounded-lg w-full">
                  <option>Choose country</option>
                  
                  <option>Pakistan</option>
                </select>
                <select className="border border-gray-300 p-3 rounded-lg w-full">
                  <option>Choose city</option>
                 
                  <option>Karachi</option>
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
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <Image
                      src={item.image || '/placeholder-image.png'}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg"
                      width={64}
                      height={64}
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-[16px]">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No items in the cart.</p>
              )}
            </div>

            {/* Pricing Details */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <p>Sub-total</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Shipping</p>
                <p>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Discount</p>
                <p>{discount * 100}%</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Tax</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg w-full mt-6">
              Place an order
            </button>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-8 items-center">
          <Link href={"./Cart"}><button className="text-gray-500 underline">Back to cart</button></Link>
          <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg">
            Proceed to shipping
          </button>
        </div>
      </div>
    </div>
  );
}
