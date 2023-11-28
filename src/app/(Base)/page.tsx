import React from "react";
import ServiceSection from "@/components/ui/home/ServiceSection/ServiceSection";
import CategorySection from "@/components/ui/home/CategorySection/CategorySection";
import Testimonials from "@/components/ui/home/Testimonials.tsx/Testimonials";
import NewsSection from "@/components/ui/home/NewsSection/NewsSection";
import HeroSection from "@/components/ui/home/HeroSection/HeroSection";
import Partner from "@/components/ui/home/Partner/Partner";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceSection />
      <CategorySection />
      <Testimonials />
      <Partner/>
      <NewsSection />
    </div>
  );
};

export default Home;
