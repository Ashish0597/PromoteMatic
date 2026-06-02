import React from "react";

function WebDevelopmentPage() {
  const projects = [
    {
      title: "Blue Era Infrastructure",
      image: "/assets/webdev-img/blueera.png",
      url: "https://blueerainfrastructure.com/",
      type: "Infrastructure Website",
    },
    {
      title: "DeepSemi",
      image: "/assets/webdev-img/deepsemi.png",
      url: "https://deepsemi.in/",
      type: "Semiconductor Website",
    },
    {
      title: "Mount View Grand Villa",
      image: "/assets/webdev-img/mountview.png",
      url: "https://mountviewgrandvilla.in/",
      type: "Villa & Hospitality Website",
    },
    {
      title: "TrovaSemi",
      image: "/assets/webdev-img/trovasemi.png",
      url: "https://www.trovasemi.com/",
      type: "Corporate Website",
    },
    {
      title: "Truman Technologies",
      image: "/assets/webdev-img/truman.png",
      url: "https://www.trumantechnologies.in/",
      type: "Technology Website",
    },
    {
      title: "Villa Euphoria",
      image: "/assets/webdev-img/villa.png",
      url: "https://villaeuphoria.in/",
      type: "Luxury Villa Website",
    },
  ];

  return (
    <div className="webdev-page">
      {/* HERO */}
     <section className="webdev-hero">
  <div className="hero-container">

    <div className="webdev-badge">
      <span>PromoteMatic Portfolio</span>
    </div>

    <h1>
      Websites That Build Trust,
      Generate Leads & Drive Growth
    </h1>

    <p>
      We design and develop high-performance websites that help
      businesses attract customers, establish credibility and scale
      faster in the digital world.
    </p>

    <div className="webdev-stats">

      <div className="stat-box">
        <h3>25+</h3>
        <span>Projects Delivered</span>
      </div>

      <div className="stat-box">
        <h3>100%</h3>
        <span>Responsive Design</span>
      </div>

      <div className="stat-box">
        <h3>SEO</h3>
        <span>Optimized</span>
      </div>

    </div>

  </div>
</section>

<section className="featured-project">

  <div className="hero-container">

    <div className="featured-wrapper">

      <div className="featured-image">
        <img
          src="/assets/webdev-img/truman.png"
          alt="Truman Technologies"
        />
      </div>

      <div className="featured-content">

        <span>FEATURED PROJECT</span>

        <h2>Truman Technologies</h2>

        <p>
          A modern technology website focused on credibility,
          conversion and premium digital presence.
        </p>

        <a
          href="https://www.trumantechnologies.in/"
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          Visit Website
        </a>

      </div>

    </div>

  </div>

</section>

      {/* PROJECTS */}
      <section className="webdev-project-section">
        <div className="hero-container">
          <div className="webdev-grid">
            {projects.map((project, index) => (
             <div className="webdev-card" key={index}>

  <div className="webdev-image">
    <img src={project.image} alt={project.title} />
  </div>

  <div className="webdev-content">

    <span className="project-type">
      {project.type}
    </span>

    <h3>{project.title}</h3>

    <div className="project-tags">
      <span>Responsive</span>
      <span>SEO Ready</span>
      <span>Fast Loading</span>
    </div>

    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="project-btn"
    >
      View Live Website
    </a>

  </div>

</div>
            ))}
          </div>
        </div>
      </section>
<section className="webdev-process">

  <div className="hero-container">

    <h2>Our Development Process</h2>

    <div className="process-grid">

      <div className="process-card">
        <span>01</span>
        <h4>Discovery</h4>
        <p>Understanding your business goals.</p>
      </div>

      <div className="process-card">
        <span>02</span>
        <h4>UI / UX Design</h4>
        <p>Creating a modern user experience.</p>
      </div>

      <div className="process-card">
        <span>03</span>
        <h4>Development</h4>
        <p>Building scalable responsive websites.</p>
      </div>

      <div className="process-card">
        <span>04</span>
        <h4>Launch</h4>
        <p>Testing, optimization and deployment.</p>
      </div>

    </div>

  </div>

</section>
      {/* CTA */}
      <section className="webdev-cta">
        <div className="hero-container">
          <h2>Ready To Build Your Next Website?</h2>

          <p>
            Let's create a modern, responsive and high-converting website for
            your business.
          </p>

          <a href="/contact" className="cta-btn">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopmentPage;