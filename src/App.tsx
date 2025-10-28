import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProjectCard from "./components/ProjectCard";
import CaseStudy from "./components/CaseStudy";
import "pure-react-carousel/dist/react-carousel.es.css";

const App: React.FC = () => {
  useEffect(() => {
    const setCarouselMinHeight = () => {
      const el = document.getElementById("carousel");
      if (!el) return;
      const minH = window.innerWidth >= 768 ? "420px" : "320px";
      el.style.minHeight = minH;
    };

    setCarouselMinHeight();
    window.addEventListener("resize", setCarouselMinHeight);
    return () => window.removeEventListener("resize", setCarouselMinHeight);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Alex Storm Skoglund — Frontend Portfolio</title>
        <meta name="description" content="Frontend portfolio showcasing projects and case studies." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <Header />

        <main className="container mx-auto flex-1 p-6">
          {/* Hero / Intro */}
          <section className="flex flex-col items-center text-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-customGold">Uncovering the past while shaping the future</h1>
            <p className="mt-4 max-w-2xl text-gray-200">
              I'm Alex — an archaeologist turned frontend developer. I build clear,
              responsive interfaces with a focus on usability and performance.
            </p>
          </section>

          {/* Archaeology image carousel */}
          <section className="my-8">
            <CarouselProvider
              naturalSlideWidth={90}
              naturalSlideHeight={120}
              totalSlides={4}
              className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white/5 p-4"
            >
              <Slider>
                <Slide index={0}><img src="/assets/mudman.jpg" alt="mud" className="w-full rounded-lg object-cover" /></Slide>
                <Slide index={1}><img src="/assets/digging-min.jpg" alt="dig" className="w-full rounded-lg object-cover" /></Slide>
                <Slide index={2}><img src="/assets/profile.jpg" alt="profile" className="w-full rounded-lg object-cover" /></Slide>
                <Slide index={3}><img src="/assets/profile2.jpg" alt="profile2" className="w-full rounded-lg object-cover" /></Slide>
              </Slider>
              <DotGroup className="flex justify-center mt-4 gap-2" />
            </CarouselProvider>
          </section>

          {/* Projects carousel */}
          <section id="work" className="my-8">
            <div id="carousel" className="max-w-4xl mx-auto bg-white/90 rounded-2xl p-4 shadow-lg">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={60}
                isIntrinsicHeight={true}
                visibleSlides={1}
                totalSlides={3}
                className="w-full"
              >
                <Slider className="overflow-visible">
                  <Slide index={0} className="h-full">
                    <ProjectCard
                      title="Auctio"
                      role="Student Project"
                      stack="HTML5, JavaScript, Bootstrap, SCSS"
                      description={`Auctio is a semester project that lets users browse and bid on student-created items.`}
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
                      description={`BuyThat uses a REST API to let users search products and simulate purchases.`}
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
                      description={`HoliStay is a booking platform with customer and admin experiences.`}
                      repoLink="https://github.com/StormSkoglund/Project-Exam-2"
                      liveLink="https://project-exam2.netlify.app/"
                      image="/assets/holistay.png"
                    />
                  </Slide>
                </Slider>

                <div className="flex justify-center mt-4">
                  <ButtonBack className="mr-3 px-3 py-1 bg-gray-800 text-white rounded">Back</ButtonBack>
                  <ButtonNext className="px-3 py-1 bg-gray-800 text-white rounded">Next</ButtonNext>
                </div>
                <DotGroup className="flex justify-center mt-4 gap-2" />
              </CarouselProvider>
            </div>
          </section>

          {/* Case studies */}
          <section className="my-8">
            <h2 className="text-2xl font-semibold text-center text-customBlue mb-4">Case Studies</h2>
            <div className="space-y-6">
              <CaseStudy
                title="Auctio — Marketplace UX improvements"
                problem={`Users struggled to find items and understand the bidding process; the UI mixed student inventory data with unclear affordances.`}
                process={`Audited the product flow, simplified filters, and reworked listing cards. Conducted rapid usability testing.`}
                solution={`Simplified listing metadata, added clearer CTAs and inline help text. Result: improved clarity and fewer abandoned bids in tests.`}
                image="/assets/semproj2.png"
              />

              <CaseStudy
                title="HoliStay — Booking reliability"
                problem={`Admins found it hard to manage availability and customers reported confusing booking steps leading to cancellations.`}
                process={`Mapped admin/customer flows, introduced clearer form validation and progressive disclosure for complex options.`}
                solution={`Cleaner booking flow with inline validation reduced failed bookings in manual QA; admin preview simplified availability management.`}
                image="/assets/holistay.png"
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
