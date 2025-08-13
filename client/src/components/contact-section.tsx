import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    alert('Thank you for your message! This is a demo form.');
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      detail: "alex.rivera@example.com",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location", 
      detail: "San Francisco, CA",
    },
    {
      icon: "fas fa-clock",
      title: "Response Time",
      detail: "Within 24 hours",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "#", testId: "contact-social-github" },
    { icon: "fab fa-linkedin", href: "#", testId: "contact-social-linkedin" },
    { icon: "fab fa-twitter", href: "#", testId: "contact-social-twitter" },
    { icon: "fab fa-dribbble", href: "#", testId: "contact-social-dribbble" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow" data-testid="contact-title">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-purple-400" data-testid="contact-subtitle">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed" data-testid="contact-description">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center" data-testid={`contact-info-${index}`}>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-dark-100 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    data-testid={social.testId}
                  >
                    <i className={`${social.icon} text-gray-300 hover:text-white`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-100 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-100 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-purple-400 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-100 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project inquiry"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-100 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    data-testid="input-message"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-dark-200"
                  data-testid="button-submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
