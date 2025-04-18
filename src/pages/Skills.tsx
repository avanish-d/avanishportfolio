
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, FileCode, GitBranch, Coffee } from "lucide-react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-white">Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#222222] border-blue-400">
            <CardHeader className="bg-gray-800 border-b border-blue-400">
              <CardTitle className="flex items-center gap-2 text-white font-bold">
                <Code className="text-blue-600" />
                <span className="text-blue-100">Web Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-white">HTML</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-white">CSS</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-white">JavaScript</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-white">React</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#222222] border-blue-400">
            <CardHeader className="bg-gray-800 border-b border-blue-400">
              <CardTitle className="flex items-center gap-2 text-white font-bold">
                <FileCode className="text-blue-600" />
                <span className="text-blue-100">Programming Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-white">Java</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 bg-[#222222] border-blue-400">
            <CardHeader className="bg-gray-800 border-b border-blue-400">
              <CardTitle className="flex items-center gap-2 text-white font-bold">
                <GitBranch className="text-blue-600" />
                <span className="text-blue-100">Development Tools</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-white">Git</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-white">GitHub</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
