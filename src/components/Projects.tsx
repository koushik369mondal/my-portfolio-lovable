import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Solar Panel ROI Calculator",
      description: "A comprehensive web application that calculates the return on investment for solar panel installations, including energy savings, government incentives, and payback periods.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      tags: ["Web", "Finance"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Expense Tracker Dashboard",
      description: "Modern expense tracking application with categorization, budget planning, and insightful analytics. Features real-time data visualization and export capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Next.js", "MongoDB", "Chart.js", "Node.js"],
      tags: ["Web", "Finance"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking with price alerts, performance analytics, and market insights. Built during a weekend hackathon.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tech: ["React", "REST API", "Firebase", "Material-UI"],
      tags: ["Web", "Finance", "Hackathon"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, inventory management, and responsive design for optimal user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["MERN Stack", "Stripe", "JWT", "Redux"],
      tags: ["Web"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Weather App PWA",
      description: "Progressive Web App providing detailed weather forecasts, location-based services, and offline functionality. Optimized for mobile devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["PWA", "Vue.js", "Service Workers", "Weather API"],
      tags: ["Web"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Stock Analysis Tool",
      description: "Hackathon winner - AI-powered stock analysis tool providing technical indicators, sentiment analysis, and investment recommendations.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      tech: ["Python", "Flask", "ML", "Alpha Vantage API"],
      tags: ["Finance", "Hackathon"],
      liveDemo: "#",
      github: "#"
    }
  ];

  const filters = ["All", "Web", "Finance", "Hackathon"];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my latest work in web development and fintech applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className={`${selectedFilter === filter ? "btn-primary" : "btn-outline"} transition-all duration-300`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card-elevated group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="btn-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/90 text-black hover:bg-white">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="btn-primary flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="btn-outline flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button className="btn-primary" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}