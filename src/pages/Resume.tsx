
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
                      <p className="font-medium">B.Tech Computer Science</p>
                      <p>United College of Engineering and Research</p>
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
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Programming Languages: C, Java, HTML, CSS, JavaScript</li>
                <li>Frameworks: HTML5, CSS3, Bootstrap, React.js</li>
                <li>Developer Tools: VS Code, IntelliJ, Canva, GitHub</li>
              </ul>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">PROJECTS</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-medium">Prescripto (HTML, CSS, JavaScript, React.js)</h3>
                  <p>Developed a responsive web platform using React.js that allows patients to book online or in-person doctor consultations.</p>
                </div>
                <div>
                  <h3 className="font-medium">Blood Report Form Generator (HTML, CSS)</h3>
                  <p>Developed a responsive and interactive pathology report generator ensuring an intuitive user experience.</p>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">ACHIEVEMENTS</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designed and implemented a web-based pathology reports dashboard for Kabir Parakh Sansthan.</li>
                <li>Solved 150+ Data Structures Algorithms problems on LeetCode.</li>
                <li>Participated in U-Hack college hackathon and secured a top 10 position among 50+ teams.</li>
                <li>Created digital physics notes for YouTube Channel 'Padhle Akshay' (1M+ subscribers).</li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
