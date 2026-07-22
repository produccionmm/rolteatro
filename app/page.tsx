import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Shows from "@/components/Shows";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Shows />
    </>
  );
}