export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow" data-testid="about-title">About Me</h2>
          
          <div className="glass-card rounded-2xl p-8 mb-12 hover:border-purple-500/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Professional headshot for about section */}
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                  alt="Alex Rivera working at desk" 
                  className="rounded-xl w-full h-auto shadow-2xl"
                  data-testid="about-image"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400" data-testid="about-subtitle">Passionate Creator</h3>
                <p className="text-gray-300 mb-4 leading-relaxed" data-testid="about-description-1">
                  With over 5 years of experience in web development and design, I specialize in creating 
                  immersive digital experiences that seamlessly blend functionality with aesthetic appeal.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed" data-testid="about-description-2">
                  My journey began with a fascination for the intersection of technology and creativity, 
                  leading me to master modern frameworks, design systems, and user experience principles.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm" data-testid="tag-frontend">Frontend Expert</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm" data-testid="tag-uiux">UI/UX Designer</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm" data-testid="tag-creative">Creative Thinker</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300" data-testid="stat-projects">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300" data-testid="stat-experience">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300" data-testid="stat-satisfaction">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
