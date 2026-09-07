import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./skills.css";

function skills() {

useEffect(() => {

  const tl = gsap.timeline();

  tl.fromTo(
    ".Navbar .Name, .Navbar .Nav-links li",
    {
      y: -30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    }
  )

  .fromTo(
    ".skills-content > *",
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out"
    }
  )

  .fromTo(
    ".skills-visual",
    {
      x: 60,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }
  )

  .fromTo(
    ".skill-stat",
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out"
    }
  )

  .fromTo(
    ".skill-category",
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
    }
  )

  .fromTo(
    ".knowledge-box",
    {
      y: 40,
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
    ".connect-banner",
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
    ".footer",
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }
  );

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


      <section className="skills-section">

        <div className="skills-container">

          <div className="skills-content">

            <span className="skills-small-title">
              MY SKILLS
            </span>

            <h1 className="skills-heading">
              Technologies <span>I Work With</span>
            </h1>

            <p className="skills-description">
              A collection of technologies, tools and frameworks I use to
              build modern, responsive and user-friendly web applications.
            </p>

          </div>


          <div className="skills-visual">

            <div className="browser-window">

              <div className="browser-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-symbol">
                &lt; / &gt;
              </div>

            </div>

            <div className="floating-code">
              {"{}"}
            </div>

            <div className="floating-settings">
              ⚙
            </div>

          </div>

        </div>


        <div className="skills-stats">

          <div className="skill-stat">

            <div className="stat-icon">
              &lt;/&gt;
            </div>

            <div>
              <h2>2+</h2>
              <h3>Years of Learning</h3>
              <p>
                Consistent learning<br />
                and building
              </p>
            </div>

          </div>


          <div className="skill-stat">

            <div className="stat-icon">
              ▱
            </div>

            <div>
              <h2>15+</h2>
              <h3>Technologies</h3>
              <p>
                Frontend, Backend,<br />
                Databases & more
              </p>
            </div>

          </div>


          <div className="skill-stat">

            <div className="stat-icon">
              🚀
            </div>

            <div>
              <h2>20+</h2>
              <h3>Projects Built</h3>
              <p>
                Real-world projects<br />
                and experiments
              </p>
            </div>

          </div>


          <div className="skill-stat">

            <div className="stat-icon">
              ◎
            </div>

            <div>
              <h2>100%</h2>
              <h3>Passion</h3>
              <p>
                For clean code and<br />
                problem solving
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="skills-details">

  <div className="skills-detail-grid">

    <div className="skill-category">

      <div className="category-heading">
        <div className="category-icon">▣</div>
        <div>
          <h2>Frontend Development</h2>
          <p>Building responsive and interactive user interfaces</p>
        </div>
      </div>

      <div className="skill-list">

        <div className="skill-row">
          <span className="skill-logo html">5</span>
          <span className="skill-name">HTML</span>
          <div className="progress"><span style={{width: "95%"}}></span></div>
          <span className="skill-percent">95%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo css">3</span>
          <span className="skill-name">CSS</span>
          <div className="progress"><span style={{width: "90%"}}></span></div>
          <span className="skill-percent">90%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo js">JS</span>
          <span className="skill-name">JavaScript</span>
          <div className="progress"><span style={{width: "90%"}}></span></div>
          <span className="skill-percent">90%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo react">⚛</span>
          <span className="skill-name">React.js</span>
          <div className="progress"><span style={{width: "85%"}}></span></div>
          <span className="skill-percent">85%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo tailwind">≋</span>
          <span className="skill-name">Tailwind CSS</span>
          <div className="progress"><span style={{width: "85%"}}></span></div>
          <span className="skill-percent">85%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo gsap">GSAP</span>
          <span className="skill-name">GSAP</span>
          <div className="progress"><span style={{width: "75%"}}></span></div>
          <span className="skill-percent">75%</span>
        </div>

      </div>

    </div>


    <div className="skill-category">

      <div className="category-heading">
        <div className="category-icon">&lt;/&gt;</div>
        <div>
          <h2>Programming Languages</h2>
          <p>Languages I use to solve problems and build solutions</p>
        </div>
      </div>

      <div className="skill-list">

        <div className="skill-row">
          <span className="skill-logo c">C</span>
          <span className="skill-name">C</span>
          <div className="progress"><span style={{width: "80%"}}></span></div>
          <span className="skill-percent">80%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo cpp">C+</span>
          <span className="skill-name">C++</span>
          <div className="progress"><span style={{width: "75%"}}></span></div>
          <span className="skill-percent">75%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo js">JS</span>
          <span className="skill-name">JavaScript</span>
          <div className="progress"><span style={{width: "90%"}}></span></div>
          <span className="skill-percent">90%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo csharp">C#</span>
          <span className="skill-name">C#</span>
          <div className="progress"><span style={{width: "70%"}}></span></div>
          <span className="skill-percent">70%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo python">🐍</span>
          <span className="skill-name">Python (Basics)</span>
          <div className="progress"><span style={{width: "60%"}}></span></div>
          <span className="skill-percent">60%</span>
        </div>

      </div>

    </div>


    <div className="skill-category">

      <div className="category-heading">
        <div className="category-icon">⬡</div>
        <div>
          <h2>Backend Development</h2>
          <p>Building robust server-side applications</p>
        </div>
      </div>

      <div className="skill-list">

        <div className="skill-row">
          <span className="skill-logo node">N</span>
          <span className="skill-name">Node.js</span>
          <div className="progress"><span style={{width: "80%"}}></span></div>
          <span className="skill-percent">80%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo express">EX</span>
          <span className="skill-name">Express.js</span>
          <div className="progress"><span style={{width: "75%"}}></span></div>
          <span className="skill-percent">75%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo mongo">●</span>
          <span className="skill-name">MongoDB</span>
          <div className="progress"><span style={{width: "75%"}}></span></div>
          <span className="skill-percent">75%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo api">☁</span>
          <span className="skill-name">REST APIs</span>
          <div className="progress"><span style={{width: "70%"}}></span></div>
          <span className="skill-percent">70%</span>
        </div>

      </div>

    </div>


    <div className="skill-category">

      <div className="category-heading">
        <div className="category-icon">⚒</div>
        <div>
          <h2>Tools & Technologies</h2>
          <p>Tools and technologies that boost my productivity</p>
        </div>
      </div>

      <div className="skill-list">

        <div className="skill-row">
          <span className="skill-logo github">●</span>
          <span className="skill-name">Git & GitHub</span>
          <div className="progress"><span style={{width: "90%"}}></span></div>
          <span className="skill-percent">90%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo vscode">&gt;</span>
          <span className="skill-name">VS Code</span>
          <div className="progress"><span style={{width: "90%"}}></span></div>
          <span className="skill-percent">90%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo postman">●</span>
          <span className="skill-name">Postman</span>
          <div className="progress"><span style={{width: "80%"}}></span></div>
          <span className="skill-percent">80%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo figma">●</span>
          <span className="skill-name">Figma</span>
          <div className="progress"><span style={{width: "75%"}}></span></div>
          <span className="skill-percent">75%</span>
        </div>

        <div className="skill-row">
          <span className="skill-logo vite">V</span>
          <span className="skill-name">Vite</span>
          <div className="progress"><span style={{width: "80%"}}></span></div>
          <span className="skill-percent">80%</span>
        </div>

      </div>

    </div>

  </div>

