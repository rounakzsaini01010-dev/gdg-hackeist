const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfVNx0ANEqMHLlsm-qei1T_ARVQa9C97G1bzYVMt-OGNvQSBg/viewform?usp=publish-edito";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <p className="eyebrow">GDG ON CAMPUS MIET</p>
        <h1 id="hero-title">
          HACK<span>HEIST</span> 2026
        </h1>
        <p className="hero-tagline">BUILD. BREAK. SOLVE.</p>
        <p className="hero-intro">
          A student-led event for curious minds who want to learn, build, solve
          problems, and connect with other developers.
        </p>
        <p className="hero-organizer">Organized by GDG on Campus MIET</p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
          <a className="text-link" href="#about">
            Learn more
          </a>
        </div>

        <div className="event-summary" aria-label="Event information">
          <div>
            <span>Date</span>
            <strong>Date to be announced</strong>
          </div>
          <div>
            <span>Time</span>
            <strong>9:00 AM onwards</strong>
          </div>
          <div>
            <span>Venue</span>
            <strong>MIET, Meerut</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
