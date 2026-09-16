import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
