import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  role?: string;
  stack: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  demoVideo?: string; // optional URL to an mp4/webm demo hosted in /public or external
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  stack,
  description,

  demoVideo,
  image,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState<string | undefined>(
    undefined
  );
  const [showControls, setShowControls] = React.useState(true);
  const ref = React.useRef<HTMLElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  // Autoplay video when card is sufficiently visible
  React.useEffect(() => {
    if (!demoVideo) return;
    const node = ref.current;
    // If the element ref isn't yet attached, don't trigger a state update here —
    // that can cause React "act" warnings in tests. Only proceed once the
    // DOM node exists.
    if (!node) return;

    // If the runtime doesn't support IntersectionObserver, fall back to
    // enabling playback so demos still play in older browsers.
    if (typeof IntersectionObserver === "undefined") {
      setIsPlaying(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    obs.observe(node as Element);
    return () => obs.disconnect();
  }, [demoVideo]);

  return (
    <article
      ref={(el) => (ref.current = el)}
      className="w-full h-full flex flex-col items-stretch gap-4 p-4 bg-white rounded-xl shadow-md min-h-[300px] relative z-30 overflow-hidden dark:bg-slate-800 dark:text-white"
    >
      {isPlaying && demoVideo ? (
        // media on top (full width) with intrinsic aspect preserved
        <div
          className="w-full rounded-lg overflow-hidden shadow-sm bg-black relative group"
          style={
            {
              aspectRatio: aspectRatio || "16/9",
              maxHeight: "640px",
            } as React.CSSProperties
          }
          onMouseEnter={() => setShowControls(false)}
          onMouseLeave={() => setShowControls(true)}
        >
          <video
            ref={videoRef}
            src={demoVideo}
            className="w-full h-auto object-contain bg-black"
            controls={showControls}
            autoPlay
            muted
            playsInline
            onClick={() => {
              const v = videoRef.current;
              if (!v) return;
              if (v.paused) {
                v.play();
                setIsPlaying(true);
              } else {
                v.pause();
                setIsPlaying(false);
              }
            }}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget as HTMLVideoElement;
              if (v.videoWidth && v.videoHeight) {
                setAspectRatio(`${v.videoWidth}/${v.videoHeight}`);
              }
            }}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Accessible overlay control: visible on hover (group) or when focused (focus-within) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-auto">
              <button
                type="button"
                className="flex items-center gap-2 bg-black/60 text-white px-4 py-3 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
                onClick={(e) => {
                  e.stopPropagation();
                  const v = videoRef.current;
                  if (!v) return;
                  if (v.paused) {
                    v.play();
                    setIsPlaying(true);
                  } else {
                    v.pause();
                    setIsPlaying(false);
                  }
                }}
                aria-pressed={isPlaying}
                aria-label={isPlaying ? "Pause demo" : "Play demo"}
              >
                <span className="text-lg">
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </span>
                <span className="sr-only md:not-sr-only">
                  {isPlaying ? "Pause" : "Play"}
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        image && (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full rounded-lg object-contain shadow-sm"
            style={
              {
                aspectRatio: aspectRatio || "16/9",
                maxHeight: "640px",
              } as React.CSSProperties
            }
          />
        )
      )}

      <div className="flex-1 w-full flex flex-col justify-between h-full text-gray-900 md:pl-4">
        <div>
          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-customBlue">
            {title}
          </h2>
          {!image && (
            <div className="mt-4 text-center text-lg font-medium text-gray-800">
              {title}
            </div>
          )}
          <div className="text-xs md:text-sm text-gray-600 mt-1">
            {role && <span className="mr-2">{role}</span>}
            <span className="text-gray-500">{stack}</span>
          </div>

          <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-200">
            {description}
          </p>
        </div>

        {/* Action links are intentionally rendered outside the card in the parent slider
            to avoid interactive elements being nested inside role-bearing carousel slides. */}
      </div>
    </article>
  );
};

export default ProjectCard;
