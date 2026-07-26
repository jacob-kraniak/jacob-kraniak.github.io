import React from "react";

export function Head() {
  return <title>Jacob Kraniak | Cybersecurity Portfolio</title>;
}

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1>Jacob Kraniak</h1>
        <p>Cybersecurity Professional</p>
      </header>

      <section>
        <h2>Welcome</h2>
        <p>This is an early-stage portfolio site built with Gatsby. More sections coming soon.</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Next Steps</h2>
        <ul>
          <li>Projects &amp; Case Studies</li>
          <li>Experience &amp; Certifications</li>
          <li>Skills &amp; Tools</li>
          <li>Contact</li>
        </ul>
      </section>
    </div>
  );
}
