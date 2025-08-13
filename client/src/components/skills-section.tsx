export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      skills: [
        { name: "React", level: 100, proficiency: "Expert" },
        { name: "Vue.js", level: 80, proficiency: "Advanced" },
        { name: "TypeScript", level: 80, proficiency: "Advanced" },
      ],
    },
    {
      title: "Backend", 
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 80, proficiency: "Advanced" },
        { name: "Python", level: 60, proficiency: "Intermediate" },
        { name: "PostgreSQL", level: 80, proficiency: "Advanced" },
      ],
    },
    {
      title: "Design",
      icon: "fas fa-palette", 
      skills: [
        { name: "Figma", level: 100, proficiency: "Expert" },
        { name: "Adobe XD", level: 80, proficiency: "Advanced" },
        { name: "Photoshop", level: 60, proficiency: "Intermediate" },
      ],
    },
    {
      title: "Mobile",
      icon: "fas fa-mobile-alt",
      skills: [
        { name: "React Native", level: 80, proficiency: "Advanced" },
        { name: "Flutter", level: 60, proficiency: "Intermediate" },
        { name: "Expo", level: 80, proficiency: "Advanced" },
      ],
    },
    {
      title: "Cloud",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS", level: 60, proficiency: "Intermediate" },
        { name: "Firebase", level: 80, proficiency: "Advanced" },
        { name: "Vercel", level: 100, proficiency: "Expert" },
      ],
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", level: 100, proficiency: "Expert" },
        { name: "Docker", level: 60, proficiency: "Intermediate" },
        { name: "Webpack", level: 80, proficiency: "Advanced" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow" data-testid="skills-title">Skills & Technologies</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="glass-card rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
                data-testid={`skill-category-${categoryIndex}`}
              >
                <div className="flex items-center mb-4">
                  <i className={`${category.icon} text-purple-400 text-2xl mr-3`}></i>
                  <h3 className="text-xl font-semibold" data-testid={`skill-category-title-${categoryIndex}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex justify-between items-center"
                      data-testid={`skill-${categoryIndex}-${skillIndex}`}
                    >
                      <span className="text-gray-300">{skill.name}</span>
                      <div className="flex items-center">
                        <div className="w-20 h-2 bg-dark-100 rounded-full mr-2">
                          <div 
                            className="h-2 bg-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-purple-400">{skill.proficiency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
