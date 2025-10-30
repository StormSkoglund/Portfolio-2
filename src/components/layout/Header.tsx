import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
    } catch {
      /* ignore */
    }
    // prefer system preference
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <header className="bg-white text-customBlue dark:bg-customBlue dark:text-customGold p-4 md:p-8 border-b dark:border-customGold shadow-lg sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/Alex.png"
            alt="Alex logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-customGold"
          />
          <div className="text-small w-52 lg:w-auto text-wrap lg-no-wrap font-medium text-current drop-shadow-2xl lg:text-2xl lg:font-semibold hide-on-xs">
            Frontend Portfolio 2024 - Alex Storm Skoglund
          </div>
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
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const user = "skogdev";
              const domain = "protonmail.com";
              window.location.href = `mailto:${user}@${domain}`;
            }}
            aria-label="Hire me — email Alex"
            className="inline-block px-3 py-1 bg-customGold text-white rounded-md hover:opacity-90 hire-btn"
          >
            Hire me
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-current bg-gray-100 dark:bg-transparent p-2 rounded"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <ul
            className={`flex-col md:flex-row rounded-md md:flex md:space-x-4 fixed md:static z-50 w-full md:w-auto transition-all duration-300 ease-in-out bg-white bg-opacity-100 dark:bg-customBlue dark:bg-opacity-80 ${
              isOpen ? "top-28 left-0 right-0" : "top-[-200px] left-0 right-0"
            }`}
          >
            <li className="font-bold p-4 md:p-0">
              <a
                href="#work"
                className="hover:scale-90 block md:inline-block focus:outline-none focus:ring-2 focus:ring-customGold"
                aria-label="Featured Projects"
              >
                Featured Projects
              </a>
            </li>
            <li className="font-bold p-4 md:p-0">
              <a
                href="#contact"
                onClick={(e) => {
                  // animate footer social icons briefly when SoMe is pressed
                  try {
                    e.preventDefault();
                    const target = document.getElementById("contact");
                    if (target) {
                      target.classList.add("somo-animate");
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      window.setTimeout(
                        () => target.classList.remove("somo-animate"),
                        700
                      );
                    }
                    // update the URL fragment for accessibility / deep-linking
                    history.replaceState(null, "", "#contact");

                    // If this activation came from a mouse/pointer, blur the link
                    // so the focus ring doesn't stay visible. Keep focus for
                    // keyboard activation for accessibility.
                    try {
                      const native = e.nativeEvent as MouseEvent;
                      if (native && native.detail > 0) {
                        (e.currentTarget as HTMLElement).blur();
                      }
                    } catch {
                      /* ignore */
                    }

                    // Close mobile menu after activation so it behaves like other nav
                    setIsOpen(false);
                  } catch {
                    /* ignore */
                  }
                }}
                className="hover:scale-90 block md:inline-block focus:outline-none focus:ring-2 focus:ring-customGold"
                aria-label="Social Media"
              >
                SoMe
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
