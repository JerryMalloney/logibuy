import Hero from "@/components/contact/Hero";
import Section1 from "@/components/contact/Section1";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contacto LOGIBUY | Asesoria en Importación desde China",
  description:
    "Contacta a LOGIBUY para recibir asesoria en importación desde China, logística internacional, servicios aduanales, cotizaciones y planeación de supply chain.",
  path: "/contact",
  keywords: [
    "contacto logibuy",
    "asesoria importacion china",
    "cotizacion logistica internacional",
    "contacto agente de carga china",
    "servicios aduanales china",
  ],
  image: "/canton1.jpg",
});

const page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
    </div>
  );
};

export default page;
