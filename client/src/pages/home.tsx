import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PortfolioSection from "@/components/portfolio-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://pixabay.com/get/g67d832f1b4dc163047c1e2f542c4792afe33635bf89d8c0f63e616e0a349b315b29162e3aa0461cb18ee4936d74ac0f853c71fc20b4626a5be2083a1d73d3299_1280.jpg" 
          alt="Abstract tech background" 
          className="w-full h-full object-cover" 
        />
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">&copy; 2024 Alex Rivera. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Made with</span>
              <i className="fas fa-heart text-purple-400"></i>
              <span className="text-gray-400 text-sm">and lots of coffee</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
