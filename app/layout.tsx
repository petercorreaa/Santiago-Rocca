import type { Metadata } from "next";
import { Space_Grotesk, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

// Barlow Condensed — display / heroes (impacto bold condensado)
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

// Space Grotesk — body + headings medianos (moderna, geométrica)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santiago Rocca — Desarrollo personal",
  description:
    "Santiago Rocca: emprendedor, autor y divulgador del desarrollo personal. Creador del podcast Vive para Contarlo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${barlow.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
