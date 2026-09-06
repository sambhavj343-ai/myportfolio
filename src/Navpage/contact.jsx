import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [sending, setSending] = useState(false);

  const [status, setStatus] = useState(null);


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


    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-hero",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });


    contactTl
      .fromTo(
        ".contact-label",
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        }
      )
      .fromTo(
        ".contact-content h1",
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
        "-=0.3"
      )
      .fromTo(
        ".contact-content p",
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
        ".contact-buttons",
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        },
        "-=0.3"
      )
      .fromTo(
        ".contact-visual",
        {
          x: 100,
          opacity: 0,
          scale: 0.85
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


    gsap.to(".mail-box", {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });


    gsap.to(".orbit-1", {
      rotation: 360,
      duration: 18,
      repeat: -1,
      ease: "none"
    });


    gsap.to(".orbit-2", {
      rotation: -360,
      duration: 24,
      repeat: -1,
      ease: "none"
    });


    gsap.fromTo(
      ".contact-details",
      {
        y: 70,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-details",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );


    gsap.fromTo(
      ".contact-form input, .contact-form textarea",
      {
        x: -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );


    gsap.fromTo(
      ".info-card",
      {
        x: 40,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );


    gsap.fromTo(
  ".footer-connect h2",
  {
    y: 30,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-connect",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".social-card",
  {
    y: 35,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".social-cards",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".footer-cta",
  {
    y: 50,
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
      trigger: ".footer-cta",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".footer-main > div",
  {
    y: 35,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-main",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
);

gsap.fromTo(
  ".footer-bottom",
  {
    y: 20,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top 92%",
      toggleActions: "play none none none"
    }
  }
);


    return () => {
      tl.kill();
      contactTl.kill();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };

  }, []);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setSending(true);
    setStatus(null);

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();


      if (response.ok) {

        setStatus({
          type: "success-message",
          message: "Message sent successfully! 🚀"
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

      } else {

        setStatus({
          type: "error-message",
          message: data.message || "Something went wrong."
        });

      }

    } catch (error) {

      setStatus({
        type: "error-message",
        message: "Server error. Please try again."
      });

    } finally {

      setSending(false);

    }

  };


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

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      </nav>


      <section className="contact-hero">

        <div className="contact-content">

          <span className="contact-label">
            LET'S CONNECT <span>✦</span>
          </span>

          <h1>
            Let's Build
            <br />
            Something <span>Great</span>
          </h1>

          <p>
            Have a project in mind, or just want to say hi?
            <br />
            I'm always open to discussing new opportunities,
            <br />
            collaborations or interesting ideas.
          </p>

          <div className="contact-buttons">

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry"
  target="_blank"
  rel="noreferrer"
  className="send-btn"
>
  <span>✉</span>
  Send Message
  <b>→</b>
</a>

<a
  href="/resume.pdf"
  className="cv-btn"
  download="mine-resume.pdf"
>
  <span>↓</span>
  Download CV
</a>

          </div>

        </div>


        <div className="contact-visual">

          <div className="orbit orbit-1"></div>

          <div className="orbit orbit-2"></div>

          <div className="floating-icon icon-user">
            ●
          </div>

          <div className="floating-icon icon-chat">
            •••
          </div>

          <div className="floating-icon icon-at">
            @
          </div>

          <div className="floating-icon icon-star">
            ◆
          </div>

          <div className="mail-box">

            <div className="mail-top">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="mail-envelope">

              <div className="mail-left"></div>

              <div className="mail-right"></div>

            </div>

          </div>

        </div>

      </section>


      <section className="contact-details">


        <div className="contact-form">

          <h2>
            <span>✈</span>
            Send Me a Message
          </h2>


          <form onSubmit={handleSubmit}>

            <label>
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            <label>
              Your Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            <label>
              Subject
            </label>

            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />


            <label>
              Message
            </label>

            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>


            <button
              type="submit"
              className="message-submit"
              disabled={sending}
            >

              <span>✈</span>

              {sending
                ? "Sending..."
                : "Send Message"
              }

            </button>


            {status && (
              <p className={status.type}>
                {status.message}
              </p>
            )}

          </form>

        </div>


        <div className="contact-info">

          <h2>
            Get In Touch
          </h2>

          <p className="contact-info-subtitle">
            Feel free to reach out to me through any of
            <br />
            the following channels.
          </p>


          <div className="info-card">

            <div className="info-icon">
              ✉
            </div>

            <div className="info-text">

              <span>
                Email
              </span>

              <p>
                sambhavj343@gmail.com
              </p>

            </div>

            <span className="info-arrow">
              ›
            </span>

          </div>


          <div className="info-card">

            <div className="info-icon">
              ♡
            </div>

            <div className="info-text">

              <span>
                Phone
              </span>

              <p>
                +91 9520116438
              </p>

            </div>

            <span className="info-arrow">
              ›
            </span>

          </div>


          <div className="info-card">

            <div className="info-icon">
              📍
            </div>

            <div className="info-text">

              <span>
                Location
              </span>

              <p>
                India
              </p>

            </div>

            <span className="info-arrow">
              ›
            </span>

          </div>


          <div className="info-card availability-card">

            <div className="info-icon">
              ◷
            </div>

            <div className="info-text">

              <span>
                Availability
              </span>

              <p>
                Open to Opportunities
              </p>

            </div>

            <span className="availability-dot"></span>

          </div>

        </div>

      </section>






      <section className="contact-footer">

  <div className="footer-connect">
    <h2>
      Let’s <span>Connect</span>
    </h2>

    <div className="connect-line"></div>

    <div className="social-cards">

      <a href="https://www.linkedin.com/in/sambhav-jain-1b80b3347/" target="_blank" rel="noreferrer" className="social-card">
        <div className="social-icon">in</div>
        <div>
          <h4>LinkedIn</h4>
          <p>@sambhav-jain</p>
        </div>
        <span className="arrow">↗</span>
      </a>

      <a href="https://github.com/sambhavj343-ai" target="_blank" rel="noreferrer" className="social-card">
        <div className="social-icon">◉</div>
        <div>
          <h4>GitHub</h4>
          <p>@sambhav-jain</p>
        </div>
        <span className="arrow">↗</span>
      </a>

      <a href="https://vercel.com/sambhavj343-7883" className="social-card">
        <div className="social-icon">♥</div>
        <div>
          <h4>Vercel</h4>
          <p>Sambhav jain</p>
        </div>
        <span className="arrow">↗</span>
      </a>

      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card">
        <div className="social-icon">◎</div>
        <div>
          <h4>Instagram</h4>
          <p>@sambhav.jain</p>
        </div>
        <span className="arrow">↗</span>
      </a>

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" className="social-card"   target="_blank"
  rel="noreferrer">
        <div className="social-icon">✉</div>
        <div>
          <h4>Email</h4>
          <p>Let’s talk</p>
        </div>
        <span className="arrow">↗</span>
      </a>

    </div>
  </div>


  <div className="footer-cta">
    <div className="cta-icon">
      <span>•••</span>
    </div>

    <div className="cta-content">
      <h3>
        I’m Just One <span>Message</span> Away
      </h3>

      <p>
        Whether you have a question, a project idea, or just want to
        connect — I’ll get back to you as soon as possible.
      </p>
    </div>

    <a href="/contact" className="cta-button">
      Let’s Work Together
      <span>→</span>
    </a>
  </div>


  <div className="footer-main">

    <div className="footer-about">
      <h2>
        <span>SJ</span> Sambhav Jain
      </h2>

      <p>
        Building digital solutions and bringing ideas to life through code.
      </p>

      <div className="footer-socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">◉</a>
        <a href="#">♥</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">◎</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sambhavj343@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noreferrer">✉</a>
      </div>
    </div>


    <div className="footer-links">
      <h4>Navigation</h4>

      <div className="footer-nav">
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
        </div>

        <div>
          <a href="/projects">Projects</a>
          <a href="/experience">Experience</a>
          <a href="/contact" className="active">Contact</a>
        </div>
      </div>
    </div>


    <div className="footer-connect-info">
      <h4>Let’s Connect</h4>

      <p>Open to opportunities and</p>
      <p>exciting collaborations.</p>

      <a href="mailto:sambhavj343@gmail.com" target="_blank" rel="noreferrer">
        ✉ sambhavj343@gmail.com
      </a>
    </div>

  </div>


  <div className="footer-bottom">
    <p>
      © 2026 Sambhav Jain. All rights reserved.
    </p>

    <a href="#">
      Back to Top <span>↑</span>
    </a>
  </div>

</section>

    </>
  );
}

export default Contact;