import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Asegúrate de tener este archivo o pídele a Cursor que lo cree

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enf. Alicia Rentería | Enfermería Profesional a Domicilio CDMX",
  description: "Servicios de enfermería profesional en CDMX y Zona Metropolitana. Egresada de UNITEC especializada en cuidados intensivos, adulto mayor y postoperatorios.",
  keywords: ["enfermería a domicilio CDMX", "Alicia Rentería enfermera", "cuidados de adultos mayores Valle de México", "enfermera UNITEC", "asistencia médica domiciliaria"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}