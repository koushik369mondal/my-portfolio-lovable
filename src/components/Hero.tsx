import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-developer.jpg";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text">
                  Alex Johnson
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full Stack Developer & Finance Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate CSE student crafting innovative web solutions and fintech applications. 
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="btn-primary group"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="btn-outline"
                onClick={() => scrollToSection("resume")}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="btn-outline"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:justify-self-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <img
                src={heroImage}
                alt="Developer workspace with multiple screens showing code and financial data"
                className="relative rounded-2xl shadow-large max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}