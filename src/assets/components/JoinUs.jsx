const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfVNx0ANEqMHLlsm-qei1T_ARVQa9C97G1bzYVMt-OGNvQSBg/viewform?usp=publish-edito";

export default function JoinUs() {
  return (
    <section id="cta" aria-labelledby="cta-title">
      <div className="container cta-content">
        <p className="eyebrow">04 / TAKE PART</p>
        <h2 id="cta-title">Ready to build?</h2>
        <p>Bring your ideas and join the HackHeist community.</p>
        <a
          className="button button-primary"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
