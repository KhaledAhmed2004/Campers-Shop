import Categories from "./Categories/Categories";
import Testimonial from "./UniqueSection/Testimonial";
import Faq from "./FAQ/Faq";
import Featured from "./Featured/Featured";
import HeroSection from "./HeroSection/HeroSection";
import RecommendedProducts from "./RecommandedProducts/RecommendedProducts";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="divider px-3 md:px-10  lg:px-16 "></div>
      <RecommendedProducts></RecommendedProducts>
      <Categories></Categories>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
