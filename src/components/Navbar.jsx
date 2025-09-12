import logo from "../assets/mps.png";
import { AiOutlineLink } from "react-icons/ai";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub, FiInstagram } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-16">
      <div className="flex items-center flex-shrink-0">
        <img
          className="w-32 ml-2 mt-2" // bigger size + shifted right + down
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex justify-center gap-4 -mr-4 text-2xl items-center">



        <a
          href="https://www.linkedin.com/in/mohitripathi"
        
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-cyan-300"
        >
          <FaLinkedinIn />
        </a>
   
      </div>
    </nav>
  );
};

export default Navbar;
