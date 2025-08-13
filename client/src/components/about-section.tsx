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
                  src="https://media.discordapp.net/attachments/1195125993438969929/1405070624627626194/f9dd63aa6e75bf491c08d3bb72df8c9c.jpg?ex=689d7d7d&is=689c2bfd&hm=9d31b04cfd1561e556270734f450d8b47742b6dcd459f976c2cf9744046a9dfa&=&format=webp&width=661&height=441" 
                  alt="Wiktor Tobjasz working at desk" 
                  className="rounded-xl w-full h-auto shadow-2xl"
                  data-testid="about-image"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400" data-testid="about-subtitle">Passionate Creator</h3>
                <p className="text-gray-300 mb-4 leading-relaxed" data-testid="about-description-1">
                  I'm a web developer specializing in building modern, responsive, and fully custom websites tailored to each client's needs. I create both front-end and full-stack applications, combining clean design with robust functionality.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed" data-testid="about-description-2">
                  My experience includes developing appointment-based service websites and dynamic, content-rich business sites with features like booking systems, interactive galleries, and database-driven content management. I work with modern technologies such as React, TypeScript, Tailwind CSS, Express.js, and PostgreSQL to deliver fast, user-friendly, and visually appealing solutions.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed" data-testid="about-description-3">
                  Whether it's a sleek single-page site or a complex full-stack application, I focus on performance, usability, and a polished user experience.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm" data-testid="tag-frontend">Web Developer</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm" data-testid="tag-uiux">UI Designer</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm" data-testid="tag-creative">Creative Developer</span>
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
