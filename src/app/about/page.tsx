import Hero from "@/components/about/Hero";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import ServicesSection from "@/components/about/ServicesSection";
import React from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Sobre LOGIBUY | Expertos en Importación y Logística Internacional",
  description:
    "Conoce a LOGIBUY, un equipo especializado en importación desde China, logística internacional, supply chain, inspecciones técnicas y operaciones aduanales para empresas en crecimiento.",
  path: "/about",
  keywords: [
    "sobre logibuy",
    "empresa de importación desde china",
    "agencia logística internacional",
    "consultoría supply chain",
    "servicios aduanales",
    "equipo de logística internacional",
    "operaciones en china",
  ],
  image: "/guangzhou.jpg",
});

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
