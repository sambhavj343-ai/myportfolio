import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "../assets/project.png";

import "./project.css";
function Projects() {

   const [activeFilter, setActiveFilter] = useState("All Projects");







useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.fromTo(
    ".Name",
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out"
    }
  )
  .fromTo(
    ".Nav-links li",
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.12,
      ease: "power3.out"
    },
    "-=0.3"
  );

  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-hero",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  heroTl
    .fromTo(
      ".projects-label",
      {
        x: -70,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
      }
    )
    .fromTo(
      ".projects-content h1",
      {
        x: -70,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.35"
    )
    .fromTo(
      ".projects-description",
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
      },
      "-=0.4"
    )
    .fromTo(
      ".project-stat",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .fromTo(
      ".projects-image",
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.6"
    );

  gsap.fromTo(
    ".project-filter button",
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-filter",
        start: "top 90%",
        toggleActions: "play none none none"
      }
    }
  );

  gsap.fromTo(
    ".project-card",
    {
      y: 80,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  gsap.fromTo(
    ".project-card img",
    {
      scale: 1.08
    },
    {
      scale: 1,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const image = card.querySelector(".project-image img");
    const bookmark = card.querySelector(".bookmark");

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(image, {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(bookmark, {
        scale: 1.2,
        duration: 0.25,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(bookmark, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out"
      });
    });
  });

  return () => {
    tl.kill();
    heroTl.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);
  return (
    <>
      <nav className="Navbar">

        <div className="Name">
          Sambhav jain
        </div>

        <ul className="Nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/skills">Skills</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/experience">Experience</Link>
          </li>

        </ul>

      </nav>

      <section className="projects-hero">

  <div className="projects-content">

    <span className="projects-label">
      MY PROJECTS
    </span>

    <h1>
      Things I've <span>Built</span>
    </h1>

    <p className="projects-description">
      Here are some of the projects I've worked on.
      <br />
      Each project helped me learn, experiment and
      <br />
      grow as a developer.
    </p>

    <div className="project-stats">

      <div className="project-stat">
        ...
      </div>

      <div className="project-stat">
        ...
      </div>

      <div className="project-stat">
        ...
      </div>

    </div>

  </div>

  <div className="projects-image">
    <img src={hero} alt="Projects" />
  </div>

</section>


<section className="projects-section">

<div className="project-filter">
  <button
    className={activeFilter === "All Projects" ? "active" : ""}
    onClick={() => setActiveFilter("All Projects")}
  >
    All Projects
  </button>

  <button
    className={activeFilter === "Web Applications" ? "active" : ""}
    onClick={() => setActiveFilter("Web Applications")}
  >
    Web Applications
  </button>

  <button
    className={activeFilter === "Frontend" ? "active" : ""}
    onClick={() => setActiveFilter("Frontend")}
  >
    Frontend
  </button>

  <button
    className={activeFilter === "Full Stack" ? "active" : ""}
    onClick={() => setActiveFilter("Full Stack")}
  >
    Full Stack
  </button>

  <button
    className={activeFilter === "Experiments" ? "active" : ""}
    onClick={() => setActiveFilter("Experiments")}
  >
    Experiments
  </button>
</div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/airdeals.png" alt="AirDeals" />
              <button className="bookmark">♧</button>
            </div>

            <div className="project-info">
              <h2>AirDeals</h2>

              <p>
                A modern flight booking website with search,
                filters, seat selection and booking flow.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a href="#">◉ Live Demo ↗</a>
                <a href="#">◉ View Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/talentiq.png" alt="TalentIQ" />
              <button className="bookmark">♧</button>
            </div>

            <div className="project-info">
              <h2>TalentIQ</h2>

              <p>
                AI powered resume screening platform that
                ranks resumes based on job descriptions.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>AI</span>
              </div>

              <div className="project-links">
                <a href="#">◉ Live Demo ↗</a>
                <a href="#">◉ View Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/blinkit.png" alt="Blinkit Clone" />
              <button className="bookmark">♧</button>
            </div>

            <div className="project-info">
              <h2>Blinkit Clone</h2>

              <p>
                A responsive grocery e-commerce UI clone
                inspired by Blinkit.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a href="#">◉ Live Demo ↗</a>
                <a href="#">◉ View Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/devblog.png" alt="DevBlog" />
              <button className="bookmark">♧</button>
            </div>

            <div className="project-info">
              <h2>DevBlog</h2>

              <p>
                A blog website for developers to share
                articles and learn together.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>

              <div className="project-links">
                <a href="#">◉ Live Demo ↗</a>
                <a href="#">◉ View Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/portfolio.png" alt="Portfolio v1" />
              <button className="bookmark">♧</button>
            </div>

            <div className="project-info">
              <h2>Portfolio v1</h2>

              <p>
                My first portfolio website built with HTML,
                CSS and JavaScript.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a href="#">◉ Live Demo ↗</a>
                <a href="#">◉ View Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/weather.png" alt="Weather App" />
              <button className="bookmark">♧</button>
            </div>

            <div className="project-info">
              <h2>Weather App</h2>

              <p>
                A simple weather application using OpenWeather
                API to get real-time weather updates.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>API</span>
              </div>

              <div className="project-links">
                <a href="#">◉ Live Demo ↗</a>
                <a href="#">◉ View Code</a>
              </div>
            </div>
          </div>

        </div>
      </section>

<section className="cta-section">
  <div className="cta-left">
    <div className="cta-icon">🚀</div>

    <div className="cta-content">
      <span>INTERESTED IN WORKING TOGETHER?</span>

      <h2>
        Let's Build Something <strong>Amazing</strong>
      </h2>

      <p>
        I'm always open to discussing new projects, creative ideas
        <br />
        or opportunities to be part of your vision.
      </p>
    </div>
  </div>

  <Link to="/contact" className="cta-btn">
    Get in Touch <span>→</span>
  </Link>

  <div className="cta-rocket">
    🚀
  </div>
</section>

<footer className="footer-bottom">

  <div className="footer-brand">
    <div className="footer-logo">SJ</div>

    <div>
      <h3>Sambhav Jain</h3>
      <p>© 2026 Sambhav Jain. All rights reserved.</p>
    </div>
  </div>

  <div className="footer-social">
    <span>Connect with me</span>

    <div className="social-links">
      <a href="#">◉</a>
      <a href="#">in</a>
      <a href="#">◎</a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer">✉</a>
    </div>
  </div>

  <a href="#" className="back-top">
    Back to Top <span>↑</span>
  </a>

</footer>

      
    </>
  );
}

export default Projects;