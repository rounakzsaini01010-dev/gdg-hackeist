export default function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title">
      <div className="container">
        <p className="eyebrow">02 / EVENT HIGHLIGHTS</p>
        <h2 id="highlights-title">Something useful for every builder.</h2>
        <div className="highlight-grid">
          <article className="highlight-card">
            <span className="card-number">01</span>
            <h3>Hackathon</h3>
            <p>Build and present an idea with a team.</p>
          </article>
          <article className="highlight-card">
            <span className="card-number">02</span>
            <h3>Workshop</h3>
            <p>Learn practical development skills through guided sessions.</p>
          </article>
          <article className="highlight-card">
            <span className="card-number">03</span>
            <h3>Tech Session</h3>
            <p>Learn from developers and understand real-world technology.</p>
          </article>
          <article className="highlight-card">
            <span className="card-number">04</span>
            <h3>Networking</h3>
            <p>
              Meet students, mentors, and members of the developer community.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
