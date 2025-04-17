
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px-96px)] flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-100 to-white py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Hi, I'm <span className="text-blue-600">Avanish Dwivedi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            B.Tech Student & Web Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                About Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/skills">
              <Button variant="outline" size="lg">
                My Skills
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
