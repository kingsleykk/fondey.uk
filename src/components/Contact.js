export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center max-w-2xl mx-auto">
      <p className="font-mono text-[#64ffda] mb-4">03. What&apos;s Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
      
      <p className="text-[#8892b0] text-lg mb-12">
        Whether you have a question about my stack, want to discuss AI prototypes, 
        or just want to say hi, my inbox is always open.
      </p>

      <form 
        action="https://formspree.io/f/mldbvgke" 
        method="POST" 
        className="flex flex-col gap-4 text-left mb-16"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required
            className="w-full p-4 bg-[rgba(255,255,255,0.05)] border border-[#333] rounded focus:outline-none focus:border-[#64ffda] text-[#ccd6f6]"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required
            className="w-full p-4 bg-[rgba(255,255,255,0.05)] border border-[#333] rounded focus:outline-none focus:border-[#64ffda] text-[#ccd6f6]"
          />
        </div>
        
        <textarea 
          name="message" 
          rows="5" 
          placeholder="Message" 
          required
          className="w-full p-4 bg-[rgba(255,255,255,0.05)] border border-[#333] rounded focus:outline-none focus:border-[#64ffda] text-[#ccd6f6]"
        ></textarea>

        <button 
          type="submit" 
          className="self-center px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[rgba(100,255,218,0.1)] transition-colors mt-4"
        >
          Send Message
        </button>
      </form>

      <div className="flex justify-center gap-8">
        
        <a href="https://github.com/kingsleykk" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>

        <a href="https://www.linkedin.com/in/jia-cheng-kong-b61aa7363/" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        
      </div>
    </section>
  );
}