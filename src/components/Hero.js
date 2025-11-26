export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center px-6 md:px-32">
      <p className="font-mono text-[#64ffda] mb-5">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">Kingsley.</h1>
      <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8">I build digital architectures.</h2>
      
      <p className="max-w-xl text-[#8892b0] text-lg leading-relaxed mb-12">
        Full-Stack Software Engineer specializing in scalable systems, 
        self-hosted infrastructure, and AI computer vision prototypes.
      </p>

      <div className="flex gap-4 font-mono">
        <a href="#projects" className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[rgba(100,255,218,0.1)] transition-colors">
          Check out my work
        </a>
      </div>
    </section>
  );
}