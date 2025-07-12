import { MapPin, Mail, Phone, User } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <User className="inline-block mr-3 h-8 w-8 text-primary" />
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A brief introduction to my professional journey and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                  <img 
                    src="https://i.postimg.cc/y6yZxzWB/resume-photo-2.png" 
                    alt="Mohammed Jafar Sadiq" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2">
            <Card className="portfolio-card">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-8 text-foreground">
                  I am an aspiring AI/ML Engineer with a deep passion for artificial intelligence, machine learning, and data-driven technologies. With hands-on experience in building and fine-tuning models for NLP, computer vision, and deep learning, I enjoy transforming complex problems into scalable, real-world AI solutions.
                </p>
                
                <p className="text-lg leading-relaxed mb-8 text-foreground">
                  I am well-versed in Python, TensorFlow, PyTorch, and NLP frameworks like HuggingFace Transformers, and actively contribute to personal projects involving LLMs and intelligent systems. I am a fast learner, a team player, and always enthusiastic about working on cutting-edge technologies that create meaningful impact.
                </p>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">Mohammed Jafar Sadiq</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-foreground">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-foreground">mohammed.jafarsadiq90@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-foreground">7338336275</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;