export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with real-time inventory management and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "E-commerce platform dashboard interface",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Cross-platform mobile application for fitness enthusiasts with social features and progress tracking.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Mobile app interface design mockup",
      technologies: ["React Native", "Firebase", "Redux"],
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization and customizable reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Analytics dashboard with charts and graphs",
      technologies: ["Vue.js", "D3.js", "Python"],
    },
    {
      id: 4,
      title: "Creative Agency Site",
      description: "Award-winning website design for a creative agency with interactive animations and smooth scrolling.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Creative portfolio website design",
      technologies: ["Next.js", "Three.js", "GSAP"],
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow" data-testid="portfolio-title">Featured Work</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              <div className="flex flex-wrap gap-2 mb-4">
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
              <a 
                href="#" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                data-testid={`project-link-${project.id}`}
              >
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition-colors duration-300"
            data-testid="view-all-projects"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
