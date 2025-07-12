import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Gen AI Intern',
      company: 'Mirai School of Technology',
      period: 'June 2025 - July 2025',
      type: 'Current Role',
      description: 'Currently working as an AI Intern, gaining hands-on experience in artificial intelligence technologies and contributing to innovative projects in the field.',
      achievements: [
        'Working on cutting-edge AI technologies',
        'Contributing to innovative AI projects',
        'Gaining practical experience in AI implementation'
      ]
    },
    {
      title: 'AI Intern',
      company: 'Edunet Foundation x Shell India',
      period: 'APR 2025 – MAY 2025',
      type: 'Internship',
      description: 'Focused on computer vision and machine learning applications for agricultural technology.',
      achievements: [
        'Built and trained a CNN model to detect and classify 38 plant diseases (~89% accuracy)',
        'Applied data preprocessing, image augmentation, evaluation (precision, recall, F1-score)',
        'Developed scalable solutions for agricultural disease detection'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'CodeAlpha (Remote)',
      period: 'MAY 2025 – JUN 2025',
      type: 'Remote Internship',
      description: 'Developed machine learning models for financial and healthcare applications.',
      achievements: [
        'Credit Scoring Model: Predict creditworthiness using Logistic Regression, Decision Tree, Random Forest',
        'Disease Prediction: Built disease prediction models from medical data using ML pipelines',
        'Implemented end-to-end ML solutions with proper evaluation metrics'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <Briefcase className="inline-block mr-3 h-8 w-8 text-primary" />
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in machine learning engineering and data science consulting across multiple domains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge 
                        variant={exp.type === 'Current Role' ? 'default' : 'secondary'}
                        className={exp.type === 'Current Role' ? 'bg-primary text-primary-foreground' : ''}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;