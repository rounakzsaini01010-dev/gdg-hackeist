const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfVNx0ANEqMHLlsm-qei1T_ARVQa9C97G1bzYVMt-OGNvQSBg/viewform?usp=publish-edito";

export default function Details() {
  return (
    <section id="details" aria-labelledby="details-title">
      <div className="container two-column">
        <div>
          <p className="eyebrow">03 / EVENT DETAILS</p>
          <h2 id="details-title">Plan your visit.</h2>
        </div>

        <div className="details-list">
          <div>
            <span>Event</span>
            <strong>HackHeist 2026</strong>
          </div>
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

        <div className="event-access-panel">
          <p className="eyebrow">REGISTRATION</p>
          <p>
            Registration for HackHeist 2026 is officially open via Google Forms.
            Express your interest and register your participation below.
          </p>
          <div style={{ marginTop: "18px" }}>
            <a
              className="button button-primary"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Registration Form <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
