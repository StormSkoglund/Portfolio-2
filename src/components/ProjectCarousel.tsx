import React, { useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectCarousel: React.FC = () => {
  const projects = useMemo(() => {
    const base = [
      {
        title: "Auctio",
        role: "Student Project",
        stack: "HTML5, JavaScript, Bootstrap, SCSS",
        description: `Auctio is a semester project that lets users browse and bid on student-created items.`,
        repoLink: "https://github.com/StormSkoglund/Semester-Project-2",
        liveLink: "https://auctio.netlify.app/",
        image: "/assets/semproj2.png",
        demoVideo: "/assets/auctiodemo_.mp4",
      },
      {
        title: "BuyThat",
        role: "Course Assignment",
        stack: "React, Vite, JavaScript, Tailwind",
        description: `BuyThat uses a REST API to let users search products and simulate purchases.`,
        repoLink: "https://github.com/StormSkoglund/frontend-frameworks-ca",
        liveLink: "https://buythat.netlify.app/",
        image: "/assets/screen-buythat.png",
        demoVideo: "/assets/buythatdemo_.mp4",
      },
      {
        title: "HoliStay",
        role: "Final Exam Project",
        stack: "React, Vite, TypeScript, Tailwind",
        description: `HoliStay is a booking platform with customer and admin experiences.`,
        repoLink: "https://github.com/StormSkoglund/Project-Exam-2",
        liveLink: "https://project-exam2.netlify.app/",
        image: "/assets/holistay.png",
        demoVideo: "/assets/holistaydemo_.mp4",
      },
    ];

    // In tests we disable demo videos to avoid autoplay/IntersectionObserver
    // behavior that can cause React test warnings.
    if (process.env.NODE_ENV === "test") {
      return base.map((p) => ({ ...p, demoVideo: undefined }));
    }

    return base;
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Render an aria-live message for screen readers describing the active slide.
  const liveMessage = `Slide ${activeIndex + 1} of ${projects.length}: ${
    projects[activeIndex]?.title ?? ""
  }`;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          setActiveIndex((i) => Math.max(0, i - 1));
          e.preventDefault();
        } else if (e.key === "ArrowRight") {
          setActiveIndex((i) => Math.min(projects.length - 1, i + 1));
          e.preventDefault();
        } else if (e.key === "Home") {
          setActiveIndex(0);
          e.preventDefault();
        } else if (e.key === "End") {
          setActiveIndex(projects.length - 1);
          e.preventDefault();
        }
      }}
      className="outline-none min-h-[320px] md:min-h-[420px]"
    >
      <div className="h-full">
        <ProjectCard {...projects[activeIndex]} />
      </div>

      {/* aria-live region to announce slide changes */}
      <div className="sr-only" aria-live="polite" role="status">
        {liveMessage}
      </div>

      <div className="flex items-center justify-center mt-4 gap-3">
        <button
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          disabled={activeIndex === 0}
          className="mr-3 px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-customGold focus-visible:ring-offset-2"
          aria-disabled={activeIndex === 0}
          aria-label={
            activeIndex > 0
              ? `Previous: ${projects[activeIndex - 1].title}`
              : "Previous: none"
          }
        >
          Back
        </button>

        <div className="flex gap-2 items-center" aria-label="Project slides">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === activeIndex}
              className={`p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-customGold focus-visible:ring-offset-2 ${
                i === activeIndex ? "bg-gray-800" : "bg-transparent"
              }`}
              title={`Slide ${i + 1}`}
            >
              <span
                aria-hidden
                className={`block w-3 h-3 rounded-full ${
                  i === activeIndex ? "bg-white" : "bg-gray-300"
                }`}
              />
              <span className="sr-only">{`Slide ${i + 1} ${
                i === activeIndex ? "(current)" : ""
              }`}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            setActiveIndex((i) => Math.min(projects.length - 1, i + 1))
          }
          disabled={activeIndex === projects.length - 1}
          className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-customGold focus-visible:ring-offset-2"
          aria-disabled={activeIndex === projects.length - 1}
          aria-label={
            activeIndex < projects.length - 1
              ? `Next: ${projects[activeIndex + 1].title}`
              : "Next: none"
          }
        >
          Next
        </button>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
        <a
          href={projects[activeIndex].repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center inline-block px-3 py-2 bg-customBlue text-white rounded-md text-sm md:text-base hover:opacity-90"
        >
          View GitHub
        </a>
        <a
          href={projects[activeIndex].liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center inline-block px-3 py-2 bg-customGold text-customBlue rounded-md text-sm md:text-base hover:opacity-95 shadow-md transition"
        >
          View Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCarousel;
