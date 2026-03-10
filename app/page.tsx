import HeroSection from "@/components/homePage/HomeHeroSection";
import FeaturedShoes from "@/components/homePage/FeaturedShoes";
import Categories from "@/components/homePage/Categories";

export default function Home() {
  return (
    <div className="bg-bgColor">
      <HeroSection/>
      <FeaturedShoes/>
      <Categories/>
    </div>
  );
}
