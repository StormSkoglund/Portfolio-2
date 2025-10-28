import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "pure-react-carousel/dist/react-carousel.es.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProjectCard from "./components/ProjectCard";
import CaseStudy from "./components/CaseStudy";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  useEffect(() => {
    function setCarouselHeight() {
      const carousel = document.getElementById("carousel");
      if (carousel) {
        carousel.style.height = "auto";
        // keep JS minHeight in sync with CSS min-h values
        carousel.style.minHeight =
          window.innerWidth >= 1024 ? "420px" : "320px";
      }
    }
    // set initial height and wire events
    setCarouselHeight();

    window.addEventListener("resize", setCarouselHeight);
    window.addEventListener("load", setCarouselHeight);

    return () => {
      window.removeEventListener("resize", setCarouselHeight);
      window.removeEventListener("load", setCarouselHeight);
    };
  }, []);

  return (
    <HelmetProvider>
        <Header />
        <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
          <Helmet>
            <title>Frontend Portfolio 2024 - Alex Storm Skoglund</title>
            <meta
              name="description"
              content="Alex Storm Skoglund's Frontend Portfolio for 2024"
            />
          </Helmet>
          <div className="relative w-full flex flex-col items-center">
            <div className="flex items-end justify-center mt-6 z-30">
              <FaArrowRight className="text-base lg:text-5xl text-white opacity-80" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-full  bg-customBlue opacity-90 flex flex-col justify-start items-center">
                <p className="text-center text-white font-semibold text-base md:text-4xl lg:text-5xl mt-4">
                  Archaeologist
                </p>
              </div>
              <div className="w-1/2 h-full  bg-customGold opacity-90 flex flex-col justify-start items-center">
                <p className="text-center text-customBlue font-semibold text-base md:text-4xl lg:text-5xl mt-4">
                  Frontend Developer
                </p>
              </div>
            </div>

            <a
              href="https://github.com/StormSkoglund"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end justify-center mt-20"
              aria-label="GitHub link"
            >
              <img
                src="/assets/Alex.png"
                alt="vertical split image of a man dressed in two different job uniforms."
                className="w-10/12 sm:w-8/12 lg:w-5/12 xl:w-6/12 h-auto relative shadow-2xl shadow-green-800 hover:animate-flicker rounded-2xl"
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
                web applications, continuously exploring the latest frameworks
                and technologies to enhance my projects.
              </p>
              <p className="w-10/12 mb-5">
                The following work highlights a selection of websites developed
                using either plain JavaScript with Bootstrap for styling or
                React in conjunction with Tailwind, employing the Vite build
                tool.
              </p>
            </div>
            <h2 className="z-30 font-bold text-xl text-white m-5">
              My Transformation
            </h2>
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
              <div className="flex flex-col xl:flex-row justify-between align-middle items-center p-3">
                <CarouselProvider
                  className="w-full max-w-4xl m-10 h-4/6 relative hover:animate-flicker rounded-2xl bg-slate-300 z-20"
                  naturalSlideWidth={90}
                  naturalSlideHeight={120}
                  totalSlides={4}
                >
                  <Slider className="h-full">
                    <Slide
                      index={0}
                      className="flex items-center justify-center"
                    >
                      <img
                        src="/assets/mudman.jpg"
                        alt="A man standing outside in an orange rainjacket, covered in mud"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </Slide>
                    <Slide
                      index={1}
                      className="flex items-center justify-center"
                    >
                      <img
                        src="/assets/digging-min.jpg"
                        alt="A man sitting in an excavation area in the mountains"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </Slide>
                    <Slide
                      index={2}
                      className="flex items-center justify-center"
                    >
                      <img
                        src="/assets/profile.jpg"
                        alt="A man working in a trench, dressed in rain gear"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </Slide>
                    <Slide
                      index={3}
                      className="flex items-center justify-center"
                    >
                      <img
                        src="/assets/profile2.jpg"
                        alt="A man overlooking a dirt wall in a trench, dressed in rain gear"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </Slide>
                  </Slider>
                  <DotGroup className="flex justify-center mt-4 space-x-2" />
                  <ButtonBack className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-80 bg-gray-800 hover:scale-110 duration-500 rounded-2xl  text-white p-2">
                    <span>Back</span>
                  </ButtonBack>
                  <ButtonNext className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-80 bg-gray-800 hover:scale-110 duration-500 rounded-2xl  text-white p-2">
                    <span>Next</span>
                  </ButtonNext>
                </CarouselProvider>
                <img
                  src="/assets/Evolution.png"
                  alt="vertical split image of a man dressed in two different job uniforms."
                  className="w-10/12 m-10 sm:w-8/12 md:w-6/12 opacity-85 lg:w-4/12 xl:w-3/12 h-4/6"
                />
                <div
                  id="carousel"
                  className="w-full max-w-4xl m-4 md:m-10 relative hover:animate-flicker rounded-2xl bg-white/90 shadow-lg min-h-[320px] md:min-h-[420px] z-40"
                >
                  <CarouselProvider
                    className="w-full"
                    naturalSlideWidth={100}
                    naturalSlideHeight={60}
                    isIntrinsicHeight={true}
                    visibleSlides={1}
                    totalSlides={3}
                  >
                    <Slider className="overflow-visible" id="work">
                      <Slide index={0} className="h-full">
                        <ProjectCard
                          title="Auctio"
                          role="Student Project"
                          stack="HTML5, JavaScript, Bootstrap, SCSS"
                          description={`The Auctio website was part of the Noroff Semester Project 2 exam; it allows users to search through an inventory of student-made items and bid on them. Users may also list their own items for sale.`}
                          repoLink="https://github.com/StormSkoglund/Semester-Project-2"
                          liveLink="https://auctio.netlify.app/"
                          image="/assets/semproj2.png"
                        />
                      </Slide>
                      <Slide index={1} className="h-full">
                        <ProjectCard
                          title="BuyThat"
                          role="Course Assignment"
                          stack="React, Vite, JavaScript, Tailwind"
                          description={`The BuyThat website, developed for a Noroff assignment, lets users search for products from a REST API and simulate purchase.`}
                          repoLink="https://github.com/StormSkoglund/frontend-frameworks-ca"
                          liveLink="https://buythat.netlify.app/"
                          image="/assets/screen-buythat.png"
                        />
                      </Slide>
                      <Slide index={2} className="h-full">
                        <ProjectCard
                          title="HoliStay"
                          role="Final Exam Project"
                          stack="React, Vite, TypeScript, Tailwind"
                          description={`The HoliStay website, developed for the final Noroff exam, is a booking platform featuring a user-friendly interface for both customers and administrators. It allows users to easily search for and book a variety of available venues, while also enabling admins to rent out their own venues.`}
                          repoLink="https://github.com/StormSkoglund/Project-Exam-2"
                          liveLink="https://project-exam2.netlify.app/"
                          image="/assets/holistay.png"
                        />
                      </Slide>
                    </Slider>
                    <DotGroup className="flex justify-center mt-4 space-x-2" />
                    <ButtonBack className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 opacity-70 text-white p-2 duration-500 rounded-2xl">
                      <span>Back</span>
                    </ButtonBack>
                    <ButtonNext className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 opacity-70 text-white p-2 duration-500 rounded-2xl">
                      <span>Next</span>
                    </ButtonNext>
                  </CarouselProvider>
                </div>
              </div>

            {/* Case Studies */}
            <div className="w-full flex flex-col items-center mt-6">
              <h2 className="text-2xl font-semibold text-customBlue mb-4">Case Studies</h2>
              <div className="w-full px-4">
                <CaseStudy
                  title="Auctio — Marketplace UX improvements"
                  problem={`Users struggled to find items and understand the bidding process; the UI mixed student inventory data with unclear affordances.`}
                  process={`I audited the product flow, simplified search filters, and reworked item listing cards to highlight price, remaining time, and bidding CTA. Conducted rapid usability testing with 5 peers.`}
                  solution={`Reduced cognitive load by simplifying listing metadata, added clear CTAs and inline help text. Result: clearer flow and fewer abandoned bids during test sessions.`}
                  image="/assets/semproj2.png"
                />

                <CaseStudy
                  title="HoliStay — Booking reliability"
                  problem={`Admins found it hard to manage availability and customers reported confusing booking steps leading to cancellations.`}
                  process={`Mapped admin/customer flows, introduced clearer form validation and progressive disclosure for complex options. Built small admin controls to preview availability.`}
                  solution={`Cleaner booking flow with inline validation reduced failed bookings in manual QA; admin preview simplified availability management.`}
                  image="/assets/holistay.png"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </HelmetProvider>
  );
};

export default App;
