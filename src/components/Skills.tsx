import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Next.js", "Vue.js"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Python", "Django"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Firebase", "Vite", "Webpack", "Linux", "Figma"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Finance & Data",
      skills: ["Financial Modeling", "Data Analysis", "Excel", "Power BI", "APIs Integration", "Trading Algorithms"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and fintech solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-elevated space-y-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient}`} />
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium bg-secondary/80 hover:bg-secondary transition-colors hover:scale-105 duration-200"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
        </div>
      </div>
    </section>
  );
}