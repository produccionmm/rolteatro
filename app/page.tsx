import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Shows from "@/components/show/Shows";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhoWeAre />
        <About />
        <Courses />
        <Shows />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}