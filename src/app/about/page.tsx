import Hero from "@/components/about/Hero";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import ServicesSection from "@/components/about/ServicesSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <ServicesSection />

      <Section2 />
    </div>
  );
};

export default page;
