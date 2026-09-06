import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import main from "./assets/main.png";
import git from "./assets/github.png";
import link from "./assets/linkdin.png";
import insta from "./assets/instagram.png";
import mail from "./assets/gmail.png";
import c1 from "./assets/c++.png";
import cshap from "./assets/csharp.png";
import javascript from "./assets/JS.png";
import react from "./assets/react.png";
import tailwind from "./assets/TC.png";
import Java from "./assets/java.png";
import python from "./assets/python.png";

function Home() {

  useEffect(() => {

      gsap.registerPlugin(ScrollTrigger);

  const buttons = document.querySelectorAll(".hero-btn, .hero-btns");
  const socialButtons = document.querySelectorAll(
    ".git, .link, .insta, .gmail"
  );
  const abButtons = document.querySelectorAll(".about-btn");
  const skillButtons = document.querySelectorAll(".skills-btn");
  const projectButtons = document.querySelectorAll(".projects-btn");


  const tl = gsap.timeline();

  tl.fromTo(".Name, .Nav-links li",
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }
  )
  .fromTo(
    ".hero-title, .hero-name, .hero-id, .hero-ids, .hero-btn, .hero-btns, .home, .ct, .connect",
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    }
  );


ScrollTrigger.create({
  trigger: ".abh",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo(".abh",
      {
        x: -500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );
  }
});


ScrollTrigger.create({
  trigger: ".skill",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo(".skill",
      {
        x: 500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );
  }
});


ScrollTrigger.create({
  trigger: ".projects",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo(".projects",
      {
        x: -500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out"
      }
    );
  }
});


ScrollTrigger.create({
  trigger: ".experience-section",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo(".experience-section",
      {
        x: 500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out"
      }
    );
  }
});

ScrollTrigger.create({
  trigger: ".what-i-do",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo(".what-i-do",
      {
        x: -500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out"
      }
    );
  }
});

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.08,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });


  socialButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.08,
        y: -2,
        rotate: 360,
        duration: 1,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  });


  abButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.08,
        y: -5,
        duration: 0.3,
        ease: "power3.out",
      })
    });
        button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  })


    skillButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.08,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      })
    });
        button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  })

      projectButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.08,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      })
    });
        button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  })


