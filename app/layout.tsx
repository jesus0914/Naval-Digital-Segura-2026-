import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnalyticsTracker from "./components/AnalyticsTracker";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naval Digital Segura 2026",
  description:
    "Campaña de seguridad digital del Colegio Naval de Crespo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geist.className} min-h-screen flex flex-col bg-[#070d1a] text-white`}
      >
        <AnalyticsTracker />

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}