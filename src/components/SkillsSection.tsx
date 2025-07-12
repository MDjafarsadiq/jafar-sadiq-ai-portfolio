import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Lightbulb, Code, Brain, Database, Eye, Cpu, Wrench, Cog } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Programming Languages',
      percentage: 95,
      icon: Code,
      color: 'skill-programming',
      skills: ['Python', 'SQL']
    },
    {
      category: 'Machine Learning & AI',
      percentage: 92,
      icon: Brain,
      color: 'skill-ml',
      skills: ['ML Algorithms', 'AI Systems']
    },
    {
      category: 'ML Frameworks',
      percentage: 90,
      icon: Cpu,
      color: 'skill-frameworks',
      skills: ['TensorFlow', 'PyTorch', 'Keras']
    },
    {
      category: 'Data Science & Analysis',
      percentage: 88,
      icon: Database,
      color: 'skill-data',
      skills: ['Pandas', 'NumPy', 'Scikit-learn']
    },
    {
      category: 'Deep Learning & NLP',
      percentage: 87,
      icon: Lightbulb,
      color: 'skill-deep',
      skills: ['Transformers', 'NLP Pipelines']
    },
    {
      category: 'Computer Vision',
      percentage: 85,
      icon: Eye,
      color: 'skill-vision',
      skills: ['OpenCV', 'CNN']
    },
    {
      category: 'Data Engineering',
      percentage: 80,
      icon: Database,
      color: 'skill-engineering',
      skills: ['MySQL', 'API Integration']
    },
    {
      category: 'Tools',
      percentage: 78,
      icon: Wrench,
      color: 'skill-tools',
      skills: ['Git', 'Streamlit', 'Matplotlib', 'Seaborn']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <Cog className="inline-block mr-3 h-8 w-8 text-primary" />
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any skill category to explore detailed sub-skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card key={index} className="portfolio-card group cursor-pointer">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${skill.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${skill.color}`} />
                  </div>

                  {/* Category Name */}
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {skill.category}
                  </h3>

                  {/* Skills List */}
                  <div className="mb-4">
                    {skill.skills.map((skillName, idx) => (
                      <span key={idx} className={`inline-block bg-${skill.color}/10 text-${skill.color} text-xs px-2 py-1 rounded-full mr-1 mb-1`}>
                        {skillName}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="skill-bar mb-2">
                    <div 
                      className={`skill-progress bg-${skill.color}`}
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : '0%' 
                      }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <p className={`font-bold text-${skill.color}`}>
                    {skill.percentage}% Proficiency
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;