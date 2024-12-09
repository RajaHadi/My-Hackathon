import React from "react";

const Main = () => {
  
    return (
        <div className="min-h-screen bg-gray-100 p-4">
          {/* Header */}
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Product Menu</h1>
            <div className="flex space-x-4">
              <select className="p-2 border rounded-md">
                <option>Sort By: Newest</option>
                <option>Sort By: Price</option>
                <option>Sort By: Popular</option>
              </select>
              <select className="p-2 border rounded-md">
                <option>Show: Default</option>
                <option>Show: Highest Rated</option>
              </select>
            </div>
          </header>
    
          {/* Main Content */}
          <div className="flex">
            {/* Products Section */}
            <div className="w-3/4 grid grid-cols-2 gap-4">
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Fresh Lime"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Fresh Lime</h3>
                  <p className="text-gray-600">$3.00</p>
                </div>
              </div>
              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Chocolate Muffin"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Chocolate Muffin</h3>
                  <p className="text-gray-600">$4.00</p>
                </div>
              </div>
              {/* Add more products as needed */}
            </div>
    
            {/* Sidebar */}
            <aside className="w-1/4 pl-4">
              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full p-2 border rounded-md"
                />
              </div>
    
              {/* Category Filter */}
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Category</h2>
                <ul className="space-y-2">
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
                </ul>
              </div>
    
              {/* Filter By Price */}
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Filter by Price</h2>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full"
                />
              </div>
    
              {/* Latest Products */}
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Latest Products</h2>
                <ul className="space-y-2">
                  <li>
                    <p className="text-gray-700">Pizza - $12.00</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Burger - $8.00</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Chicken Chop - $10.00</p>
                  </li>
                </ul>
              </div>
    
              {/* Product Tags */}
              <div>
                <h2 className="text-lg font-bold mb-2">Product Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-200 rounded">Pizza</span>
                  <span className="px-2 py-1 bg-gray-200 rounded">Burger</span>
                  <span className="px-2 py-1 bg-gray-200 rounded">Drinks</span>
                  <span className="px-2 py-1 bg-gray-200 rounded">Sandwiches</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      );
    };
    
    

export default Main;