export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Professional headshot with purple glow effect */}
        <div className="relative mb-8 animate-float">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
            alt="Professional headshot of Alex Rivera" 
            className="w-48 h-48 rounded-full mx-auto object-cover glow-purple border-4 border-purple-500"
            data-testid="profile-photo"
          />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black" data-testid="status-indicator"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow" data-testid="hero-title">Alex Rivera</h1>
        <p className="text-xl md:text-2xl text-purple-400 mb-6" data-testid="hero-subtitle">Creative Developer & Designer</p>
        
        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-medium" data-testid="status-available">AVAILABLE</span>
          <span className="px-4 py-2 bg-dark-100 rounded-full text-sm font-medium border border-purple-500/30" data-testid="status-remote">REMOTE</span>
        </div>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8" data-testid="hero-description">
          Crafting digital experiences that blend creativity with cutting-edge technology
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="#" 
            className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
            data-testid="social-github"
          >
            <i className="fab fa-github text-white"></i>
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
            data-testid="social-linkedin"
          >
            <i className="fab fa-linkedin text-white"></i>
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
            data-testid="social-twitter"
          >
            <i className="fab fa-twitter text-white"></i>
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
            data-testid="social-dribbble"
          >
            <i className="fab fa-dribbble text-white"></i>
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
            data-testid="social-email"
          >
            <i className="fas fa-envelope text-white"></i>
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="inline-block animate-bounce text-purple-400 hover:text-purple-300 transition-colors"
          data-testid="scroll-down"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
}
