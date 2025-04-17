
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500" 
              alt="Avanish Dwivedi" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Avanish Dwivedi</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="text-blue-600" />
                  <span>B.Tech Student</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" />
                  <span>Prayagraj, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-600" />
                  <span>B.Tech (Current Year)</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Biography</h3>
                <p className="text-gray-700">
                  I am a B.Tech student at United College of Engineering and Research, Naini Prayagraj. 
                  I am passionate about web development and programming. My expertise includes HTML, CSS, 
                  JavaScript, React, Java, and version control with Git and GitHub.
                </p>
                <p className="text-gray-700 mt-4">
                  I am constantly learning and improving my skills to become a better developer.
                  I enjoy solving complex problems and creating efficient solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
