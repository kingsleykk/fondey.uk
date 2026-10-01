import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Playground from '@/components/Playground';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="shell">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Playground />
        <Experience />
        <Contact />
      </main>
      <footer
        className="flex flex-wrap justify-between gap-x-5 gap-y-2 pt-6 pb-10 text-xs"
        style={{ borderTop: '1px solid var(--line)', color: 'var(--muted)' }}
      >
        <span>kingsley@homelab:~$ exit</span>
        <span>Melbourne, AU · built and hosted by me · {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
