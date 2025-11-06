import React from "react";

// Render an obfuscated email and open the user's mail client on click.
// The address is kept out of static HTML but still usable by assistive tech via aria-label.
const EmailLink: React.FC<{ className?: string }> = ({ className }) => {
  const user = "skogdev";
  const domain = "protonmail.com";
  const address = `${user}@${domain}`;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    // open the default mail client without a visible mailto in the markup
    window.location.href = `mailto:${address}`;
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={className}
      // short visible label to reduce scraping while remaining accessible
      aria-label={`Email Alex (opens mail client)`}
    >
      {"Email\u00A0me"}
    </a>
  );
};

export default EmailLink;
