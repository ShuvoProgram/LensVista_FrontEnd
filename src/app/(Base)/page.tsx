import Hero from "@/components/ui/home/Hero/Hero";
import React from "react";
import ServiceSection from "@/components/ui/home/ServiceSection/ServiceSection";
import CategorySection from "@/components/ui/home/CategorySection/CategorySection";
import Testimonials from "@/components/ui/home/Testimonials.tsx/Testimonials";
import NewsSection from "@/components/ui/home/NewsSection/NewsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <CategorySection />
      <Testimonials />
      <NewsSection />
    </div>
  );
};

export default Home;
