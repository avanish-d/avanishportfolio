
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, CalendarDays, Building, MapPin, School } from "lucide-react";

const Education = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Education</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-blue-600" />
                Bachelor of Technology (CSE)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="text-gray-500" size={20} />
                  <span>United College of Engineering and Research</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-500" size={20} />
                  <span>Naini, Prayagraj</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-gray-500" size={20} />
                  <span>3rd Year (Current)</span>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Pursuing B.Tech in Computer Science Engineering</li>
                    <li>Learning programming languages and software development</li>
                    <li>Gaining theoretical and practical knowledge in engineering</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <School className="text-blue-600" />
                School Education
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="text-gray-500" size={20} />
                  <span>Kendriya Vidyalaya</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-500" size={20} />
                  <span>Naini, Prayagraj</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
