import React from "react";

// Render an obfuscated email and open the user's mail client on click.
// The address is kept out of static HTML but still usable by assistive tech via aria-label.
const EmailLink: React.FC<{ className?: string }> = ({ className }) => {
  const user = "skogdev";
  const domain = "protonmail.com";
  const address = `${user}@${domain}`;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    // Save minimal resume state (harmless and useful for debugging).
    try {
      sessionStorage.setItem(
        "resume_after_external",
        JSON.stringify({ pathname: window.location.pathname, ts: Date.now() })
      );
    } catch {
      /* ignore storage errors */
    }

    // Open the mail client in a new tab/window. Using a new tab avoids
    // making the current page an "intermediate" navigation target in many
    // browser heuristics and typically prevents the DevTools Issues warning.
    // Include noopener/noreferrer for security.
    try {
      window.open(`mailto:${address}`, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback to replace if window.open is blocked
      window.location.replace(`mailto:${address}`);
    }
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
