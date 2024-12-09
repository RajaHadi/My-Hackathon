import React from "react";
export default function FoodMenu() {
  return (
    <div className="p-6 pt-12 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-4">Our Food Menu</h1>
      <p className="text-center text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack'].map(
          (category, index) => (
            <span
              key={index}
              className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-gray-600 hover:text-orange-500 cursor-pointer px-2"
            >
              {category}
            </span>
          )
        )}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-[#FF9F0D]">
                Alder Grilled Chinook Salmon
              </h2>
              <p className="text-sm text-gray-500">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-xs text-gray-400 mt-1">500 CAL</p>
            </div>
            <p className="text-lg font-bold text-orange-500">₹329</p>
          </div>
        ))}
      </div>
    </div>
  );
}
