import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-customBlue lg:opacity-95 text-customGold p-8 border-customGold shadow-lg shadow-green-800 animate-flicker sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        <div className="text-small w-52 lg:w-auto text-wrap lg-no-wrap font-medium text-customGold drop-shadow-2xl lg:text-2xl lg:font-semibold">
          Frontend Portfolio 2024 - Alex Storm Skoglund
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
        <ul
          className={`flex-col md:flex-row rounded-md md:flex md:space-x-4 fixed md:static bg-opacity-80 bg-customBlue z-50 w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-28 left-0 right-0" : "top-[-200px] left-0 right-0"
          }`}
        >
          <li className="font-bold p-4 md:p-0">
            <a
              href="#work"
              className="hover:scale-90 block md:inline-block focus:outline-none focus:ring-2 focus:ring-customGold"
              aria-label="My Work"
            >
              My Work
            </a>
          </li>
          <li className="font-bold p-4 md:p-0">
            <a
              href="#contact"
              className="hover:scale-90 block md:inline-block focus:outline-none focus:ring-2 focus:ring-customGold"
              aria-label="Social Media"
            >
              SoMe
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
