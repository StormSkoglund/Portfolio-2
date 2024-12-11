import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "pure-react-carousel/dist/react-carousel.es.css";

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
        <div className="relative w-full flex flex-col items-center">
          <div className="flex items-end justify-center mt-6 z-30">
            <FaArrowRight className="text-2xl md:text-4xl lg:text-5xl text-white opacity-80" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-full  bg-customBlue opacity-90 flex flex-col justify-start items-center">
              <p className="text-center text-white font-semibold text-2xl md:text-4xl lg:text-5xl mt-4">
                Archaeologist
              </p>
            </div>
            <div className="w-1/2 h-full  bg-customGold opacity-90 flex flex-col justify-start items-center">
              <p className="text-center text-customBlue font-semibold text-2xl md:text-4xl lg:text-5xl mt-4">
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
              I am Alex, a archaeologist who has transitioned into frontend
              development, leveraging my analytical skills and attention to
              detail acquired in the field.
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
          <h2 className="z-30 font-bold text-xl text-white m-5">My Journey</h2>
          <div className="container">
            <div className="hidden lg:flex flex-row justify-around items-center m-5">
              <div className="z-30 font-bold text-lg text-white">
                Field Archaeology
              </div>
              <div className="z-30 font-bold text-lg text-white"></div>
              <div className="z-30 font-bold text-lg text-customBlue">
                Frontend Development
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between align-middle items-center">
              <CarouselProvider
                className="w-full max-w-4xl m-10 opacity-85 h-4/6 relative hover:animate-flicker rounded-2xl bg-slate-300"
                naturalSlideWidth={90}
                naturalSlideHeight={130}
                totalSlides={4}
              >
                <Slider className="h-full">
                  <Slide index={0} className="flex items-center justify-center">
                    <img
                      src="/assets/mudman.jpg"
                      alt="A man standing outside in an orange rainjacket, covered in mud"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </Slide>
                  <Slide index={1} className="flex items-center justify-center">
                    <img
                      src="/assets/digging-min.jpg"
                      alt="A man sitting in an excavation area in the mountains"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </Slide>
                  <Slide index={2} className="flex items-center justify-center">
                    <img
                      src="/assets/profile.jpg"
                      alt="A man working in a trench, dressed in rain gear"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </Slide>
                  <Slide index={3} className="flex items-center justify-center">
                    <img
                      src="/assets/profile2.jpg"
                      alt="A man overlooking a dirt wall in a trench, dressed in rain gear"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </Slide>
                </Slider>
                <ButtonBack className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 hover:scale-110 duration-500 rounded-2xl opacity-90 text-white p-2">
                  <span>Back</span>
                </ButtonBack>
                <ButtonNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 hover:scale-110 duration-500 rounded-2xl opacity-90 text-white p-2">
                  <span>Next</span>
                </ButtonNext>
              </CarouselProvider>
              <img
                src="/assets/Evolution.png"
                alt="vertical split image of a man dressed in two different job uniforms."
                className="w-10/12 m-10 sm:w-8/12 md:w-6/12 opacity-85 lg:w-4/12 xl:w-3/12 h-4/6"
              />
              <CarouselProvider
                className="w-full max-w-4xl m-10 opacity-90 h-4/6 relative hover:animate-flicker rounded-2xl bg-slate-300"
                naturalSlideWidth={90}
                naturalSlideHeight={130}
                totalSlides={3}
              >
                <Slider className="h-full">
                  <Slide index={0} className="flex items-center justify-center">
                    <img
                      src="/assets/semproj2.png"
                      alt="A screenshot from an auction-house website"
                      className="w-full h-max object-cover rounded-2xl"
                    />
                    <div className="mt-1 text-center">
                      <div className="text-base md:text-xl font-semibold">
                        BuyThat
                      </div>
                      <div className="mt-8 text-base md:text-lg font-normal md:mt-1">
                        Tech Stack:
                      </div>
                      <div className="text-small md:text-xl font-light text-black">
                        React, Vite, JavaScript, Tailwind.
                      </div>
                      <p className="mt-1 text-sm md:text-base p-1 md:mt-10 border-t-2 border-b-2">
                        The BuyThat website, developed for a Noroff assignment,
                        lets users search for products from a REST API and
                        simulate purchase.
                      </p>
                      <a
                        href="https://github.com/StormSkoglund/frontend-frameworks-ca"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="mt-5 text-xl font-bold hover:scale-110 hover:border-2 duration-500">
                          Visit GitHub Repository
                        </p>
                      </a>
                      <a
                        href="https://buythat.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="mt-5 text-xl font-bold hover:scale-110 duration-500">
                          View Live Demo
                        </p>
                      </a>
                    </div>
                  </Slide>
                  <Slide index={1} className="flex items-center justify-center">
                    <img
                      src="/assets/screen-buythat.png"
                      alt="A screenshot from a online shop"
                      className="w-full h-max object-cover rounded-2xl"
                    />
                    <div className="mt-1 text-center">
                      <div className="text-base md:text-xl font-semibold">
                        BuyThat
                      </div>
                      <div className="mt-8 text-base md:text-lg font-normal md:mt-1">
                        Tech Stack:
                      </div>
                      <div className="text-small md:text-xl font-light text-black">
                        React, Vite, JavaScript, Tailwind.
                      </div>
                      <p className="mt-1 text-sm md:text-base p-1 md:mt-10 border-t-2 border-b-2">
                        The BuyThat website, developed for a Noroff assignment,
                        lets users search for products from a REST API and
                        simulate purchase.
                      </p>
                      <a
                        href="https://github.com/StormSkoglund/frontend-frameworks-ca"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="mt-5 text-xl font-bold hover:scale-110 hover:border-2 duration-500">
                          Visit GitHub Repository
                        </p>
                      </a>
                      <a
                        href="https://buythat.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="mt-5 text-xl font-bold hover:scale-110 duration-500">
                          View Live Demo
                        </p>
                      </a>
                    </div>
                  </Slide>
                  <Slide index={2} className="flex items-center justify-center">
                    <img
                      src="/assets/holistay.png"
                      alt="A screenshot from a hotel-booking website"
                      className="w-full h-max object-cover"
                    />
                    <div className="mt-1 text-center">
                      <div className="text-base md:text-xl font-semibold">
                        BuyThat
                      </div>
                      <div className="mt-8 text-base md:text-lg font-normal md:mt-1">
                        Tech Stack:
                      </div>
                      <div className="text-small md:text-xl font-light text-black">
                        React, Vite, JavaScript, Tailwind.
                      </div>
                      <p className="mt-1 text-sm md:text-base p-1 md:mt-10 border-t-2 border-b-2">
                        The BuyThat website, developed for a Noroff assignment,
                        lets users search for products from a REST API and
                        simulate purchase.
                      </p>
                      <a
                        href="https://github.com/StormSkoglund/frontend-frameworks-ca"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="mt-5 text-xl font-bold hover:scale-110 hover:border-2 duration-500">
                          Visit GitHub Repository
                        </p>
                      </a>
                      <a
                        href="https://buythat.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="mt-5 text-xl font-bold hover:scale-110 duration-500">
                          View Live Demo
                        </p>
                      </a>
                    </div>
                  </Slide>
                </Slider>
                <ButtonBack className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 duration-500 rounded-2xl">
                  <span>Back</span>
                </ButtonBack>
                <ButtonNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 duration-500 rounded-2xl">
                  <span>Next</span>
                </ButtonNext>
              </CarouselProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
