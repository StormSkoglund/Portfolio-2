import React from "react";
import { FaArrowRight } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
        <div className="relative w-full flex flex-col items-center">
          <div className="flex items-end justify-center mt-6 z-30">
            <FaArrowRight className="text-6xl text-white opacity-80" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-full  bg-customBlue opacity-90 flex flex-col justify-start items-center">
              <p className="text-center text-white font-semibold text-l md:text-6xl mt-4">
                Archaeologist
              </p>
            </div>
            <div className="w-1/2 h-full  bg-customGold opacity-90 flex flex-col justify-start items-center">
              <p className="text-center text-customBlue font-semibold text-l md:text-6xl mt-4">
                Frontend Developer
              </p>
            </div>
          </div>

          <a
            href="https://github.com/StormSkoglund"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end justify-center mt-20"
          >
            <img
              src="/assets/Alex.png"
              alt="vertical split image of a man dressed in two different job uniforms."
              className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-6/12 h-auto relative shadow-2xl shadow-green-800 hover:animate-flicker rounded-2xl"
            />

            <div className="text-white text-2xl hover:text-blue-400 duration-300 shadow-black absolute">
              Follow Me On GitHub!
            </div>
          </a>

          <div className="flex flex-col items-center bg-slate-300 rounded-2xl p-1 md:p-3 w-10/12 md:w-8/12 opacity-80 mt-8">
            <h1 className="text-center text-gray-black text-2xl">
              Uncovering the past while shaping the future!
            </h1>
            <p className="w-10/12 mt-5 mb-5">
              I am Alex, a former archaeologist who has transitioned into
              frontend development, leveraging my analytical skills and
              attention to detail acquired in the field.
            </p>
            <p className="w-10/12">
              My experience includes proficiency in HTML, CSS, and JavaScript,
              along with a strong foundation in responsive design and user
              experience principles.
            </p>
            <p className="w-10/12 mb-5">
              I am passionate about creating intuitive interfaces and engaging
              web applications, continuously exploring the latest frameworks and
              technologies to enhance my projects.
            </p>
            <p className="w-10/12 mb-5">
              The following work highlights a selection of websites developed
              using either plain JavaScript with Bootstrap for styling or React
              in conjunction with Tailwind, employing the Vite build tool.
            </p>
          </div>
          <img
            src="/assets/Evolution.png"
            alt="vertical split image of a man dressed in two different job uniforms."
            className="w-10/12 sm:w-8/12 md:w-6/12 opacity-90 lg:w-5/12 xl:w-4/12 h-auto relative hover:animate-flicker rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default App;
