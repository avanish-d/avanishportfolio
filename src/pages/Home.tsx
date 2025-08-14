
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px-96px)] flex flex-col md:flex-row items-center justify-center bg-[#1A1F2C] py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm{" "}
            <TypeAnimation
              sequence={[
                'Avanish Dwivedi',
                3000,
                'Avanish Dwivedi',
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="text-blue-400"
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            B.Tech Student & Web Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                About Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/resume">
              <Button variant="outline" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View Resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-400/20">
            <img
              src="/lovable-uploads/2cebfe9c-4643-4686-a265-99089dc87ff9.png"
              alt="Avanish Dwivedi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
