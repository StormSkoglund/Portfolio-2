import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-customGold text-customBlue p-4 mt-auto">
      <div className="flex flex-col md:flex-row flex-wrap justify-between text-base font-semibold items-center container space-y-4 md:space-y-0">
        <p className="w-full md:w-auto text-center md:text-left">
          &copy; {year} Alex Storm Skoglund. All rights reserved.
        </p>
        <div className="flex flex-row justify-center md:justify-end items-center w-full md:w-auto space-x-4">
          <p>Follow me:</p>
          <a
            href="https://github.com/StormSkoglund"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl text-customBlue hover:scale-110" />
          </a>
          <a
            id="contact"
            href="https://www.linkedin.com/in/alex-storm-skoglund-13764372/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl text-customBlue hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/skoglunddev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl text-customBlue hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
