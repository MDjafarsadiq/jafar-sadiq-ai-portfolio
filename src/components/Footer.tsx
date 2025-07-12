import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by{' '}
            <span className="ml-1 text-primary font-semibold">Mohammed Jafar Sadiq</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Mohammed Jafar Sadiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;