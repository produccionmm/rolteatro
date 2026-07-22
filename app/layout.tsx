import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/600.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Rolteatro | Escuela y Compañía de Teatro",
  description:
    "Escuela y compañía de teatro en San Sebastián de los Reyes. Formación actoral, entrenamiento escénico y producciones teatrales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}