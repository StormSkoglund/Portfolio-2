import React from "react";

interface CaseStudyProps {
  title: string;
  problem: string;
  process: string;
  solution: string;
  image?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  problem,
  process,
  solution,
  image,
}) => {
  return (
    <article className="w-full max-w-4xl mx-auto bg-white/95 rounded-xl shadow-md p-6 my-6">
      <header className="mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-customBlue">{title}</h3>
      </header>

      <div className="flex flex-col md:flex-row gap-4">
        {image && (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full md:w-1/3 rounded-md object-cover max-h-48"
          />
        )}

        <div className="flex-1">
          <section className="mb-3">
            <h4 className="text-sm font-medium text-gray-700">Problem</h4>
            <p className="text-sm text-gray-600 mt-1">{problem}</p>
          </section>

          <section className="mb-3">
            <h4 className="text-sm font-medium text-gray-700">Process</h4>
            <p className="text-sm text-gray-600 mt-1">{process}</p>
          </section>

          <section>
            <h4 className="text-sm font-medium text-gray-700">Solution</h4>
            <p className="text-sm text-gray-600 mt-1">{solution}</p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CaseStudy;
