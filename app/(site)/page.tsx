import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";


export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: "AyoubSVT | SCIENCES DE LA VIE ET DE LA TERRE (SVT)",
  description: "Un site ciblé spécialisé dans les sciences de la vie et de la terre. Il propose un laboratoire virtuel et des cours pour tous les niveaux pour aider les enseignants et les élèves à développer la méthode d'apprentissage de la matière !",
  // other metadata
};



export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Contact />
      <Blog />
    </main>
  );
}
