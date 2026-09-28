"use client";

import { useState } from "react";

const caseStudies = [
  {
    number: "01",
    brand: "LumaSkin",
    title: "E-commerce Growth",
    category: "CONCEPT CASE STUDY",
    description:
      "A fictional skincare brand campaign concept focused on prospecting, creative testing and retargeting.",
    tags: ["E-COMMERCE", "PROSPECTING"],
    className: "case-large",
  },
  {
    number: "02",
    brand: "Urban Thread",
    title: "Fashion Campaign",
    category: "CONCEPT CASE STUDY",
    description:
      "A fictional fashion campaign concept built around Instagram-first creatives and audience segmentation.",
    tags: ["FASHION", "CREATIVE"],
    className: "case-small",
  },
  {
    number: "03",
    brand: "FitFuel",
    title: "Lead Generation",
    category: "CONCEPT CASE STUDY",
    description:
      "A fictional fitness funnel concept using lead campaigns, retargeting and different creative angles.",
    tags: ["LEADS", "FUNNEL"],
    className: "case-small",
  },
  {
    number: "04",
    brand: "Nova Café",
    title: "Local Awareness",
    category: "CONCEPT CASE STUDY",
    description:
      "A fictional local advertising concept designed around location-focused creatives and promotional offers.",
    tags: ["LOCAL", "AWARENESS"],
    className: "case-small",
  },
];

const services = [
  {
    number: "01",
    title: "Campaign Strategy",
    description:
      "Building a clear advertising structure around the business goal, audience and customer journey.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Creative Testing",
    description:
      "Testing different hooks, formats, messages and creative directions to discover what deserves more attention.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Audience Strategy",
    description:
      "Planning prospecting, custom audience and retargeting structures around different stages of the funnel.",
    icon: "◌",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Reviewing campaign signals and making structured adjustments instead of changing everything at once.",
    icon: "↗",
  },
];

