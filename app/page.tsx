import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { Projects } from "@/components/sections/Projects";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Process />
        <Products />
        <WhyUs />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
