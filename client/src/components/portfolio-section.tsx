export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Interactive Web Application",
      description: "Dynamic web application with modern UI components and interactive animations.",
      image: "https://i.imgur.com/y1EZP94.gif",
      alt: "Interactive web application demo",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Responsive Website Design",
      description: "Modern responsive website with sleek design and user-friendly interface.",
      image: "https://i.imgur.com/HbtBXwZ.gif",
      alt: "Responsive website design showcase",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Dynamic Web Platform",
      description: "Feature-rich web platform with advanced functionality and smooth user experience.",
      image: "https://i.imgur.com/ccWHK1g.gif",
      alt: "Dynamic web platform demonstration",
      technologies: ["React", "Node.js", "CSS"],
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
