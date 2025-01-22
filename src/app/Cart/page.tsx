'use client';
import Link from "next/link";
import Footer from "../HomeComponents/Footer";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const initializedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Default quantity to 1 if not present
    }));
    setCartItems(initializedCart);
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharge = 10.0;
  const totalAmount = subtotal + shippingCharge;

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-black text-white p-6 text-center">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </header>

        <div className="max-w-5xl mx-auto mt-10 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <h2 className="text-xl font-semibold">Your cart is empty!</h2>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300 text-left text-sm sm:text-base">
                      <th className="p-2 sm:p-4">Product</th>
                      <th className="p-2 sm:p-4">Price</th>
                      <th className="p-2 sm:p-4">Quantity</th>
                      <th className="p-2 sm:p-4">Total</th>
                      <th className="p-2 sm:p-4">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item._id} className="border-b border-gray-200 text-sm sm:text-base">
                        <td className="p-2 sm:p-4 flex items-center">
                          <img
                            src={item.image || "/placeholder-image.png"}
                            alt={item.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-md mr-2 sm:mr-4"
                          />
                          <span className="truncate max-w-[200px] md:max-w-none">{item.name}</span>
                        </td>
                        <td className="p-2 sm:p-4">${item.price.toFixed(2)}</td>
                        <td className="p-2 sm:p-4">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item._id, parseInt(e.target.value, 10))}
                            className="border p-1 sm:p-2 w-12 sm:w-16 text-center"
                            min="1"
                          />
                        </td>
                        <td className="p-2 sm:p-4">${(item.price * item.quantity).toFixed(2)}</td>
                        <td
                          className="p-2 sm:p-4 text-red-500 cursor-pointer"
                          onClick={() => removeItem(item._id)}
                        >
                          X
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="w-full border p-3 rounded-md text-sm sm:text-base"
                  />
                  <button className="mt-2 w-full md:w-auto bg-[#FF9F0D] text-white px-6 py-2 rounded-md text-sm sm:text-base">
                    Apply
                  </button>
                </div>

                <div className="w-full md:w-1/2 bg-gray-100 p-4 sm:p-6 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold">Total Bill</h2>
                  <div className="flex justify-between mt-2">
                    <span>Cart Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Shipping Charge:</span>
                    <span>${shippingCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mt-4 text-lg font-bold">
                    <span>Total Amount:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <Link href={"./CheckOut"}>
                  <button className="mt-4 w-full bg-[#FF9F0D] text-white py-2 rounded-md text-sm sm:text-base">
                    Proceed to Checkout
                  </button></Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
