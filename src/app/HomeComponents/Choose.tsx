import React from "react";

const Menu = () => {
  const menuItems = [
    { name: "Lettuce Leaf", price: "12.5$", description: "Lacus nisl, et ac dapibus velit in consequat.", image: "/lettuce-leaf.jpg" },
    { name: "Glow Cheese", price: "12.5$", description: "Lacus nisl, et ac dapibus velit in consequat.", image: "/glow-cheese.jpg" },
    { name: "Italian Pizza", price: "14.5$", description: "Lacus nisl, et ac dapibus velit in consequat.", image: "/italian-pizza.jpg" },
    { name: "Slice Beef", price: "12.5$", description: "Lacus nisl, et ac dapibus velit in consequat.", image: "/slice-beef.jpg" },
    { name: "Fresh Bread", price: "12.5$", description: "Lacus nisl, et ac dapibus velit in consequat.", image: "/fresh-bread.jpg" },
    { name: "Mushroom Pizza", price: "12.5$", description: "Lacus nisl, et ac dapibus velit in consequat.", image: "/mushroom-pizza.jpg" },
  ];

  return (
    <div className="bg-black text-white py-10 px-6">
      <h1 className="text-center text-4xl font-bold mb-8">From Our Menu</h1>
      <div className="flex justify-center space-x-8 text-yellow-500 mb-6">
        <span className="cursor-pointer">Breakfast</span>
        <span className="cursor-pointer">Lunch</span>
        <span className="cursor-pointer">Dinner</span>
        <span className="cursor-pointer">Dessert</span>
        <span className="cursor-pointer">Drink</span>
        <span className="cursor-pointer">Snack</span>
        <span className="cursor-pointer">Soups</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-32 text-white rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-400 text-center text-sm mt-2">{item.description}</p>
            <span className="text-yellow-500 text-lg font-bold mt-2">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;