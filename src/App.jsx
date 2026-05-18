import { Analytics } from '@vercel/analytics/react';
import AnimatedGrid from '@/components/Common/AnimatedGrid';
import ScrollProgress from '@/components/Common/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <AnimatedGrid />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
