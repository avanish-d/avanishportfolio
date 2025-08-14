
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
              <div className="space-y-6 text-gray-300">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-blue-300">Sentiment Analysis App – Product Review Classifier</h3>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <Github size={16} />
                    </a>
                  </div>
                  <p className="text-sm text-blue-200 mb-2">Python, NLTK, Scikit-learn, TF-IDF, Streamlit</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Deployed an ML-powered Streamlit app to classify Amazon reviews into 3 sentiment categories with 85%+ accuracy.</li>
                    <li>Preprocessed 10,000+ reviews using text normalization, stopword removal, stemming, and negation handling.</li>
                    <li>Trained a Multinomial Naive Bayes model using TF-IDF features, reducing bias via class balancing.</li>
                    <li>Designed real-time UI with interactive predictions, confidence score, pie charts, and CSV logging.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-blue-300">Nivritti – Financial Inclusion Platform</h3>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <Github size={16} />
                    </a>
                  </div>
                  <p className="text-sm text-blue-200 mb-2">MongoDB, Express.js, React.js, Node.js, Firebase</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Built a MERN-based platform facilitating micro-loans, savings, and job listings; designed for rural users.</li>
                    <li>Integrated Firebase for managing 200+ simulated user records securely in real-time.</li>
                    <li>Architected scalable APIs and added geo-location-based job filtering, improving accessibility by 60%.</li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2">
                    <h3 className="font-medium text-blue-300">Blood Report Form Generator – Pathology Report Tool</h3>
                  </div>
                  <p className="text-sm text-blue-200 mb-2">HTML, CSS, JavaScript</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Built and deployed a pathology tool that generated over 500 digital reports with print-ready formatting.</li>
                    <li>Achieved 50% reduction in manual reporting time through automation and structured design.</li>
                    <li>Enhanced mobile responsiveness and printable layout using custom CSS and JavaScript DOM manipulation.</li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2">
                    <h3 className="font-medium text-blue-300">Swasthya Sathi</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Developed an online/offline consultation booking system, enabling 100+ simulated patients to schedule doctor appointments.</li>
                    <li>Implemented real-time slot management and form validation, improving booking accuracy by 95%.</li>
                    <li>Delivered a fully responsive UI with 100% cross-device compatibility across mobile and desktop platforms.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">ACHIEVEMENTS</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>AI Virtual Internship (PBEL_AI) - IBM Skills Network (Jul 2025)</li>
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
