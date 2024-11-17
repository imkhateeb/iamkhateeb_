import "./App.css";

import {
  About,
  Footer,
  Education,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Experience,
} from "./components";

import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Toaster />
      <div className="bg-black shadow-2xl">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Education />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />

      {/* Sticky social icons */}
      <div className="fixed right-0 bottom-2 flex flex-col bg-gray-800 p-2 gap-3 rounded-l-xl">
        <Link target="_blank" to="https://www.linkedin.com/in/iamkhateeb/">
          <BsLinkedin fontSize={30} color="blue" />
        </Link>

        <Link
          target="_blank"
          to="https://twitter.com/iamkhateeb_?t=JN7rdnWAOIF0VF2VazvqTw&s=09"
        >
          <FaXTwitter fontSize={30} />
        </Link>

        <Link target="_blank" to="https://github.com/imkhateeb">
          <FaGithubSquare fontSize={30} />
        </Link>

        <Link
          target="_blank"
          to="https://www.codechef.com/users/iamkhateeb_786"
        >
          <SiCodechef fontSize={30} className="text-yellow-500" />
        </Link>

        <Link target="_blank" to="https://leetcode.com/iamkhateeb_/">
          <SiLeetcode fontSize={30} color="red" />
        </Link>

        <Link
          target="_blank"
          to="https://codeforces.com/profile/mdkhateebur.2022ug3006"
        >
          <SiCodeforces fontSize={30} className="text-red-400" />
        </Link>
      </div>
    </div>
  );
};

export default App;
