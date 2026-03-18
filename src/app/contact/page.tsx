import type { Metadata } from "next";
import Hero from "@/components/contact/Hero";
import Section1 from "@/components/contact/Section1";

export const metadata: Metadata = {
  title: "Contacto | LOGIBUY",
  description:
    "Habla con el equipo de LOGIBUY para recibir asesoría en importación desde China, logística internacional, servicios aduanales y planeación de supply chain.",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
    </div>
  );
};

export default page;
