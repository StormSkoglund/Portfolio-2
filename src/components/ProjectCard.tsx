import React from "react";

interface ProjectCardProps {
  title: string;
  role?: string;
  stack: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  stack,
  description,
  repoLink,
  liveLink,
  image,
}) => {
  return (
  <article className="w-full h-full flex flex-col md:flex-row items-start gap-2 md:gap-4 p-2 md:p-4 lg:p-6 bg-white md:bg-white/95 rounded-xl shadow-md min-h-[260px] relative z-30 overflow-hidden">
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full md:w-2/5 flex-shrink-0 rounded-lg object-cover max-h-64 md:max-h-80 lg:max-h-96 shadow-sm"
        />
      )}

      <div className="flex-1 flex flex-col justify-between h-full text-gray-900">
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-customBlue">{title}</h3>
          {!image && (
            <div className="mt-4 text-center text-lg font-medium text-gray-800">
              {title}
            </div>
          )}
          <div className="text-xs md:text-sm text-gray-600 mt-1">
            {role && <span className="mr-2">{role}</span>}
            <span className="text-gray-500">{stack}</span>
          </div>

          <p className="mt-2 text-sm md:text-base text-gray-700">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 bg-customBlue text-white rounded-md text-sm md:text-base hover:opacity-90"
            >
              View GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 border border-gray-300 rounded-md text-sm md:text-base hover:scale-105 duration-150"
            >
              View Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
