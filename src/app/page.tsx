import Image from "next/image";
import HeroSection from "./HomeComponents/HeroSection";
import AboutUs from "./HomeComponents/AboutUs";
import FoodCategory from "./HomeComponents/FoodCategory";
import ChooseUs from "./HomeComponents/ChooseUs";
import QualityPoints from "./HomeComponents/QualityPoints";
import Chef from "./HomeComponents/Chef";
import Testimonial from "./HomeComponents/Testimonial";
import RC from "../../public/Restraind creative Process.png"
import Blog from "./HomeComponents/Blog";
import Footer from "./HomeComponents/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
   <HeroSection/>
   <AboutUs/>
   <FoodCategory/>
   <ChooseUs/>
   <QualityPoints/>
   <Chef/>
   <Testimonial/>
   <Image src={RC} alt="no" className="pt-10"/>
   <Blog/>
   <Footer/>
   </div>
  );
}
