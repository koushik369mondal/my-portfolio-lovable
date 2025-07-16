import { Code, TrendingUp, Coffee, BookOpen } from "lucide-react";

export function About() {
  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Crafting modern, responsive web applications"
    },
    {
      icon: TrendingUp,
      title: "FinTech",
      description: "Building financial technology solutions"
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer bridging the gap between technology and finance
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Bio */}
          <div className="card-elevated animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                I'm a Computer Science Engineering student with a deep passion for web development 
                and financial technology. Currently pursuing my degree while actively building 
                innovative projects that combine my love for coding with my interest in finance.
              </p>
              <p className="text-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest web technologies, 
                working on fintech projects like solar panel calculators, or contributing to 
                open-source communities. I believe in the power of technology to solve real-world 
                problems and create meaningful impact.
              </p>
            </div>
          </div>

          {/* Interests Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={interest.title}
                className="card-elevated group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{interest.title}</h3>
                    <p className="text-muted-foreground text-sm">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}