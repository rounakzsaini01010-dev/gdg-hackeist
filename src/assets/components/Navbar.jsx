import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#hero" aria-label="HackHeist home">
          <img
            className="brand-mark"
            src="https://hackheist-steel.vercel.app/assets/gdg-logo.png"
            alt="GDG on Campus MIET logo"
          />
          <span>
            GDG ON CAMPUS <strong>MIET</strong>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="site-nav"
          className={`site-nav ${isOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#highlights" onClick={() => setIsOpen(false)}>
            Highlights
          </a>
          <a href="#details" onClick={() => setIsOpen(false)}>
            Details
          </a>
          <a href="#cta" onClick={() => setIsOpen(false)}>
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}
