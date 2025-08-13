export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card" data-testid="navigation">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-400" data-testid="logo">AR</h1>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
