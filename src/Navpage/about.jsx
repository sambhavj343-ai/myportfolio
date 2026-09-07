import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import main from "../assets/main.png";
import "./about.css";

function About() {

useEffect(() => {

  const tl = gsap.timeline();

  tl.fromTo(
    ".about-content > *",
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
    ".about-image-card",
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
    ".what-header, .what-card",
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
    ".education-column, .goal-column",
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.2,
      ease: "power3.out"
    }
  )

  .fromTo(
    ".journey-header, .journey-item, .journey-line",
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
    ".interest-header, .interest-card",
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
    ".contact-banner",
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
  );

}, []);

  return (
    <>

      <nav className="Navbar">

        <div className="Name">
          Sambhav jain
        </div>

        <ul className="Nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
      </nav>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">

            <span className="about-small-title">
              ABOUT ME
            </span>

            <h1 className="about-heading">
              <span>Hello, I'm  Sambhav Jain</span>
            </h1>

            <h3 className="about-subtitle">
              Web Developer | Problem Solver | Lifelong Learner
            </h3>

            <p className="about-text">
              I'm a passionate Web Developer who loves turning ideas into
              real-world, functional and beautiful websites. I enjoy solving
              problems through code and building seamless user experiences.
            </p>

            <p className="about-text">
              Currently, I'm a BCA student focused on full-stack web development
              and constantly improving my skills to work in a top product-based
              company.
            </p>

            <div className="about-info">
              <div className="info-card">
                <div className="info-icon">
                  ⌖
                </div>

                <div>
                  <small>From</small>
                  <strong>India</strong>
                </div>
              </div>

              <div className="info-card">

                <div className="info-icon">
                  ▣
                </div>

                <div>
                  <small>Age</small>
                  <strong>19</strong>
                </div>

              </div>

              <div className="info-card">
                <div className="info-icon">
                  ⌂
                </div>

                <div>
                  <small>Education</small>
                  <strong>BCA Student</strong>
                </div>

              </div>

              <div className="info-card goal-card">

                <div className="info-icon">
                  ◎
                </div>

                <div>
                  <small>Goal</small>

                  <strong>
                    Work in a top<br />
                    product-based<br />
                    company
                  </strong>
              </div>
            </div>
        </div>
     </div>

          <div className="about-right">
            <div className="about-image-card">
              <img src={main} alt="Sambhav" className="about-image"/>
              <div className="about-quote">
                <span className="quote-mark">
                  “
                </span>

                <p>
                  Code is not just what I write,
                  <br />
                  it's how I solve problems and
                  <br />
                  build my dreams.
                </p>

                <span className="quote-mark quote-end">
                  ”
                </span>
              </div>
            </div>
          </div>
         </div>
         </section>


<section className="what-section">

  <div className="what-header">
    <span className="what-small-title">WHAT I DO</span>

    <h2 className="what-title">
      Turning Ideas Into Reality
    </h2>
  </div>


  <div className="what-cards">
    <div className="what-card">
      <div className="what-icon">
        ◉
      </div>

      <h3>Web Development</h3>

      <p>
        I build fast, responsive and modern websites with clean
        code and great UI/UX.
      </p>
    </div>
    <div className="what-card">
      <div className="what-icon">
        &lt;/&gt;
      </div>
      <h3>Problem Solving</h3>
      <p>
        I love solving DSA problems and building efficient &
        optimized solutions.
      </p>
    </div>


    <div className="what-card">
      <div className="what-icon">
        ✥
      </div>
      <h3>UI Focused</h3>
      <p>
        I focus on creating beautiful interfaces that provide
        the best user experience.
      </p>
    </div>


    <div className="what-card">
      <div className="what-icon">
        ♧
      </div>
      <h3>Continuous Learning</h3>
      <p>
        I'm always learning new technologies and improving
        my skills every day.
      </p>
    </div>
  </div>
</section>


<section className="education-section">

  <div className="education-container">


    <div className="education-column">

      <span className="education-small-title">
        EDUCATION
      </span>

      <h2 className="education-heading">
        My Academic Background
      </h2>

      <div className="education-card">

        <div className="education-icon">
          🎓
        </div>

        <div className="education-content">

          <h3>
            Bachelor of Computer Applications (BCA)
          </h3>

          <h4>
            IAMR Group of Institutions, Ghaziabad
          </h4>

          <div className="education-meta">
            <span>▣ &nbsp; 2022 – 2025 (Expected)</span>
            <span>◉ &nbsp; CGPA: 7.0</span>
          </div>

          <p>
            I'm currently pursuing my BCA degree where I'm learning
            software development, data structures, databases,
            computer networks and many more.
          </p>

        </div>

      </div>

    </div>


    <div className="goal-column">

      <span className="education-small-title">
        MY GOAL
      </span>

      <h2 className="education-heading">
        Where I'm Heading
      </h2>

      <div className="goal-box">

        <div className="goal-icon">
          ◎
        </div>

        <p>
          To become a skilled <span>Full Stack Developer</span>
          <br />
          and work in a top product based company
          <br />
          where I can solve real world problems and
          <br />
          create impactful products.
        </p>

      </div>

    </div>

  </div>

</section>




<section className="journey-section">

  <div className="journey-header">
    <span className="journey-small-title">
      MY JOURNEY
    </span>
    <h2>
      Learning & Growth Path
    </h2>
  </div>


  <div className="journey-wrapper">
    <div className="journey-line"></div>
    <div className="journey-item">
      <div className="journey-icon">
        &lt;/&gt;
      </div>
      <h4>2024</h4>
      <h3>Started Coding</h3>
      <p>
        Started my coding journey with C and C++,
        building a strong foundation in programming
        and problem solving.
      </p>
    </div>


  

    <div className="journey-item">
      <div className="journey-icon">
        ▣
      </div>
      <h4>2024</h4>
      <h3>Web Development</h3>
      <p>
        Learned HTML, CSS and JavaScript and started
        building responsive websites.
      </p>

    </div>


    <div className="journey-item">
      <div className="journey-icon">
        ⚛
      </div>
      <h4>2025</h4>
      <h3>Frontend Developer</h3>
      <p>
        Worked with React.js, Tailwind CSS and GSAP
        to build modern and interactive web applications.
      </p>
    </div>


    <div className="journey-item">
      <div className="journey-icon">
        JS
      </div>
      <h4>2025–26</h4>
      <h3>Backend & DB</h3>
      <p>
        Exploring Node.js, Express.js and MongoDB
        to move towards full-stack development.
      </p>
    </div>


    <div className="journey-item">
      <div className="journey-icon"> 🚀</div>
      <h4>Future</h4>
      <h3>Achieving Goals</h3>
      <p>
        Continuing the journey, improving my skills
        and working towards becoming a skilled
        full-stack developer.
      </p>
    </div>
  </div>
</section>


<section className="interest-section">

  <div className="interest-header">
    <span>BEYOND CODE</span>
    <h2>Interests & Hobbies</h2>
  </div>

  <div className="interest-cards">

    <div className="interest-card">
      <div className="interest-icon">🏋</div>
      <div>
        <h3>Fitness</h3>
        <p>I love working out and staying fit.</p>
      </div>
    </div>

    <div className="interest-card">
      <div className="interest-icon">🎮</div>
      <div>
        <h3>Gaming</h3>
        <p>I enjoy playing games in my free time.</p>
      </div>
    </div>

    <div className="interest-card">
      <div className="interest-icon">📖</div>
      <div>
        <h3>Reading</h3>
        <p>I love reading tech blogs and self-growth books.</p>
      </div>
    </div>

    <div className="interest-card">
      <div className="interest-icon">✈</div>
      <div>
        <h3>Traveling</h3>
        <p>Exploring new places and cultures.</p>
      </div>
    </div>

    <div className="interest-card">
      <div className="interest-icon">📷</div>
      <div>
        <h3>Photography</h3>
        <p>Capturing moments and creative shots.</p>
      </div>
    </div>

  </div>

  <div className="contact-banner">

    <div className="contact-icon">
      ✉
    </div>

    <div className="contact-content">
      <h2>Let's Work Together!</h2>
      <p>Have a project in mind or just want to say hi?</p>
      <p>Feel free to reach out to me.</p>
    </div>

    <Link to="/contact" className="contact-btn">
      Contact Me
      <span>→</span>
    </Link>

  </div>

</section>

    </>
  );
}

export default About;