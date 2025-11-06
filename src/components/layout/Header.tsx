import { useEffect, useState } from "react";

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
      {/* Close the menu when Escape is pressed (keyboard users) */}
      <nav
        className="flex items-center justify-between"
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
      >
        <div className="flex items-center gap-3">
          <picture>
            <source srcSet="/assets/Alex.avif" type="image/avif" />
            <source srcSet="/assets/Alex.webp" type="image/webp" />
            <img
              src="/assets/Alex.png"
              alt="Alex logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-customGold"
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="text-small w-52 lg:w-auto text-wrap lg-no-wrap font-medium text-current drop-shadow-2xl lg:text-2xl lg:font-semibold hide-on-xs">
            Frontend Portfolio 2024 - Alex Storm Skoglund
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const user = "skogdev";
              const domain = "protonmail.com";
              window.location.href = `mailto:${user}@${domain}`;
            }}
            aria-label="Hire me — email Alex"
            className="inline-block px-3 py-1 bg-customGold text-customBlue rounded-md hover:opacity-90 hire-btn"
          >
            Hire me
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-current bg-gray-100 dark:bg-transparent p-2 rounded"
          >
            {isDark ? (
              /* Sun icon (simple, more conventional shape) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden
                focusable={false}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M12 4a1 1 0 011-1h0a1 1 0 110 2h0A1 1 0 0112 4zm0 14a1 1 0 011 1h0a1 1 0 11-2 0h0a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 010-1.42zM18.36 18.36a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM2 11h2a1 1 0 110 2H2a1 1 0 110-2zm18 0h2a1 1 0 110 2h-2a1 1 0 110-2zM5.64 18.36a1 1 0 010-1.42l.7-.7a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42 0zM17.66 5.64a1 1 0 010-1.42l.7-.7a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42 0zM12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            ) : (
              /* Moon icon (crescent) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden
                focusable={false}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="site-main-nav"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="text-3xl"
                  width="28"
                  height="28"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L10.59 13.41 4.29 19.71 2.87 18.29 9.17 12 2.87 5.71 4.29 4.29 10.59 10.59 16.88 4.29z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="text-3xl"
                  width="28"
                  height="28"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                </svg>
              )}
            </button>
          </div>

          <ul
            id="site-main-nav"
            className={`flex-col md:flex-row rounded-md md:flex md:space-x-4 fixed md:static z-50 w-full md:w-auto transition-all duration-300 ease-in-out bg-white bg-opacity-100 dark:bg-customBlue dark:bg-opacity-80 ${
              isOpen ? "top-28 left-0 right-0" : "top-[-200px] left-0 right-0"
            }`}
            role="navigation"
            aria-label="Main navigation"
            aria-hidden={!isOpen}
          >
            <li className="font-bold p-4 md:p-0">
              <a
                href="#work"
                tabIndex={isOpen ? 0 : -1}
                className="hover:scale-90 block md:inline-block focus:outline-none focus:ring-2 focus:ring-customGold"
                aria-label="Featured Projects"
              >
                Featured Projects
              </a>
            </li>
            <li className="font-bold p-4 md:p-0">
              <a
                href="#contact"
                tabIndex={isOpen ? 0 : -1}
                onClick={(e) => {
                  // Smooth-scroll to the contact section and briefly animate icons
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
                    // update the URL fragment for deep-linking
                    history.replaceState(null, "", "#contact");

                    // Blur the link on mouse click to hide the focus ring, but
                    // keep focus behavior for keyboard users.
                    try {
                      const native = e.nativeEvent as MouseEvent;
                      if (native && native.detail > 0) {
                        (e.currentTarget as HTMLElement).blur();
                      }
                    } catch {
                      /* ignore */
                    }

                    // Close mobile menu after activation
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
