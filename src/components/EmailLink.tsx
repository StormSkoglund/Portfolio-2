import React from "react";

// Renders an obfuscated email address visually and opens a mailto: when activated.
// This keeps the plaintext email out of the static HTML while remaining keyboard/
// screen-reader accessible via aria-label.
const EmailLink: React.FC<{ className?: string }> = ({ className }) => {
  const user = "skogdev";
  const domain = "protonmail.com";
  const address = `${user}@${domain}`;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    // build mailto and navigate — this avoids a static href in markup
    window.location.href = `mailto:${address}`;
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={className}
      // keep the visible text short to avoid scraping; provide a helpful aria-label
      aria-label={`Email Alex (opens mail client)`}
    >
      Email me
    </a>
  );
};

export default EmailLink;
