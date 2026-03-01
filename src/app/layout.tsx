import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curae | Agencia de Enfermería a Domicilio",
  description: "Cuidado Profesional con el Corazón en Casa. Servicios de enfermería técnica y especializada en CDMX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}