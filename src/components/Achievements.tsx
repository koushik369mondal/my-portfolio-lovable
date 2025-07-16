import { Award, Trophy, Star, Code, Target, Users } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "1st Place - FinTech Innovation Challenge 2024",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Code,
      title: "GitHub Streak",
      description: "200+ days consecutive coding streak",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Star,
      title: "LeetCode Rating",
      description: "1800+ rating, solved 300+ problems",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Award,
      title: "AWS Certified",
      description: "Cloud Practitioner Certification",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Target,
      title: "React Certification",
      description: "Meta React Developer Professional Certificate",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Users,
      title: "Open Source",
      description: "10+ contributions to popular repositories",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    }
  ];

  const stats = [
    { number: "25+", label: "Projects Completed" },
    { number: "3", label: "Hackathons Won" },
    { number: "5", label: "Certifications" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and milestones in my development journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-elevated p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="card-elevated group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`${achievement.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Note */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg animate-fade-in">
          <h3 className="font-semibold text-foreground mb-2">
            Continuous Learning
          </h3>
          <p className="text-muted-foreground">
            Always pursuing new certifications and challenges to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
}