const skills = [
  "Meta Ads",
  "Facebook Advertising",
  "Instagram Advertising",
  "Campaign Strategy",
  "Creative Testing",
  "Audience Research",
  "Retargeting",
  "Performance Analysis",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <a href="#home" className="logo">
          Shajir Sha<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="hire-button">
          Let&apos;s Talk
        </a>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-copy">
          <div className="availability">
            <span />
            AVAILABLE FOR SELECT PROJECTS
          </div>

          <p className="hero-kicker">META ADS SPECIALIST / PERFORMANCE MARKETING</p>

          <h1 className="hero-title">
  I turn<br />
  <span className="hero-emphasis">attention</span><br />
  into action.
</h1>

          <p className="hero-description">
            I help brands plan, launch and refine advertising campaigns across
            Facebook and Instagram with a focus on strategy, creative testing,
            audiences and continuous optimisation.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="primary-button">
              See My Work <span>↗</span>
            </a>

            <a href="#contact" className="outline-button">
              Start a Project
            </a>
          </div>

          <div className="hero-footnote">
            <span>01</span>
            <p>
              Strategy <i>→</i> Creative <i>→</i> Launch <i>→</i> Learn
            </p>
          </div>
        </div>

        {/* CAMPAIGN BOARD */}
        <div className="campaign-scene">
          <div className="paper-back" />

          <div className="campaign-board">
            <div className="board-header">
              <span>Shajir Sha / CAMPAIGN NOTES</span>
              <span>VOL. 01</span>
            </div>

            <div className="board-title">
              <small>CAMPAIGN WORKFLOW</small>
              <strong>FROM IDEA TO<br />OPTIMISATION.</strong>
            </div>

            <div className="funnel">
              <div className="funnel-step">
                <b>01</b>
                <span>ATTENTION</span>
                <i>Creative hooks</i>
              </div>

              <div className="arrow">↓</div>

              <div className="funnel-step lavender">
                <b>02</b>
                <span>INTEREST</span>
                <i>Audience + message</i>
              </div>

              <div className="arrow">↓</div>

              <div className="funnel-step">
                <b>03</b>
                <span>ACTION</span>
                <i>Offer + landing experience</i>
              </div>
            </div>

            <div className="mini-dashboard">
              <div>
                <small>CREATIVES</small>
                <strong>06</strong>
              </div>
              <div>
                <small>AUDIENCES</small>
                <strong>04</strong>
              </div>
              <div>
                <small>ANGLES</small>
                <strong>08</strong>
              </div>
            </div>

            <div className="board-note">
              <span>NOTE:</span>
              Test the idea, not just the button.
            </div>
          </div>

          <div className="floating-note">
            <small>MY RULE</small>
            <strong>Think first.<br />Test often.</strong>
          </div>

          <div className="star-doodle">✦</div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-strip">
        <div>
          <span>THE FOCUS</span>
          <p>
            Clear strategy. Better creative. Smarter campaign decisions.
          </p>
        </div>

        <div className="meta-stamp">
          <span>META</span>
          <span>ADS</span>
          <span>STRATEGY</span>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="section-heading">
          <div>
            <span className="section-number">01 / WHAT I DO</span>
            <h2>
              Advertising,
              <br />
              <em>with intention.</em>
            </h2>
          </div>

          <p>
            Every campaign starts with a reason. My approach is to connect the
            business objective, audience, message and creative before worrying
            about small optimisations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-icon">{service.icon}</span>
                <span>{service.number}</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-line" />
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section process-inner">
          <div className="process-heading">
            <span className="section-number">02 / MY APPROACH</span>
            <h2>
              A campaign is
              <br />
              <em>a system.</em>
            </h2>
          </div>

          <div className="process-list">
            <div>
              <span>01</span>
              <strong>Understand</strong>
              <p>Business goal, product, customer and offer.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Structure</strong>
              <p>Campaign architecture, audiences and funnel.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Create</strong>
              <p>Hooks, messages, formats and creative concepts.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Test</strong>
              <p>Compare meaningful creative and audience variations.</p>
            </div>

            <div>
              <span>05</span>
              <strong>Learn</strong>
              <p>Use campaign signals to guide the next iteration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section work-section">
        <div className="section-heading">
          <div>
            <span className="section-number">03 / SELECTED WORK</span>
            <h2>
              Campaign
              <br />
              <em>concepts.</em>
            </h2>
          </div>

          <div className="concept-label">
            <span>PORTFOLIO NOTE</span>
            <p>
  A collection of campaign concepts built around strategy,
  creative testing, audience thinking, and performance-focused advertising.
</p>
          </div>
        </div>

        <div className="case-grid">
          {caseStudies.map((project, index) => (
            <article
              className={`case-card ${project.className}`}
              key={project.number}
            >
              <div className="tape" />

              <div className="case-visual">
                <div className="ad-window">
                  <div className="ad-topbar">
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>META ADS / CAMPAIGN</span>
                  </div>

                  <div className="ad-content">
                    <small>{project.category}</small>

                    <h3>{project.brand}</h3>

                    <div className="ad-headline">
                      {index === 0 && "Your skin. Your routine."}
                      {index === 1 && "Made for your everyday."}
                      {index === 2 && "Build a stronger routine."}
                      {index === 3 && "Your next coffee stop."}
                    </div>

                    <div className="ad-bars">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="ad-button">LEARN MORE →</div>
                  </div>
                </div>
              </div>

              <div className="case-info">
                <div className="case-meta">
                  <span>{project.number}</span>
                  <small>{project.category}</small>
                </div>

                <h3>
                  {project.brand}
                  <br />
                  <em>{project.title}</em>
                </h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CREATIVE TESTING */}
      <section className="creative-section">
        <div className="section creative-inner">
          <div className="creative-copy">
            <span className="section-number">04 / CREATIVE TESTING</span>

            <h2>
              Don&apos;t just
              <br />
              <em>make an ad.</em>
            </h2>

            <p>
              Build different ways to communicate the same value. Test hooks,
              visuals, offers and messages to understand what connects with the
              audience.
            </p>

            <div className="creative-principles">
              <span>HOOK</span>
              <span>ANGLE</span>
              <span>FORMAT</span>
              <span>MESSAGE</span>
            </div>
          </div>

          <div className="creative-board">
            <div className="creative-card card-a">
              <small>HOOK A</small>
              <strong>Problem<br />first</strong>
            </div>

            <div className="creative-card card-b">
              <small>HOOK B</small>
              <strong>Benefit<br />first</strong>
            </div>

            <div className="creative-card card-c">
              <small>HOOK C</small>
              <strong>Story<br />first</strong>
            </div>

            <div className="creative-pencil">✎</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section">
        <div className="section-heading compact">
          <div>
            <span className="section-number">05 / TOOLKIT</span>
            <h2>
              What I
              <br />
              <em>work with.</em>
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="skill-symbol">
                {index % 3 === 0 ? "✦" : index % 3 === 1 ? "◎" : "↗"}
              </div>

              <h3>{skill}</h3>

              <div className="skill-line" />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="about-heading">
          <span className="section-number">06 / ABOUT Shajir Sha</span>
          <h2>
            Strategy on paper,
            <br />
            <em>performance in practice.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-note">
            <div className="note-mark">✦</div>

            <p>
              I&apos;m Shajir Sha, a Meta Ads Specialist interested in the space
              where advertising, creative thinking and digital products meet.
            </p>

            <p>
              I enjoy breaking down a campaign into smaller questions:
              Who are we talking to? What do they care about? What should we
              test next?
            </p>

            <strong>— Shajir Sha</strong>
          </div>

          <div className="about-copy">
            <p className="big-copy">
              I&apos;m interested in the <em>thinking behind the ad</em>, not
              just the ad itself.
            </p>

            <p>
              My workflow is built around research, structured campaign
              planning, creative experimentation and learning from the data
              available after launch.
            </p>

            <p>
              The goal is simple: create advertising that has a clear reason
              for existing and a clear next step for the audience.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-paper">
          <div className="contact-mail">✉</div>

          <span className="section-number">07 / LET&apos;S TALK</span>

          <h2>
            Have a brand?
            <br />
            <em>Let&apos;s grow it.</em>
          </h2>

          <p>
            Tell me about your business, your current challenge and what you
            want your advertising to achieve.
          </p>

          <a href="mailto:example@gmail.com" className="primary-button">
            Start a Conversation <span>↗</span>
          </a>

          <div className="sticky-note">
            <small>PS.</small>
            <strong>
              Good campaigns
              <br />
              start with good questions.
            </strong>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>
            Shajir Sha<span>.</span>
          </strong>
          <p>Meta Ads Specialist · 2026</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#home" className="back-top">
          ↑
        </a>
      </footer>
    </main>
  );
}
