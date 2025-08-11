import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Zerodha-Style Website",
      description: "A full-stack trading platform-inspired project with separate frontend, dashboard, and backend. Focused on login/auth, dashboard UI, and user flows.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      tags: ["Web", "Finance"],
      liveDemo: "https://zerodha-fullstack.vercel.app/",
      github: "https://github.com/koushik369mondal/zerodha-fullstack.git"
    },
    {
      id: 2,
      title: "Wanderlust Website",
      description: "A travel listing website built using EJS and Express, supporting dynamic views and MongoDB storage. Open for GitHub collaboration and improvements.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      tech: ["Node.js", "Express.js", "EJS", "MongoDB"],
      tags: ["Web"],
      liveDemo: "https://wanderlust-6yh1.onrender.com/listings",
      github: "https://github.com/koushik369mondal/WanderLust.git"
    },
    {
      id: 3,
      title: "MyGPT",
      description: "A simple AI chatbot using the Grmini API built with Next.js for experimentation with AI integration and prompt handling.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["Next.js", "Grmini API"],
      tags: ["Web"],
      liveDemo: "https://mygpt-weld-zeta.vercel.app/",
      github: "https://github.com/koushik369mondal/MyGPT"
    },
    {
      id: 4,
      title: "Weather Website",
      description: "A responsive weather application that provides real-time weather information with a clean and intuitive user interface.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      tags: ["Web"],
      liveDemo: "https://koushik369mondal.github.io/WeatherApp/",
      github: "https://github.com/koushik369mondal/WeatherApp.git"
    },
    {
      id: 5,
      title: "Signature Downloader",
      description: "A simple web tool that allows users to create and download custom signatures with various styling options.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      tags: ["Web"],
      liveDemo: "https://koushik369mondal.github.io/Signnature-Downloader/",
      github: "https://github.com/koushik369mondal/Signnature-Downloader"
    },
    {
      id: 6,
      title: "Todo Website",
      description: "A clean and functional todo application for managing daily tasks with add, edit, and delete functionality.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      tags: ["Web"],
      liveDemo: "https://koushik369mondal.github.io/ToDoApp/",
      github: "https://github.com/koushik369mondal/ToDoApp"
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
                  <Button size="sm" className="btn-primary" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/90 text-black hover:bg-white" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
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
                  <Button size="sm" className="btn-primary flex-1" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="btn-outline flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
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
          <Button className="btn-primary" size="lg" asChild>
            <a href="https://github.com/koushik369mondal" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}