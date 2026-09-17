import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Threats from "./components/Threats";
import BestPractices from "./components/BestPractices";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1220] pt-20 text-white">

        <section id="inicio" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="features" className="scroll-mt-20">
          <Features />
        </section>

        <section id="amenazas" className="scroll-mt-20">
          <Threats />
        </section>

        <section id="buenas-practicas" className="scroll-mt-20">
          <BestPractices />
        </section>

      </main>

      
    </>
  );
}