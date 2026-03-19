export function TechStack() {
  return (
    <>
      <h2 className="max-w-2xl text-customBlue font-semibold dark:text-gray-200 mt-10 mb-5">
        These are the languages and tools I use:
      </h2>
      <p className="flex flex-row flex-wrap justify-center m-1">
        {[
          {
            href: "https://www.figma.com/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
            alt: "Figma",
          },
          {
            href: "https://www.w3.org/html/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            alt: "HTML5",
          },
          {
            href: "https://www.w3schools.com/css/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            alt: "CSS3",
          },
          {
            href: "https://sass-lang.com/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
            alt: "SCSS",
          },
          {
            href: "https://getbootstrap.com/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
            alt: "Bootstrap",
          },
          {
            href: "https://tailwindcss.com/",
            src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
            alt: "Tailwind CSS",
          },
          {
            href: "https://reactjs.org/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            alt: "React",
          },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            alt: "JavaScript",
          },
          {
            href: "https://www.typescriptlang.org/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            alt: "TypeScript",
          },
          {
            href: "https://mui.com/",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
            alt: "MUI",
          },
        ].map((icon, idx) => (
          <a
            key={icon.alt}
            href={icon.href}
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              width={80}
              height={80}
              className="p-1.5 inline-block transition-transform duration-500 hover:animate-[spin_200ms_ease-in-out_1_forwards] animate-[bounce_300ms_ease-in-out_1_forwards]"
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            />
          </a>
        ))}
      </p>
    </>
  );
}
