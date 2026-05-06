import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitalMente | Bienestar Corporativo Integral",
  description: "Plataforma de salud integral enfocada en resiliencia, nutrición consciente y salud mental. Redescubre tu vitalidad y potencia a tu equipo de trabajo.",
  keywords: ["salud", "nutrición", "mente", "cuerpo", "espíritu", "metabolismo", "superación", "bienestar", "b2b", "corporativo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-inter antialiased bg-vital-bg text-vital-slate">
        {children}
      </body>
    </html>
  );
}
