import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Creations from "@/components/Creations";
import Services from "@/components/Services";
import Experiences from "@/components/Experiences";
import Sites from "@/components/Sites";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Creations />
      <Services />
      <Experiences />
      <Sites />
      <Contact />
      <Footer />
    </main>
  );
}