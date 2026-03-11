import HeroSection from "@/components/homePage/HomeHeroSection";
import FeaturedShoes from "@/components/homePage/FeaturedShoes";
import Categories from "@/components/homePage/Categories";
import BrandStrip from "@/components/homePage/BrandStrip";

export default function Home() {
  return (
    <div className="bg-bgColor">
      <HeroSection/>
      <FeaturedShoes/>
      <Categories/>
      <BrandStrip/>
    </div>
  );
}
