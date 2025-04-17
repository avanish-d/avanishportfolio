
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Avanish Dwivedi. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-300 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
