import React from "react";
import Image from "next/image";
import Im1 from "../../../public/AboutUsImages/unsplash_lP5MCM6nZ5A (2).png"
import Im2 from "../../../public/AboutUsImages/unsplash_CLMpC9UhyTo (1).png"
import Im3 from "../../../public/AboutUsImages/unsplash_ZuIDLSz3XLg.png"
import Limg from "../../../public/AboutUsImages/unsplash_3iexvMShGfQ.png"
const About = () => {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        {/* Header Section */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Im1}
              alt="Tacos"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
            <Image
              src={Im2}
              alt="Fried Food"
              className="rounded-lg shadow-md object-cover h-40 w-full"
            />
            <Image
              src={Im3}
              alt="Salad"
              className="col-span-2 rounded-lg shadow-md object-cover h-40 w-full"
            />
          </div>
  
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="font-normal text-[18px] text-[#FF9F0D]">About Us </h1>
            <h1 className="text-4xl font-bold text-gray-800">
              Food is an important part of a balanced diet
            </h1>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione nihil nesciunt animi repellat magni quo, officiis vel esse amet maxime sed, quae facilis aliquam vitae, eos debitis eligendi suscipit in hic? Eaque incidunt quasi culpa. Illo, dolorem? Deleniti, consequuntur.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-[#FF9F0D] text-white rounded-lg hover:bg-orange-600">
                Show Offers
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                Watch Video
              </button>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="mt-16 py-12 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum pellentesque est nec bibendum. Etiam ac mauris id arcu vehicula
            interdum.
          </p>
          <div className="flex gap-8 justify-center">
            <Image
              src={Limg}
              alt="Salmon Dish"
              className="rounded-lg shadow-md object-cover w-full h-60"
            />
          </div>
        </section>
      </div>
    );
  };
  export default About;