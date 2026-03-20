import React from "react";

interface ProjectCardProps {
  title: string;
  role?: string;
  stack: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  demoVideo?: string; // optional URL to an mp4 demo hosted in /public or external
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
    undefined,
  );
  const [showControls, setShowControls] = React.useState(true);
  const ref = React.useRef<HTMLElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [preferMobileVideo, setPreferMobileVideo] = React.useState(false);

  // Prefer a smaller mobile video variant when the viewport is narrow.
  // This keeps the video playback working well on resource-constrained devices.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const mq = window.matchMedia?.("(max-width: 640px)");
      if (mq) {
        setPreferMobileVideo(mq.matches);
        const handler = (e: MediaQueryListEvent) =>
          setPreferMobileVideo(e.matches);
        if (mq.addEventListener) mq.addEventListener("change", handler);
        return () => {
          if (mq.removeEventListener)
            mq.removeEventListener("change", handler as EventListener);
        };
      }
    } catch {
      // ignore errors (SSR or blocked APIs)
    }
  }, []);

  // The demo videos are currently stored as a single MP4 (no mobile variant).
  // If a mobile variant is added (e.g. demo-mobile.mp4) this logic will try to
  // use it on smaller screens, but gracefully fall back to the main file.
  const mobileVariant = demoVideo
    ? demoVideo.replace(/(\.[^.]+)$/, "-mobile$1")
    : undefined;
  const [videoSrc, setVideoSrc] = React.useState<string | undefined>(demoVideo);

  // Keep the current video source in sync with the active demo and any mobile
  // preference changes.
  React.useEffect(() => {
    setVideoSrc(demoVideo);
  }, [demoVideo]);

  React.useEffect(() => {
    if (!demoVideo) {
      setVideoSrc(undefined);
      return;
    }

    setVideoSrc(preferMobileVideo && mobileVariant ? mobileVariant : demoVideo);
  }, [preferMobileVideo, demoVideo, mobileVariant]);

  // Autoplay the demo when the card is mostly visible
  React.useEffect(() => {
    if (!demoVideo) return;
    const node = ref.current;
    // If the ref isn't attached yet, wait — updating state too early can
    // trigger React test warnings.
    if (!node) return;

    // If IntersectionObserver isn't available, just enable playback so demos work.
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
      { threshold: [0, 0.5, 1] },
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
            // Only set `src` when playing to avoid downloading large files early.
            src={isPlaying ? videoSrc : undefined}
            className="w-full h-auto object-contain bg-black"
            controls={showControls}
            autoPlay={isPlaying}
            muted
            loop
            playsInline
            preload="metadata"
            poster={
              image ? image.replace(/\.(png|jpe?g)$/i, ".avif") : undefined
            }
            onError={() => {
              // If the mobile variant fails to load, fall back to the main demo video.
              if (videoSrc && demoVideo && videoSrc !== demoVideo) {
                setVideoSrc(demoVideo);
              }
            }}
            // Add a captions track (browser ignores it if the .vtt file is missing).
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
            // keep looping instead of switching to the poster image when playback ends
          >
            {/* Explicit <source> elements; the `src` above decides which file is used when playing. */}
            {demoVideo && <source src={demoVideo} type="video/mp4" />}
            {/* Prefer a same-name captions file (demo.vtt); helpful for accessibility audits. */}
            {demoVideo && (
              <track
                kind="captions"
                srcLang="en"
                label="English captions"
                src={demoVideo.replace(/\.[^.]+$/, ".vtt")}
                default
              />
            )}
          </video>

          {/* Overlay control shown on hover/focus for play/pause */}
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
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      aria-hidden
                    >
                      <path
                        fill="currentColor"
                        d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      aria-hidden
                    >
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  )}
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
          <picture>
            {/* Prefer AVIF then WebP if available (generated by optimize script) */}
            <source
              srcSet={image.replace(/\.(png|jpe?g)$/i, ".avif")}
              type="image/avif"
            />
            <source
              srcSet={image.replace(/\.(png|jpe?g)$/i, ".webp")}
              type="image/webp"
            />
            <img
              src={image}
              alt={`${title} screenshot`}
              loading="lazy"
              className="w-full rounded-lg object-contain shadow-sm"
              style={
                {
                  aspectRatio: aspectRatio || "16/9",
                  maxHeight: "640px",
                } as React.CSSProperties
              }
            />
          </picture>
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs md:text-sm text-gray-700 dark:text-white mt-1 mb-5 min-w-0">
            {role && <span className="min-w-0">{role}</span>}
            <span className="min-w-0 flex-1 text-gray-700 dark:text-white border border-solid p-2 break-words whitespace-normal">
              {stack}
            </span>
          </div>

          <p className="mt-2 text-sm md:text-base text-gray-900 dark:text-gray-200">
            {description}
          </p>
        </div>

        {/* Action links are rendered in the parent carousel to avoid nested interactive elements. */}
      </div>
    </article>
  );
};

export default ProjectCard;
