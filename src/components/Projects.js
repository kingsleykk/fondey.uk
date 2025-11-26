'use client';

export default function Projects() {
  const folderIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  );

  const linkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  );

  const projects = [
    {
      title: "Kompleks Asia City Platform",
      desc: "Engineered a digital ecosystem for a major shopping mall. Features include public-facing interactive maps for visitors and a custom Content Management System (CMS) for staff to broadcast facility news, renovations, and administrative updates to tenants and the public in real-time.",
      tech: ["React", "Nhost", "Interactive Maps", "Custom CMS"],
      link: "https://asiacity.fondey.uk", 
      isVideo: false,
      featured: true
    },
    {
      title: "Maritime Vessel Detection",
      desc: "AIOT prototype for Kaohsiung Harbor. Trained YOLOv12 models to detect specific vessel types for national surveillance.",
      tech: ["Python", "PyTorch", "CUDA", "YOLOv12"],
      link: "/output.mp4", 
      isVideo: true, 
      featured: false
    },
    {
      title: "Portfolio V1",
      desc: "High-performance personal site built with Next.js and custom canvas animations.",
      tech: ["Next.js", "Tailwind", "Canvas API"],
      link: "https://github.com/kingsleykk/fondey.uk", 
      isVideo: false,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20">
      <h2 className="text-3xl font-mono text-white mb-12 flex items-center">
        <span className="text-[#64ffda] mr-2">02.</span> Selected Projects
        <span className="h-px bg-gray-700 w-64 ml-4 hidden md:block"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className={`h-full flex flex-col p-8 rounded-lg bg-[rgba(20,20,30,0.7)] hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#64ffda] group ${proj.featured ? 'md:col-span-2' : ''}`}>
            
            <div className="mb-6">
              {proj.isVideo ? (
                <div className="rounded-md overflow-hidden border border-[rgba(100,255,218,0.1)]">
                  <video 
                    src={proj.link} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                <div className="flex justify-between items-center w-full border-none p-0">
                  {folderIcon}
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                      {linkIcon}
                    </a>
                  )}
                </div>
              )}
            </div>


            <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors mb-2 font-mono">
              {proj.title}
            </h3>
            
            <p className="text-[#8892b0] text-sm mb-6 leading-relaxed">
              {proj.desc}
            </p>
            
            <div className="flex flex-wrap gap-3 font-mono text-xs text-[#8892b0] mt-auto">
              {proj.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
