import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LOGIBUY | Importación desde China y logística internacional",
    template: "%s",
  },
  applicationName: "LOGIBUY",
  description:
    "LOGIBUY ofrece soluciones de importación desde China, logística internacional, supply chain, servicios aduanales y acompañamiento comercial para empresas en Latinoamérica y Europa.",
  openGraph: {
    siteName: "LOGIBUY",
    locale: "es_ES",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${poppins.variable} font-poppins antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
