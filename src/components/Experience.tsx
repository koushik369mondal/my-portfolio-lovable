import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance, reducing load time by 40%",
        "Participated in code reviews and agile development processes"
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Git"]
    },
    {
      id: 2,
      role: "Web Development Freelancer",
      company: "Self-Employed",
      location: "Remote",
      duration: "Jan 2024 - Present",
      type: "Freelance",
      description: [
        "Built custom websites and web applications for small businesses",
        "Managed client relationships and project timelines independently",
        "Implemented modern web technologies and best practices",
        "Delivered projects on time and within budget, achieving 100% client satisfaction"
      ],
      skills: ["Full Stack Development", "Client Management", "Project Planning"]
    },
    {
      id: 3,
      role: "Research Assistant",
      company: "University Computer Science Department",
      location: "University Campus",
      duration: "Sep 2023 - Dec 2023",
      type: "Research",
      description: [
        "Assisted in research on machine learning applications in finance",
        "Developed data analysis scripts and visualization tools",
        "Contributed to research paper on algorithmic trading strategies",
        "Presented findings at university research symposium"
      ],
      skills: ["Python", "Data Analysis", "Machine Learning", "Research"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Freelance":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Research":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experiences that have shaped my development journey
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="card-elevated relative animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 -bottom-8 w-0.5 h-8 bg-border" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.role}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(experience.type)}`}>
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/80 text-secondary-foreground rounded-md text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}