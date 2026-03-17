import HeroSection from "@/components/home/HomeHeroSection";
import FeaturedShoes from "@/components/home/FeaturedShoes";
import Categories from "@/components/home/Categories";
import BrandStrip from "@/components/home/BrandStrip";
import CTABanner from "@/components/reusable/CTABanner";
import Testimonials from "@/components/home/Testimonials";

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
