import type { Metadata } from "next";
import CalculadoraPage from "@/components/calculadora/CalculadoraPage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calculadora de Envio desde China | LOGIBUY",
  description:
    "Calcula costos estimados de envio aereo y maritimo desde China con la calculadora logistica de LOGIBUY. Compara peso cobrable, CBM, tarifas y tiempos de transito.",
  keywords: [
    "calculadora de envio desde china",
    "calculadora logistica",
    "flete maritimo china",
    "flete aereo china",
    "cbm calculadora",
    "peso volumetrico",
    "importacion desde china",
    "logistica internacional",
  ],
  alternates: {
    canonical: "/calculadora",
  },
  openGraph: {
    title: "Calculadora de Envio desde China | LOGIBUY",
    description:
      "Estima costos de envio aereo y maritimo desde China con una calculadora clara para importaciones internacionales.",
    url: `${siteUrl}/calculadora`,
    siteName: "LOGIBUY",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/hongkong1.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de envios internacionales de LOGIBUY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Envio desde China | LOGIBUY",
    description:
      "Calcula costos estimados de envio aereo y maritimo desde China con LOGIBUY.",
    images: ["/hongkong1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function CalculadoraRoutePage() {
  return (
    <div>
      <CalculadoraPage />
    </div>
  );
}
