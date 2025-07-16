import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