</section>


<section className="knowledge-section">

  <div className="knowledge-box">

    <div className="knowledge-heading">
      <span>♧</span>
      <h2>Other Knowledge & Concepts</h2>
    </div>

    <div className="knowledge-list">

      <div className="knowledge-item">♮ Data Structures & Algorithms</div>
      <div className="knowledge-item">◇ Problem Solving</div>
      <div className="knowledge-item">▣ OOPs Concepts</div>
      <div className="knowledge-item">♧ Responsive Design</div>
      <div className="knowledge-item">▢ UI/UX Principles</div>
      <div className="knowledge-item">◉ Clean Code</div>
      <div className="knowledge-item">♢ Agile Basics</div>
      <div className="knowledge-item">▣ Database Design</div>
      <div className="knowledge-item">◯ JSON & APIs</div>
      <div className="knowledge-item">⚙ Authentication (JWT)</div>

    </div>

  </div>


  <div className="connect-banner">

    <div className="connect-banner-icon">
      🚀
    </div>
    <div className="connect-banner-content">
      <h2>Always learning something new.</h2>
      <p>
        Exploring new technologies and building better solutions every day.
      </p>
    </div>

    <Link to="/contact" className="connect-btn">
      Let's Connect
      <span>→</span>
    </Link>

  </div>

</section>


<footer className="footer">

  <div className="footer-left">

    <div className="footer-logo">
      SJ
    </div>

    <div>
      <h3>Sambhav Jain</h3>
      <p>© 2024 Sambhav Jain. All rights reserved.</p>
    </div>

  </div>


  <div className="footer-socials">

    <a href="https://github.com/sambhavj343-ai" target="_blank" rel="noreferrer" className="footer-social">●</a>
    <a href="https://www.linkedin.com/in/sambhav-jain-1b80b3347/" target="_blank" rel="noreferrer">in</a>
    <a href="#" className="footer-social">◎</a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer" className="footer-social">✉</a>

  </div>


  <a href="#" className="back-top">
    Back to Top
    <span>↑</span>
  </a>

</footer>


    </>
  );
}

export default skills;