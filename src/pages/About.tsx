
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, Calendar, School } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/3ff8e452-7258-487e-abb2-c6caf12b70bb.png"
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
                  <span>B.Tech Student (3rd Year, CSE Branch)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" />
                  <span>Prayagraj, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <School className="text-blue-600" />
                  <span>Kendriya Vidyalaya Naini, Prayagraj</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Biography</h3>
                <p className="text-gray-700">
                  I am a B.Tech student at United College of Engineering and Research, Naini Prayagraj, 
                  currently in my 3rd year of Computer Science Engineering. I am passionate about web development 
                  and design, with expertise in HTML, CSS, JavaScript, React, Java, and version control with Git and GitHub.
                  I also have experience with design tools like Canva.
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
