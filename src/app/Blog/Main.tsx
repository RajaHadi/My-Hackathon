import React from 'react'
import Image from 'next/image';
import IM1 from "../../../public/AboutUsImages/unsplash_lP5MCM6nZ5A (2).png"
import IM2 from "../../../public/AboutUsImages/unsplash_MqT0asuoIcU.png"
import IM3 from "../../../public/AboutUsImages/unsplash_XoByiBymX20.png"
import PIMG from "../../../public/AboutUsImages/img.png"
export default function Main() {
  const posts = [
    {
      title: "10 Reasons To Do A Digital Detox Challenge",
      date: "Feb 14, 2022",
      image: { IM1 },
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      date: "Feb 14, 2022",
      image: { IM2 },
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      date: "Feb 14, 2022",
      image: { IM3 },
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
  ];

  const recentPosts = [
    { title: "Post 1", image: { IM1 } },
    { title: "Post 2", image: { IM2 } },
    { title: "Post 3", image: { IM3 } },
  ];

  const filterMenu = [
    { name: "Chicken Fry", count: 26 },
    { name: "Burger Food", count: 40 },
    { name: "Pizza", count: 10 },
    { name: "Fresh Fruits", count: 36 },
    { name: "Vegetables", count: 76 },
  ];

  const popularTags = ["Sandwich", "Tacos", "Blog", "Restaurant", "Chicken Strips"];

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-6">
      {/* Posts Section */}
      <div className="w-full lg:w-3/4 lg:pr-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
          >
            <Image
              src={IM1}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.description}</p>
              <button className="mt-4 bg-white text-[#FF9F0D] px-4 py-2 rounded border-2 border-[#FF9F0D]">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white shadow-md p-6 rounded-lg mt-6 lg:mt-0">
        {/* Profile Section */}
        <div className="mb-6">
          <Image
            src={PIMG}
            alt="Prince Miyako"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h3 className="text-center text-lg font-semibold mt-4">Prince Miyako</h3>
          <p className="text-center text-gray-600 text-sm">Blogger/Photographer</p>
          <p className="text-center text-yellow-500 text-sm mt-1">⭐⭐⭐⭐⭐ (1 Review)</p>
          <p className="text-center text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            {recentPosts.map((post, index) => (
              <li key={index} className="flex items-center pb-3 space-x-3">
                <Image
                  src={IM2}
                  alt={post.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <p className="text-sm text-gray-700">{post.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter By Menu */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Filter By Menu</h3>
          <ul className="space-y-2">
            {filterMenu.map((item, index) => (
              <li
                key={index}
                className="flex justify-between text-sm pb-3 text-gray-700"
              >
                <span>{item.name}</span>
                <span>({item.count})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Tags */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}