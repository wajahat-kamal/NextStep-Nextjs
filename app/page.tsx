import HeroSection from "@/components/homePage/HomeHeroSection";
import FeaturedShoes from "@/components/homePage/FeaturedShoes";

export default function Home() {
  return (
    <div className="bg-bgColor">
      <HeroSection/>
      <FeaturedShoes/>
    </div>
  );
}
