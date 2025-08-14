
import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 bg-[#222222] text-white border-blue-400">
          <div className="space-y-6">
            {/* Header */}
            <div className="border-b border-blue-400 pb-4">
              <h1 className="text-3xl font-bold">AVANISH DWIVEDI</h1>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-300">
                <span>📞 9918647163</span>
                <span>✉️ avanishdwivedi21@gmail.com</span>
                <a href="https://linkedin.com/in/avanish-dwivedi-08716324a" className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/avanish-d" className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">CAREER OBJECTIVE</h2>
              <p className="text-gray-300">
                Seeking a challenging role in a dynamic organization where I can leverage my technical skills, problem-solving abilities, and passion for software development to contribute effectively to projects and drive innovation while continuously growing professionally.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">EDUCATION</h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">B.Tech Computer Science and Engineering</p>
                      <p>United College of Engineering and Research, Prayagraj</p>
                      <p className="text-sm">CGPA: 8.44</p>
                    </div>
                    <span>2022-2026</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Intermediate (89.4%)</p>
                      <p>Kendriya Vidyalaya, Naini</p>
                    </div>
                    <span>2022</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">High School (88.4%)</p>
                      <p>Kendriya Vidyalaya, Naini</p>
                    </div>
                    <span>2020</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">TECHNICAL SKILLS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h4 className="font-medium text-blue-300 mb-2">Programming Languages</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>C, Java, Python</li>
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-300 mb-2">Web Development</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Bootstrap, Node.js, Express.js</li>
                    <li>MongoDB, React.js</li>
                    <li>Streamlit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-300 mb-2">Tools & Platforms</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Git, GitHub</li>
                    <li>VS Code, Chrome DevTools</li>
                    <li>Machine Learning Libraries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-300 mb-2">Core Competencies</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Data Structures & Algorithms</li>
                    <li>Machine Learning</li>
                    <li>Full Stack Development</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">PROJECTS</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-medium">Sentiment Analysis App - Product Review Classifier</h3>
                  <p>Deployed an ML-powered Streamlit app to classify Amazon reviews into 5 sentiment categories with 95%+ accuracy.</p>
                </div>
                <div>
                  <h3 className="font-medium">Nirviti - Financial Inclusion through AI</h3>
                  <p>Designed real-time UI with interactive predictions, confidence score pie charts, and CSV logging.</p>
                </div>
                <div>
                  <h3 className="font-medium">Pathology Tool with Digital Reports</h3>
                  <p>Built and deployed a pathology tool that generated over 500 digital reports with print-ready formatted logs.</p>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">ACHIEVEMENTS</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>AI Virtual Internship (FEBE_AI) - IIM Skills Network (Jul 2025)</li>
                <li>Python Programming - GUVI (IIT-M Research Foundation) (Jun 2025)</li>
                <li>FullStack Web Development - IIT Kharagpur (Sep 2024)</li>
                <li>Java Programming - United College of Engineering and Research (Sep 2023)</li>
                <li>Participated in U-Hack and HackQuest hackathons; contributed to open-source solutions under strict deadlines.</li>
                <li>Led a team as Hackathon Leader at inter-college event, coordinating development and final pitch.</li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
