import ParticleBg from '@/components/ParticleBg';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About'; 
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'; 

export default function Home() {
  return (
    <main className="relative">
      <ParticleBg />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="text-center py-6 text-[#8892b0] font-mono text-xs">
        <p>Built by Kingsley • 2025</p>
      </footer>
    </main>
  );
}