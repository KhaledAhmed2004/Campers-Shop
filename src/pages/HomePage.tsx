import CategoriesSection from "../components/home/Categories";
import TestimonialSection from "../components/home/TestimonialSection/TestimonialSection";
import HeroSection from "../components/home/HeroSection";
import RecommendedProducts from "../components/home/RecommendedProducts";
import FAQSection from "../components/home/Faq";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <RecommendedProducts></RecommendedProducts>
      <CategoriesSection></CategoriesSection>
      <TestimonialSection></TestimonialSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default HomePage;
