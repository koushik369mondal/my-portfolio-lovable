import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resume() {
  const handleDownload = () => {
    // In a real app, this would trigger a download of the actual resume PDF
    console.log("Downloading resume...");
  };

  const handleView = () => {
    // In a real app, this would open the resume in a new tab or modal
    console.log("Opening resume viewer...");
  };

  return (
    <section id="resume" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my latest resume or view it online
          </p>
        </div>

        {/* Resume Card */}
        <div className="card-elevated text-center space-y-8 animate-slide-up">
          {/* Resume Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Resume Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Alex Johnson - Full Stack Developer
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Comprehensive overview of my education, experience, skills, and projects. 
              Updated regularly to reflect my latest achievements and capabilities.
            </p>
            <div className="text-sm text-muted-foreground">
              Last updated: December 2024 • PDF Format • 2 pages
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="btn-outline"
              onClick={handleView}
            >
              <Eye className="mr-2 h-5 w-5" />
              View Online
            </Button>
          </div>

          {/* Resume Preview (Placeholder) */}
          <div className="mt-8 p-6 bg-muted/50 rounded-lg border-2 border-dashed border-border">
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="text-center pb-4 border-b border-border">
                <h4 className="font-bold text-lg">Alex Johnson</h4>
                <p className="text-muted-foreground">Full Stack Developer & Finance Enthusiast</p>
                <p className="text-sm text-muted-foreground">alex.johnson@email.com • (555) 123-4567</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-primary mb-2">Education</h5>
                  <p className="text-sm">Bachelor of Technology - Computer Science Engineering</p>
                  <p className="text-xs text-muted-foreground">Expected Graduation: May 2025 • GPA: 3.8/4.0</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-primary mb-2">Experience</h5>
                  <p className="text-sm">Frontend Developer Intern - TechCorp Solutions</p>
                  <p className="text-xs text-muted-foreground">June 2024 - August 2024</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-primary mb-2">Skills</h5>
                  <p className="text-xs text-muted-foreground">
                    React, TypeScript, Node.js, MongoDB, Python, AWS, Git...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Note */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              For the most up-to-date version, please download the PDF or contact me directly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}