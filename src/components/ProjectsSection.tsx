import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Layers, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Business Automation & Smart Marketing Assistant',
      description: 'Comprehensive business automation platform integrating AI-powered marketing assistance with real-time operations management.',
      technologies: ['Python', 'Streamlit', 'IBM Watson', 'NLP', 'SQLite', 'AsyncIO'],
      features: [
        'Real-time business process automation',
        'AI-powered marketing content generation',
        'Natural language processing for customer insights',
        'Integrated database management with SQLite',
        'Asynchronous operations for improved performance'
      ],
      category: 'Business Automation',
      status: 'Completed'
    },
    {
      title: 'GlucoPilot AI – Personal AI Nutritionist for Diabetics',
      description: 'Advanced AI-powered nutrition assistant specifically designed for diabetic patients, providing personalized dietary recommendations.',
      technologies: ['Python', 'Scikit-learn', 'CNN', 'Streamlit', 'API Integration', 'Machine Learning'],
      features: [
        'Personalized nutrition recommendations',
        'Glucometer API integration for real-time monitoring',
        'Computer vision for food recognition',
        'Machine learning models for dietary pattern analysis',
        'Interactive web application with Streamlit'
      ],
      category: 'Healthcare AI',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <Layers className="inline-block mr-3 h-8 w-8 text-primary" />
            <span className="gradient-text">Machine Learning Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated portfolio of ML/AI projects showcasing problem-solving across diverse domains and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card h-full">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.category}
                    </Badge>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects coming soon! Currently working on additional AI/ML solutions.
          </p>
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;