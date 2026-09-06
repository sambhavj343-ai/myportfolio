import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./experience.css";
import journey from "../assets/journey.png";

function Experience() {
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
    ).fromTo(
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
        trigger: ".experience-hero",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    heroTl
      .fromTo(
        ".journey-label",
        {
          x: -60,
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
        ".experience-content h1",
        {
          x: -80,
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
        ".experience-content p",
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
        ".journey-line",
        {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center"
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        },
        "-=0.3"
      )
      .fromTo(
        ".journey-image",
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.7"
      );

    gsap.to(".journey-image img", {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.fromTo(
      ".timeline-item",
      {
        y: 70,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );


gsap.fromTo(
  ".learning-heading",
  {
    y: 40,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".learning-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".learning-card",
  {
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".learning-grid",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".milestone-card",
  {
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".milestone-grid",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".current-card",
  {
    y: 40,
    opacity: 0,
    x: -20
  },
  {
    y: 0,
    opacity: 1,
    x: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".current-learning",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);


gsap.fromTo(
  ".experience-cta",
  {
    y: 60,
    opacity: 0,
    scale: 0.96
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".experience-cta",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".footer-main > *",
  {
    y: 30,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".experience-footer",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  }
);


    return () => {
      tl.kill();
      heroTl.kill();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
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

      <section className="experience-hero">
        <div className="experience-content">
          <span className="journey-label">
            MY JOURNEY <span>✦</span>
          </span>

          <h1>
            My <span>Journey</span>
            <br />
            So <span>Far</span>
          </h1>

          <p>
            A journey of continuous learning, writing code,
            <br />
            building impactful projects and constantly
            <br />
            challenging myself to grow as a developer.
          </p>

          <div className="journey-line"></div>
        </div>

        <div className="journey-image">
          <img src={journey} alt="My Journey" />
        </div>
      </section>

      <section className="timeline-section">

        <div className="timeline-line"></div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <div className="timeline-icon">
              &lt;/&gt;
            </div>

            <div>
              <div className="timeline-year">
                2024 — Started Coding
              </div>

              <ul>
                <li>Started my coding journey</li>
                <li>Learned programming fundamentals</li>
                <li>Started learning C and C++</li>
              </ul>
            </div>
          </div>

          <div className="timeline-dot"></div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <div className="timeline-icon">
              ◎
            </div>

            <div>
              <div className="timeline-year">
                2025 — Web Development
              </div>

              <ul>
                <li>Learned HTML, CSS and JavaScript</li>
                <li>Started building websites</li>
                <li>Explored frontend development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <div className="timeline-icon">
              ⚛
            </div>

            <div>
              <div className="timeline-year">
                2025 — Frontend Development
              </div>

              <ul>
                <li>Learned React.js and Tailwind CSS</li>
                <li>Started using GSAP animations</li>
                <li>Built interactive frontend projects</li>
              </ul>
            </div>
          </div>

          <div className="timeline-dot"></div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <div className="timeline-icon">
              ▤
            </div>

            <div>
              <div className="timeline-year">
                2026 — Full Stack Development
              </div>

              <ul>
                <li>Started learning backend development</li>
                <li>Explored Node.js and MongoDB</li>
                <li>Started working on full-stack projects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <div className="timeline-icon">
              🚀
            </div>

            <div>
              <div className="timeline-year">
                2026 — Growing & Building
              </div>

              <ul>
                <li>Improving DSA and JavaScript skills</li>
                <li>Building advanced real-world projects</li>
                <li>Continuously improving development skills</li>
              </ul>
            </div>
          </div>

          <div className="timeline-dot"></div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <div className="timeline-icon">
              ◎
            </div>

            <div>
              <div className="timeline-year">
                Future — My Goal
              </div>

              <ul>
                <li>Become a highly skilled software developer</li>
                <li>Build impactful real-world products</li>
                <li>Keep learning and growing</li>
              </ul>
            </div>
          </div>
        </div>

      </section>




      <section className="learning-section">

  <div className="learning-heading">
    What I've <span>Learned</span>
  </div>

  <div className="learning-grid">

    <div className="learning-card">
      <div className="learning-icon">✚</div>
      <h3>Problem Solving</h3>
      <p>
        Breaking down complex problems and creating efficient solutions.
      </p>
    </div>

    <div className="learning-card">
      <div className="learning-icon">&lt;/&gt;</div>
      <h3>Web Development</h3>
      <p>
        Building responsive, dynamic and user-friendly web applications.
      </p>
    </div>

    <div className="learning-card">
      <div className="learning-icon">⌁</div>
      <h3>UI/UX Thinking</h3>
      <p>
        Designing with the user in mind to create clean and engaging experiences.
      </p>
    </div>

    <div className="learning-card">
      <div className="learning-icon">∞</div>
      <h3>Continuous Learning</h3>
      <p>
        Staying curious and constantly learning new technologies.
      </p>
    </div>

  </div>


  <div className="learning-heading milestone-heading">
    Milestones
  </div>

  <div className="milestone-grid">

    <div className="milestone-card">
      <div className="milestone-icon">▱</div>
      <strong>15+</strong>
      <span>Projects Built</span>
    </div>

    <div className="milestone-card">
      <div className="milestone-icon">&lt;/&gt;</div>
      <strong>20+</strong>
      <span>Technologies Learned</span>
    </div>

    <div className="milestone-card">
      <div className="milestone-icon">◷</div>
      <strong>1500+</strong>
      <span>Hours of Coding</span>
    </div>

    <div className="milestone-card">
      <div className="milestone-icon">▣</div>
      <strong>2+</strong>
      <span>Years of Learning</span>
    </div>

  </div>


  <div className="learning-heading current-heading">
    Currently <span>Learning</span>
  </div>

  <div className="current-learning">

    <div className="current-card">
      <div className="current-icon">⌘</div>
      <span>Data Structures & Algorithms</span>
    </div>

    <div className="current-card">
      <div className="current-icon">JS</div>
      <span>Advanced JavaScript</span>
    </div>

    <div className="current-card">
      <div className="current-icon">⚛</div>
      <span>React.js</span>
    </div>

    <div className="current-card">
      <div className="current-icon">▤</div>
      <span>Backend Development</span>
    </div>

    <div className="current-card">
      <div className="current-icon">▣</div>
      <span>System Design</span>
    </div>

  </div>

</section>



<section className="experience-cta">

  <div className="cta-glow"></div>

  <div className="cta-content">

    <h2>
      "Still Learning. <span>Still Building.</span>"
    </h2>

    <p>
      Every project is another step forward.
    </p>

    <Link to="/contact" className="cta-button">
      Let's Connect
      <span>→</span>
    </Link>

  </div>

</section>


<footer className="experience-footer">

  <div className="footer-main">

    <div className="footer-brand">

      <h2>
        SJ
        <span>Sambhav Jain</span>
      </h2>

      <p>
        Building tomorrow with code today.
      </p>

      <div className="footer-socials">

        <a href="#" aria-label="GitHub">
          <img src="/github.png" alt="GitHub" />
        </a>

        <a href="#" aria-label="LinkedIn">
          <img src="/linkdin.png" alt="LinkedIn" />
        </a>

        <a href="#" aria-label="Twitter">
          X
        </a>

        <a href="#" aria-label="Instagram">
          ◎
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer" aria-label="Email">
          ✉
        </a>

      </div>

    </div>


    <div className="footer-navigation">

      <h3>Navigation</h3>

      <div className="footer-links">

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
        </div>

        <div>
          <Link to="/projects">Projects</Link>
          <Link to="/experience" className="active-footer-link">
            Experience
          </Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

    </div>


    <div className="footer-connect">

      <h3>Let's Connect</h3>

      <p>
        Open to opportunities and
        <br />
        exciting collaborations.
      </p>

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer" className="footer-email">
        <span>✉</span>
        sambhavj343@gmail.com
      </a>
    </div>
  </div>


  <div className="footer-bottom">

    <span>
      © 2026 Sambhav Jain. All rights reserved.
    </span>

    <a href="#" className="back-top">
      Back to Top
      <span>↑</span>
    </a>

  </div>

</footer>

    </>
  );
}

export default Experience;