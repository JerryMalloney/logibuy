import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Envíos | LOGIBUY",
  description:
    "Calcula costos estimados de envío aéreo y marítimo con la calculadora logística de LOGIBUY para importaciones desde China.",
};

export default function CalculadoraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
