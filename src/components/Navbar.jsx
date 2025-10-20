import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/TE-logo.svg";
import { FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="justify-start-2" width={80} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="www.linkedin.com/in/thyagovz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Thyagovz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/thyagovz/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Thyagovz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
