import React from 'react'
import BlogCard from './BlogCard'
import B1 from "../../../public/Image Placeholder.png"
import B2 from "../../../public/Image Placeholder (2).png"
import B3 from "../../../public/Image Placeholder (3).png"

const Blog = () => {
    return (
      <div className="flex flex-col text-white px-6 items-center gap-6">
        {/* Heading */}
        <h1 className="font-normal text-[32px] text-[#FF9F0D] ">Blog Post</h1>
        <h2 className="font-bold text-[32px] sm:text-[48px] text-center">
          <span className="text-[#FF9F0D]">La</span>test News and Blog
        </h2>
  
        {/* Blog Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <BlogCard image={B1} />
          <BlogCard image={B2} />
          <BlogCard image={B3} />
        </div>
      </div>
    );
  };
  
  export default Blog;
  
