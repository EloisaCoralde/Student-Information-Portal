import "./Pages.css";

export default function About() {
  return (
    <div className="page-container inner-page">
      <section className="page-intro">
        <span className="eyebrow">WHO WE ARE</span>
        <h1>About this portal</h1>
        <p>A simple starting point for accessing student and course information.</p>
      </section>
      <section className="about-panel">
        <div className="about-symbol" aria-hidden="true">✦</div>
        <div>
          <span className="eyebrow">OUR PURPOSE</span>
          <h2>Information made easier to explore.</h2>
          <p>The Student Information Portal is a sample React application created for DCIT26: Application Development and Emerging Technologies, Laboratory Exercise 2. It demonstrates how a website can be organized into separate pages, connected through React Router, and built with reusable JSX components.</p>
        </div>
      </section>
      <section className="content-section about-features">
        <div className="section-heading"><div><span className="eyebrow">PORTAL FEATURES</span><h2>What you can do</h2></div></div>
        <div className="quick-grid">
          <div className="quick-card"><span className="quick-icon">♙</span><h3>Student directory</h3><p>Display reusable student profile cards with basic academic details.</p></div>
          <div className="quick-card"><span className="quick-icon">▤</span><h3>Course catalog</h3><p>Present course codes, descriptions, departments, and units.</p></div>
          <div className="quick-card"><span className="quick-icon">⌘</span><h3>Easy navigation</h3><p>Move between pages using client-side React Router navigation.</p></div>
        </div>
      </section>
      <p className="sample-note">Note: The names, student IDs, and course records in this project are sample data for demonstration. Replace them with verified information before submitting if your instructor requires actual records.</p>
    </div>
  );
}