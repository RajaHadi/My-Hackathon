import React from "react";
import Image from "next/image";
import img1 from "../../../public/FoodCategoryImg/unsplash_-lHZUkiWM74.png";
import img2 from "../../../public/FoodCategoryImg/unsplash_dphM2U1xq0U.png";
import img3 from "../../../public/FoodCategoryImg/unsplash_MRHyv-hHxgk.png";
import img4 from "../../../public/FoodCategoryImg/unsplash_q54Oxq44MZs.png";

const FoodCategory = () => {
  return (
    <div className="flex flex-col text-white items-center px-6 lg:px-10  lg:py-20">
    {/* Title Section */}
    <h2 className="text-[#FF9F0D]  font-greatVibes text-[32px] font-normal mb-2">
      Food Category
    </h2>
    <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-snug text-center pb-5">
      <span className="text-[#FF9F0D]">Ch</span>oose Food Items
    </h1>
  
    {/* Images Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
      <Image
        src={img1}
        width={300}
        height={330}
        alt="Food 1"
        className="h-auto w-full rounded-md"
      />
      <Image
        src={img2}
        width={300}
        height={330}
        alt="Food 2"
        className="h-auto w-full rounded-md"
      />
      <Image
        src={img3}
        width={300}
        height={330}
        alt="Food 3"
        className="h-auto w-full rounded-md"
      />
      <Image
        src={img4}
        width={300}
        height={330}
        alt="Food 4"
        className="h-auto w-full rounded-md"
      />
    </div>
  </div>
  
  );
};

export default FoodCategory;
