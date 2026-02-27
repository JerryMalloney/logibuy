import type { Metadata } from "next";
import Hero from "@/components/about/Hero";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import ServicesSection from "@/components/about/ServicesSection";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | LOGIBUY - Importación y logística internacional",
  description:
    "Conoce al equipo de LOGIBUY: especialistas en importación desde China, logística internacional, supply chain, inspecciones técnicas y operaciones aduanales para empresas en expansión.",
  keywords: [
    "about logibuy",
    "empresa de importación desde china",
    "agencia logística internacional",
    "consultoría supply chain",
    "servicios aduanales",
  ],
};

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