document.querySelectorAll(".what-card").forEach((card) => {

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -8,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});



  return () => {
    buttons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    });

    socialButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    });

    abButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    })

    skillButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    })

    projectButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    })

  };
}, []);

  return (
    <>
      <nav className="Navbar">
        <div className="Name">Sambhav jain</div>

        <ul className="Nav-links">
          <li>Home</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
      </nav>

      <section className="hero">
        <h3 className="hero-title">Hi, I'm</h3>

        <h1 className="hero-name">Sambhav Jain</h1>

        <h3 className="hero-id">Web Developer</h3>

        <p className="hero-ids">
          I build a responsive and user-friendly websites that bring ideas to life.
        </p>

        <Link to="/projects" className="hero-btn">
          View my Work
        </Link>

        <Link to="/contact" className="hero-btns">
          Hire Me
        </Link>

        <img src={main} alt="home" className="home"/>

        <p className="ct">connect with me</p>

<div className="connect">

  <a href="https://github.com/sambhavj343-ai" target="_blank" rel="noreferrer">
    <img src={git} alt="GitHub" className="git" />
  </a>

  <a href="https://www.linkedin.com/in/sambhav-jain-1b80b3347/" target="_blank" rel="noreferrer">
    <img src={link} alt="LinkedIn" className="link" />
  </a>

  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
    <img src={insta} alt="Instagram" className="insta" />
  </a>

  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer">
    <img src={mail} alt="Email" className="gmail" />
  </a>

</div>


      </section>

<section className="abh">

  <div className="about-text">
    <span>ABOUT ME</span>

    <h2>Get to know me</h2>

    <p>
      I'm a passionate Web Developer who loves turning ideas
      into real-world products. I enjoy writing clean code,
      designing beautiful interfaces and solving problems
      through code.
    </p>

    <Link to="/about" className="about-btn">
      More About Me →
    </Link>
  </div>


  <div className="about-boxes">

    <div className="about-box">
      <h3>📍 From</h3>
      <p>India</p>
    </div>

    <div className="about-box">
      <h3>🎓 Education</h3>
      <p>BCA Student</p>
    </div>

    <div className="about-box">
      <h3>💼 Experience</h3>
      <p>Fresher</p>
    </div>

    <div className="about-box">
      <h3>🎯 Goal</h3>
      <p>To work in a top product based company</p>
    </div>

  </div>
</section>


<section className="skill">

  <div className="skills-header">
    <div>
      <span>MY SKILLS</span>
      <h2>My Technical Toolkit</h2>
    </div>

    <Link to="/skills" className="skills-btn">
      View All Skills
    </Link>
  </div>

  <div className="skills-list">

    <div className="skills">
      <img src={c1} alt="C++" />
      <p>C++</p>
    </div>

    <div className="skills">
      <img src={cshap} alt="C#" />
      <p>C#</p>
    </div>

    <div className="skills">
      <img src={javascript} alt="JavaScript" />
      <p>JavaScript</p>
    </div>

    <div className="skills">
      <img src={react} alt="React" />
      <p>React</p>
    </div>

    <div className="skills">
      <img src={tailwind} alt="Tailwind CSS" />
      <p>Tailwind CSS</p>
    </div>

    <div className="skills">
      <img src={Java} alt="Java" />
      <p>Java</p>
    </div>

    <div className="skills">
      <img src={python} alt="Python" />
      <p>Python</p>
    </div>
  </div>
</section>



<section className="projects">

  <div className="projects-header">
    <div>
      <span>MY PROJECTS</span>
      <h2>Featured Projects</h2>
    </div>

    <Link to="/projects" className="projects-btn">
      View All Projects
    </Link>
  </div>


  <div className="project-list">
    <div className="project-card">

      <h3>AirDeals</h3>

      <p>
        Flight booking website with modern UI/UX.
      </p>

      <div className="tech">
        <span>React</span>
        <span>Tailwind CSS</span>
        <span>JavaScript</span>
      </div>

      <div className="project-links">
        <a href="#" className="live">↗</a>
        <a href="#" className="github">●</a>
      </div>
    </div>

    <div className="project-card">


      <h3>TalentIQ</h3>

      <p>
        AI Powered Resume Screening Platform.
      </p>

      <div className="tech">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>

      <div className="project-links">
        <a href="#" className="live">↗</a>
        <a href="#" className="github">●</a>
      </div>

    </div>

    <div className="project-card">

    /*here*/

      <h3>Blinkit Clone</h3>

      <p>
        Grocery e-commerce website UI clone.
      </p>

      <div className="tech">
        <span>React</span>
        <span>Tailwind CSS</span>
        <span>JavaScript</span>
      </div>

      <div className="project-links">
        <a href="#" className="live">↗</a>
        <a href="#" className="github">●</a>
      </div>

    </div>

  </div>

</section>



<section className="experience-section">

  <div className="experience-header">
    <div>
      <span>EXPERIENCE</span>
      <h2>My Journey So Far</h2>
    </div>

    <div className="arrow">⌃</div>
  </div>


  <div className="timeline">

    <div className="timeline-line"></div>

    <div className="journey">

      <div className="journey-item">
        <div className="dot"></div>

        <h4>2024</h4>
        <h3>Started Coding</h3>
        <p>
          Began my coding journey
          with C language.
        </p>
      </div>


      <div className="journey-item">
        <div className="dot"></div>

        <h4>2025</h4>
        <h3>Web Development</h3>
        <p>
          Learned HTML, CSS,
          JavaScript and built
          many projects.
        </p>
      </div>


      <div className="journey-item">
        <div className="dot"></div>

        <h4>2026</h4>
        <h3>Frontend Developer</h3>
        <p>
          Worked on React, Tailwind CSS
          and created responsive
          web apps.
        </p>
      </div>


      <div className="journey-item">
        <div className="dot"></div>

        <h4>Future</h4>
        <h3>My Goal</h3>
        <p>
          To work in a top product
          based company and build
          impactful products.
        </p>
      </div>

    </div>

  </div>


  <div className="stats">

    <div className="stat">
      <div className="stat-icon">〈/〉</div>

      <div>
        <h3>5+</h3>
        <p>Projects Completed</p>
      </div>
    </div>


    <div className="stat">
      <div className="stat-icon">☕</div>

      <div>
        <h3>2+</h3>
        <p>Years of Learning</p>
      </div>
    </div>


    <div className="stat">
      <div className="stat-icon">🎯</div>

      <div>
        <h3>1000+</h3>
        <p>Hours of Coding</p>
      </div>
    </div>


    <div className="stat">
      <div className="stat-icon">♙</div>

      <div>
        <h3>100%</h3>
        <p>Dedication</p>
      </div>
    </div>

  </div>

</section>




  <section className="what-i-do">

      
      <div className="what-header">

        <div className="what-title">
          <span>WHAT I DO</span>

          <h2>
            Building Digital Experiences
            <br />
            From <b>Frontend</b> to <b>Backend.</b>
          </h2>

          <p className="what-small">
            ✦ I design, build and code interactive and scalable web
            <br />
            &nbsp;&nbsp;&nbsp;solutions end to end.
          </p>
        </div>


        <div className="what-description">
          <p>
            I work with modern technologies to create
            <br />
            responsive, performance-optimized and
            <br />
            user-friendly web applications.
          </p>
        </div>


        <Link to="/skills" className="what-view-btn">
          View All <span>→</span>
        </Link>

      </div>


      
      <div className="what-cards">

       
        <div className="what-card">

          <div className="card-top">
            <span className="card-number">01</span>
            <span className="card-arrow">↗</span>
          </div>

          <div className="card-icon">〈/〉</div>

          <h3>Frontend Development</h3>

          <p>
            I build responsive, interactive and beautiful user
            interfaces using modern frontend technologies.
          </p>

          <div className="card-line"></div>

          <div className="tech-tags">
            <span>⚛ React.js</span>
            <span>JS JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>〰 Tailwind CSS</span>
            <span>⚡ GSAP</span>
          </div>

        </div>


        <div className="what-card">

          <div className="card-top">
            <span className="card-number">02</span>
            <span className="card-arrow">↗</span>
          </div>

          <div className="card-icon">▤⚙</div>

          <h3>Backend Development</h3>

          <p>
            I build secure, scalable and efficient server-side
            applications and RESTful APIs.
          </p>

          <div className="card-line"></div>

          <div className="tech-tags">
            <span>⬡ Node.js</span>
            <span>EX Express.js</span>
            <span>☁ REST APIs</span>
            <span>✦ JWT</span>
            <span>♙ Authentication</span>
            <span>▣ MVC</span>
          </div>

        </div>


      
        <div className="what-card">

          <div className="card-top">
            <span className="card-number">03</span>
            <span className="card-arrow">↗</span>
          </div>

          <div className="card-icon">〈/〉</div>

          <h3>Programming & DSA</h3>

          <p>
            I solve problems and build strong logic using different
            programming languages and DSA.
          </p>

          <div className="card-line"></div>

          <div className="tech-tags">
            <span>🔵 C</span>
            <span>🔵 C++</span>
            <span>☕ Java</span>
            <span>🐍 Python</span>
            <span>⬡ Data Structures</span>
            <span>♙ Algorithms</span>
          </div>

        </div>


        <div className="what-card">

          <div className="card-top">
            <span className="card-number">04</span>
            <span className="card-arrow">↗</span>
          </div>

          <div className="card-icon">◉</div>

          <h3>Full Stack & Database</h3>

          <p>
            I connect frontend with backend and work with databases
            to build complete full stack applications.
          </p>

          <div className="card-line"></div>

          <div className="tech-tags">
            <span>🍃 MongoDB</span>
            <span>▤ Database</span>
            <span>〈/〉 CRUD</span>
            <span>🔗 API Integration</span>
            <span>🚀 Full Stack Projects</span>
          </div>

        </div>

      </div>

    </section>


<section className="contact-section">

      <div className="contact-left">

        <span className="contact-label">LET'S CONNECT</span>

        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind or just want to say hi?
          <br />
          Feel free to reach out to me.
        </p>

<div className="contact-info">

  <div>
    <span>✉</span>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer">
      sambhavj343@gmail.com
    </a>
  </div>

  <div>
    <span>⌕</span>
    <a href="tel:+919876543210">
      +91 98765 43210
    </a>
  </div>

  <div>
    <span>⌖</span>
    <a href="https://www.linkedin.com/in/sambhav-jain-1b80b3347/" target="_blank" rel="noreferrer">
      India
    </a>
  </div>

</div>
        <div className="contact-socials">
          <a href="https://github.com/sambhavj343-ai" target="_blank" rel="noreferrer">◉</a>
          <a href="https://www.linkedin.com/in/sambhav-jain-1b80b3347/" target="_blank" rel="noreferrer">in</a>
          <a href="#">◎</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer">✉</a>
        </div>

      </div>


      <div className="contact-right">

        <form>

          <div className="form-row">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

          </div>

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">
            Send Message ↗
          </button>

        </form>

      </div>

      <div className="contact-lines"></div>

    </section>

    </>
  );
}
export default Home;

/*<img src={blinkit} alt="Blinkit Clone" className="project-image"/>*/