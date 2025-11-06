import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const ProjectCarousel = React.lazy(
  () => import("./components/ProjectCarousel")
);
import { TechStack } from "./components/tech/TechStack";
import EmailLink from "./components/EmailLink";

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

  // Emit a lowercase `fetchpriority` attribute (supported by browsers)
  // without tripping React/TypeScript warnings.
  const fetchPriorityAttr: Record<string, string> = { fetchpriority: "high" };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Alex Storm Skoglund — Frontend Portfolio</title>
        <meta
          name="description"
          content="Frontend portfolio showcasing projects and current tech stack."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white text-gray-800 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-white">
        <Header />

        <main className="container mx-auto flex-1 p-6">
          <section className="flex flex-col items-center text-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-customBlue dark:text-customGold">
              Uncovering the past while shaping the future
            </h1>
            <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-200">
              I'm Alex — an archaeologist turned frontend developer. I build
              clear, responsive interfaces with a focus on usability and
              performance.
            </p>
            <TechStack />
          </section>

          <section id="work" className="my-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-full lg:w-2/5">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center">
                  <picture>
                    <source srcSet="/assets/mudman.avif" type="image/avif" />
                    <source srcSet="/assets/mudman.webp" type="image/webp" />
                    <img
                      src="/assets/mudman.jpg"
                      alt="Archaeological dig: mudman"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={800}
                      loading="eager"
                      decoding="async"
                      {...fetchPriorityAttr}
                    />
                  </picture>
                </div>
              </div>

              {/* Right: custom slider for ProjectCard (renders links outside slide to avoid nested-interactive) */}
              <div className="w-full lg:w-3/5">
                <div className="bg-white/90 rounded-2xl p-4 shadow-lg h-full">
                  {/* Project carousel (loaded lazily) */}
                  <React.Suspense
                    fallback={
                      <div id="carousel" className="w-full h-80 md:h-96">
                        {/* simple skeleton to avoid layout shift while loading */}
                        <div className="w-full h-full bg-gray-100 rounded-lg animate-pulse" />
                      </div>
                    }
                  >
                    <ProjectCarousel />
                  </React.Suspense>
                </div>
                <p className="max-w-2xl text-gray-700 dark:text-gray-200 mt-10 p-2">
                  I'm available for freelance and full-time opportunities —
                  let's talk:
                  <EmailLink className="ml-2 text-customBlue dark:text-gray-200 border-spacing-10 px-3 py-1 bg-customGold rounded-md" />
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
