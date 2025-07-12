import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Machine Learning Certification Course for Beginners",
      provider: "Various Platforms",
      category: "Machine Learning",
      type: "Course"
    },
    {
      title: "Principles of Generative AI Certification",
      provider: "AI Institute",
      category: "Generative AI",
      type: "Certification"
    },
    {
      title: "Artificial Intelligence Foundation Certificate",
      provider: "Tech Academy",
      category: "AI Foundation",
      type: "Certificate"
    },
    {
      title: "Artificial Intelligence Premier Certificate",
      provider: "Premier Institute",
      category: "AI Advanced",
      type: "Certificate"
    },
    {
      title: "Foundations of Data Science",
      provider: "Data Science Institute",
      category: "Data Science",
      type: "Foundation"
    },
    {
      title: "Python Course Beginner to Advanced",
      provider: "Programming Academy",
      category: "Programming",
      type: "Course"
    }
  ];

  const categories = [
    { name: "All Certificates", count: certifications.length },
    { name: "Specializations", count: 2 },
    { name: "Courses", count: 3 },
    { name: "Foundations", count: 2 }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <Award className="inline-block mr-3 h-8 w-8 text-primary" />
            <span className="gradient-text">Certifications & Awards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications, specializations, and competition achievements showcasing continuous learning and expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                index === 0 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category.name} {category.count}
            </Badge>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="portfolio-card group cursor-pointer">
              <CardContent className="p-6">
                {/* Certificate Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Certificate Title */}
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Provider */}
                <p className="text-muted-foreground mb-4">
                  {cert.provider}
                </p>

                {/* Category and Type Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {cert.category}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      cert.type === 'Certification' ? 'border-primary text-primary' :
                      cert.type === 'Course' ? 'border-blue-500 text-blue-500' :
                      'border-orange-500 text-orange-500'
                    }`}
                  >
                    {cert.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Continuously expanding knowledge through professional development and certification programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;