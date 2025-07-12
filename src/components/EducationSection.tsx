import { Card, CardContent } from './ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.E. Computer Science and Design",
      institution: "Bapuji Institute of Engineering and Technology, Davangere",
      period: "Expected June 2026",
      location: "Davangere, Karnataka",
      type: "Bachelor's Degree",
      status: "Current",
      description: "Pursuing comprehensive education in computer science with a focus on software design, algorithms, and emerging technologies including AI/ML."
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "GM Institute of Technology",
      period: "Completed Nov 2022",
      location: "Karnataka, India",
      type: "Diploma",
      status: "Completed",
      description: "Completed diploma with strong foundation in engineering principles, problem-solving, and technical analysis."
    },
    {
      degree: "Class 10 (80%)",
      institution: "KSEEB Board",
      period: "Completed Apr 2019",
      location: "Davangere, Karnataka",
      type: "Secondary Education",
      status: "Completed",
      description: "Achieved 80% marks with strong performance in mathematics and science subjects."
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GraduationCap className="inline-block mr-3 h-8 w-8 text-primary" />
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background in engineering and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="portfolio-card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  {/* Education Details */}
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex flex-col items-start lg:items-end">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold mb-2 ${
                      edu.status === 'Current' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {edu.status}
                    </div>
                    <div className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground">
                      {edu.type}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;