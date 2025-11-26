export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full px-6 py-4 md:px-12 flex justify-between items-center bg-[rgba(10,10,10,0.85)] backdrop-blur-md z-50 border-b border-transparent hover:border-[rgba(100,255,218,0.1)] transition-colors">
      <div className="font-mono font-bold text-[#64ffda] text-lg">
        KINGSLEY_DEV
      </div>
      
      <ul className="hidden md:flex gap-8 font-mono text-sm text-[#ccd6f6]">
        <li>
          <a href="#about" className="hover:text-[#64ffda] transition-colors">
            <span className="text-[#64ffda]">01.</span> About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#64ffda] transition-colors">
            <span className="text-[#64ffda]">02.</span> Work
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#64ffda] transition-colors">
            <span className="text-[#64ffda]">03.</span> Contact
          </a>
        </li>
      </ul>

      <a href="#contact" className="md:hidden text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded text-xs font-mono">
        Contact
      </a>
    </nav>
  );
}