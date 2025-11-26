Kingsley's Developer Portfolio

A high-performance, responsive developer portfolio built with the latest web technologies to showcase my engineering projects and technical skills.

🔗 Live Site: fondey.uk

![Portfolio Preview](public/preview-image.png)

🚀 Tech Stack

This project is built using a modern, scalable stack focusing on performance and developer experience:

Framework: Next.js 16 (App Router) - For server-side rendering, static generation, and optimal performance.

Styling: Tailwind CSS v4 - Utilizing the new CSS-first configuration and engine for lightning-fast builds.

Animations: Custom Canvas API & GSAP - For the interactive particle background and scroll-triggered reveals.

Deployment: GitHub Pages (via GitHub Actions) - Fully automated CI/CD pipeline for static exports.

Icons: Inline SVG - For crisp, scalable, and performance-friendly iconography.

✨ Key Features

Interactive Particle Background: A custom-built HTML5 Canvas animation that reacts to mouse movement, optimized for performance in React.

Bento Grid Layout: A modern, responsive grid layout for showcasing projects, featuring glassmorphism effects.

Video Previews: Integrated video player support for project cards to demonstrate dynamic work (like computer vision prototypes).

Responsive Design: Fully adaptive layout that works seamlessly across mobile, tablet, and desktop devices.

Performance Optimized: Uses Next.js static export (output: 'export') for blazing fast load times and SEO benefits.

🛠️ Getting Started

To run this project locally on your machine:

Clone the repository:

git clone [https://github.com/kingsleykk/fondey-portfolio.git](https://github.com/kingsleykk/fondey-portfolio.git)
cd fondey-portfolio


Install dependencies:

npm install


Run the development server:

npm run dev


Open your browser:
Navigate to http://localhost:3000 to see the site live.

📂 Project Structure

/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.js        # Root layout (HTML/Body structure)
│   ├── page.js          # Homepage composition
│   └── globals.css      # Global styles & Tailwind imports
├── components/          # Reusable React components
│   ├── Navbar.js        # Navigation bar
│   ├── Hero.js          # Hero section
│   ├── Projects.js      # Project showcase grid
│   ├── About.js         # About me & tech stack
│   ├── Contact.js       # Contact form & social links
│   └── ParticleBg.js    # Canvas animation logic
├── public/              # Static assets (images, videos, CNAME)
└── next.config.mjs      # Next.js configuration


🤝 Contact

Feel free to reach out if you're interested in my work or just want to connect!

Website: fondey.uk

GitHub: @kingsleykk

LinkedIn: Kingsley Kong

Built with ❤️ by Kingsley Kong
