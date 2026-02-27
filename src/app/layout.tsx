import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enf. Alicia Rentería | Enfermería Profesional",
  description: "Servicios de enfermería profesional a domicilio en CDMX y Zona Metropolitana.",
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