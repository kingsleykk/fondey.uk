export default function About() {

const icons = {
    react: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#64ffda]" // <--- CHANGED FROM w-6 h-6 TO w-8 h-8 AND ENSURED IT APPLIES
      >
        <circle cx="12" cy="12" r="3"></circle>
        <path
          d="M12 2.1c5.5 0 10 4.5 10 9.9s-4.5 9.9-10 9.9S2 17.4 2 12 6.5 2.1 12 2.1z"
          transform="rotate(120 12 12)"
        ></path>
        <path
          d="M12 2.1c5.5 0 10 4.5 10 9.9s-4.5 9.9-10 9.9S2 17.4 2 12 6.5 2.1 12 2.1z"
          transform="rotate(60 12 12)"
        ></path>
        <path d="M12 2.1c5.5 0 10 4.5 10 9.9s-4.5 9.9-10 9.9S2 17.4 2 12 6.5 2.1 12 2.1z"></path>
      </svg>
    ),

    database: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#64ffda]"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5"></path>
      </svg>
    ),

    python: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#64ffda]"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        <path d="M12 6v6l4 2"></path>
      </svg>
    ),

    vision: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#64ffda]"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),

    docker: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#64ffda]"
      >
        <rect x="2" y="14" width="20" height="8" rx="2"></rect>
        <path d="M6 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"></path>
      </svg>
    ),

    next: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#64ffda]"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    ),

    git: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#64ffda]"
      >
        <circle cx="12" cy="18" r="3"></circle>
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="18" cy="6" r="3"></circle>
        <path d="M6 9v3a6 6 0 0 0 6 6v3"></path>
        <path d="M18 9v.35a3.65 3.65 0 0 1-2.25 3.32"></path>
      </svg>
    ),
  };

  const skills = [
    { name: "React", icon: icons.react },
    { name: "Hasura", icon: icons.database },
    { name: "Python", icon: icons.python },
    { name: "YOLOv12", icon: icons.vision },
    { name: "Docker", icon: icons.docker },
    { name: "MySQL", icon: icons.database },
    { name: "Next.js", icon: icons.next },
    { name: "Git", icon: icons.git },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        
        <div className="md:w-3/5">
          <h2 className="text-3xl font-mono text-white mb-8 flex items-center">
            <span className="text-[#64ffda] mr-2">01.</span> About Me
            <span className="h-px bg-gray-700 w-48 ml-4 hidden md:block"></span>
          </h2>
          
          <div className="text-[#8892b0] text-lg leading-relaxed space-y-6">
            <p>
              Hello! I&apos;m Kingsley, a software engineer who enjoys bridging the gap between 
              <strong className="text-[#64ffda]"> complex backend systems</strong> and 
              <strong className="text-[#64ffda]"> sleek user interfaces</strong>.
            </p>
            <p>
              My journey started with web development, but I&apos;ve recently dived deep into 
              AI and Computer Vision. I successfully prototyped a vessel detection system 
              during my time in Taiwan, and I am currently the sole engineer managing digital 
              transformation for a property firm in Malaysia.
            </p>
            <p>
              I am currently preparing to research Computer Science at <strong className="text-[#64ffda]">RMIT</strong>, 
              where I plan to further specialize in scalable architecture.
            </p>
          </div>
        </div>

        <div className="md:w-2/5">
          <h3 className="text-xl font-mono text-white mb-6">Tech Stack</h3>
          <ul className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-3 text-sm font-mono text-[#8892b0] hover:text-white transition-colors duration-300">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}