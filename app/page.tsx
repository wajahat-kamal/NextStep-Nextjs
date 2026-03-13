import HeroSection from "@/components/homePage/HomeHeroSection";
import FeaturedShoes from "@/components/homePage/FeaturedShoes";
import Categories from "@/components/homePage/Categories";
import BrandStrip from "@/components/homePage/BrandStrip";
import CTABanner from "@/components/reusable/CTABanner";
import Testimonials from "@/components/homePage/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedShoes/>
      <Categories/>
      <Testimonials/>
      <BrandStrip/>
      <CTABanner/>
    </div>
  );
}
