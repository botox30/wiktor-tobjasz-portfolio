export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Barbershop",
      description: "A professional Polish barbershop website with appointment booking system built with React, TypeScript, Express.js, and Tailwind CSS.",
      image: "https://i.imgur.com/y1EZP94.gif",
      alt: "Barbershop website demo",
      technologies: ["React", "TypeScript", "Express.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Italian Restaurant",
      description: "This is a full-stack web application for an Italian restaurant called \"Bella Vista\" built with React frontend and Express.js backend. The application presents a restaurant website with sections for home, about, menu, gallery, and contact/reservations. It uses modern web technologies including TypeScript, Tailwind CSS with shadcn/ui components, and is configured for PostgreSQL database with Drizzle ORM.",
      image: "https://i.imgur.com/HbtBXwZ.gif",
      alt: "Italian restaurant website showcase",
      technologies: ["React", "Express.js", "TypeScript", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Beauty Salon",
      description: "This is a modern beauty salon website built with React, TypeScript, and Express. The application provides a comprehensive online presence for a beauty salon called \"Bella Beauty\" with booking functionality, service showcase, gallery, and contact features. The website is designed with a Polish interface and focuses on user experience with a clean, elegant design using Tailwind CSS and shadcn/ui components.",
      image: "https://i.imgur.com/ccWHK1g.gif",
      alt: "Beauty salon website demonstration",
      technologies: ["React", "TypeScript", "Express.js", "Tailwind CSS"],
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow" data-testid="portfolio-title">Featured Work</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group"
              data-testid={`project-${project.id}`}
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid={`project-image-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400" data-testid={`project-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4" data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-dark-100 rounded-full text-xs text-purple-300"
                    data-testid={`project-tech-${project.id}-${index}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
