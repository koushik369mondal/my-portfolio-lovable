import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Project Admin & Contributor",
      company: "GirlScript Summer of Code 2025",
      location: "Remote",
      duration: "July 2025 - Present",
      type: "Open Source",
      description: [
        "Serving as Project Admin for the Wanderlust open-source project under GSSoC 2025",
        "Leading project development, coordinating with mentors and contributors, managing tasks, and maintaining documentation",
        "Reviewing pull requests and ensuring smooth collaboration in a remote open-source environment",
        "Selected as a Contributor for GSSoC 2025, actively contributing to open-source projects using the MERN stack",
        "Collaborated with developers and mentors across the country on impactful, community-driven solutions",
        "Strengthened skills in full-stack development, Git/GitHub version control, and real-world software collaboration"
      ],
      skills: ["Open Source", "MERN Stack", "Git & GitHub", "Documentation", "Remote Collaboration", "Project Management"]
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "UptoSkills",
      location: "Remote",
      duration: "Current",
      type: "Internship",
      description: [
        "Working on hands-on web development projects using modern technologies",
        "Building real-world applications with React.js and Node.js",
        "Learning industry best practices and development workflows",
        "Collaborating with team members on various web development projects",
        "Gaining experience in full-stack development and project management"
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Git"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Open Source":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
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