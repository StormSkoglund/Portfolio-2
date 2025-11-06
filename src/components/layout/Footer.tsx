const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-customBlue text-white p-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row md:flex-nowrap justify-between items-center text-base font-semibold space-y-4 md:space-y-0">
        {/* Copyright left on md+, stacked and centered on small screens */}
        <p className="w-full md:w-auto text-center md:text-left">
          &copy; {year} Alex Storm Skoglund. All rights reserved.
        </p>

        {/* Social icons right on md+ (centered on small). make the icons group push itself all the way right */}
        <div className="flex items-center space-x-6 md:space-x-4 social-icons">
          <p className="hidden md:block mr-4">Follow me:</p>
          <div className="flex items-center gap-6 md:gap-4">
            <a
              href="https://github.com/StormSkoglund"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.04 11.04 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.28 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/alex-storm-skoglund-13764372/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5C3.34 3.5 2 4.86 2 6.5s1.34 3 2.98 3c1.66 0 3-1.36 3-3s-1.34-3-3-3zM2.4 21.5h5.16V9.5H2.4v12zM9.84 9.5v12H15v-6.52c0-3.48 4.5-3.76 4.5 0V21.5H25V14.1c0-7.03-8.06-6.77-9.66-3.31V9.5H9.84z"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/skoglunddev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm5.5-3a1 1 0 11-1-1 1 1 0 011 1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
