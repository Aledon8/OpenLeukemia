import { useEffect, useState } from "react";

import logoMark from "../../assets/openleukemia-mark.png";

type LandingPageProps = {
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

type ModalType = "signup" | "login" | null;

const projectHighlights = [
  "Patient-owned medical data",
  "Separate, revocable consent",
  "AI explanations without AI diagnosis",
  "Privacy-preserving model improvement",
];

const workflowSteps = [
  {
    title: "Upload",
    description: "Bring lab results, notes, and documents into one private workspace.",
  },
  {
    title: "Understand",
    description: "Track changes over time with validated models and clear explanations.",
  },
  {
    title: "Stay in control",
    description: "Choose what is stored, shared, or used for research at every step.",
  },
];

const analysisActivity = [1, 0, 2, 3, 1, 0, 4, 2, 0, 1, 3, 4, 2, 1, 0, 2, 4, 3, 1, 2, 0, 1, 3, 2, 4, 1, 0, 2];

export function LandingPage({ theme, onThemeToggle }: LandingPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(
    () => window.localStorage.getItem("openleukemia-cookie-consent") === "accepted",
  );

  useEffect(() => {
    document.body.dataset.modalOpen = activeModal === null ? "false" : "true";
  }, [activeModal]);

  function openModal(modalType: Exclude<ModalType, null>) {
    setActiveModal(modalType);
    setIsMobileMenuOpen(false);
  }

  function closeModal() {
    setActiveModal(null);
  }

  function acceptCookies() {
    window.localStorage.setItem("openleukemia-cookie-consent", "accepted");
    setHasAcceptedCookies(true);
  }

  return (
    <>
      <main className="landing-page">
        <header className="topbar">
          <a className="brand" href="/" aria-label="OpenLeukemia home">
            <img alt="" className="brand-mark-image" height="44" src={logoMark} width="44" />
            <span>OpenLeukemia</span>
          </a>

          <button
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            aria-label="Primary navigation"
            className={isMobileMenuOpen ? "topbar-actions is-open" : "topbar-actions"}
          >
            <a href="/docs">Documentation</a>
            <a href="https://github.com/Aledon8/OpenLeukemia" rel="noreferrer" target="_blank">
              GitHub
            </a>
            <button className="theme-toggle" onClick={onThemeToggle} type="button">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button className="secondary-action" onClick={() => openModal("login")} type="button">
              Log in
            </button>
            <button className="primary-action" onClick={() => openModal("signup")} type="button">
              Sign up
            </button>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="section-kicker">Patient-centered leukemia companion</p>
            <h1>OpenLeukemia</h1>
            <p className="hero-description">
              A privacy-first platform for organizing leukemia data, following meaningful changes,
              and turning complex medical information into language people can actually use.
            </p>

            <div className="hero-actions">
              <button className="primary-action" onClick={() => openModal("signup")} type="button">
                Create account
              </button>
              <a className="secondary-action" href="/docs">
                View documentation
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="signal-orbit">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit orbit-three" />
              <span className="signal-core">
                <strong>MRD 0</strong>
                <small>trend watch</small>
              </span>
              <span className="signal-chip chip-platelets">Platelets 45 to 28</span>
              <span className="signal-chip chip-crp">CRP 6 to 34</span>
              <span className="signal-chip chip-temp">37.7 C</span>
            </div>
          </div>
        </section>

        <section className="highlight-strip" aria-label="Project principles">
          {projectHighlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </section>

        <section className="content-section" id="mission">
          <div>
            <p className="section-kicker">Why it exists</p>
            <h2>Built around the person, not the illness.</h2>
          </div>
          <p>
            OpenLeukemia helps patients bring together medical records, laboratory trends, and
            questions for their doctor while keeping control over their own information. The system
            is designed to assist understanding, not replace medical care.
          </p>
        </section>

        <section className="activity-section" aria-label="Analysis activity">
          <div>
            <p className="section-kicker">Analysis rhythm</p>
            <h2>Small records become a visible history.</h2>
          </div>
          <div className="activity-panel">
            <div className="activity-grid">
              {analysisActivity.map((activityLevel, index) => (
                <span className={`activity-cell level-${activityLevel}`} key={index} />
              ))}
            </div>
            <p>28 recent days of lab activity</p>
          </div>
        </section>

        <section className="workflow-grid" aria-label="How OpenLeukemia works">
          {workflowSteps.map((step) => (
            <article key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </section>

        <section className="auth-section" aria-label="Account actions">
          <article>
            <p className="section-kicker">Get started</p>
            <h2>Create an account</h2>
            <p>
              Start with a private profile and choose each consent separately. Registration never
              means giving away everything.
            </p>
            <button className="primary-action" onClick={() => openModal("signup")} type="button">
              Sign up
            </button>
          </article>

          <article>
            <p className="section-kicker">Returning patient</p>
            <h2>Log in</h2>
            <p>Access your timeline, documents, and explanations from one secure workspace.</p>
            <button className="secondary-action" onClick={() => openModal("login")} type="button">
              Log in
            </button>
          </article>
        </section>

        <footer className="site-footer">
          <div>
            <strong>OpenLeukemia</strong>
            <p>Patient-centered tools for understanding leukemia data.</p>
          </div>
          <div className="footer-links">
            <a href="/docs">Documentation</a>
            <a href="https://github.com/Aledon8/OpenLeukemia" rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a href="#mission">Mission</a>
          </div>
        </footer>
      </main>

      {activeModal !== null && (
        <div className="modal-backdrop" role="presentation">
          <section aria-modal="true" className="modal-panel" role="dialog">
            <button aria-label="Close dialog" className="modal-close" onClick={closeModal} type="button">
              x
            </button>

            {activeModal === "signup" && (
              <>
                <p className="section-kicker">Create account</p>
                <h2>Start privately</h2>
                <p>
                  Registration creates an account only. Every data permission remains separate and
                  optional.
                </p>
                <form className="modal-form">
                  <label>
                    Email
                    <input placeholder="you@example.com" type="email" />
                  </label>
                  <label>
                    Password
                    <input placeholder="At least 8 characters" type="password" />
                  </label>
                  <button className="primary-action" type="button">
                    Continue
                  </button>
                </form>
                <p className="modal-switch">
                  Already have an account?{" "}
                  <button onClick={() => setActiveModal("login")} type="button">
                    Log in
                  </button>
                </p>
              </>
            )}

            {activeModal === "login" && (
              <>
                <p className="section-kicker">Welcome back</p>
                <h2>Log in</h2>
                <form className="modal-form">
                  <label>
                    Email
                    <input placeholder="you@example.com" type="email" />
                  </label>
                  <label>
                    Password
                    <input placeholder="Your password" type="password" />
                  </label>
                  <button className="primary-action" type="button">
                    Log in
                  </button>
                </form>
                <p className="modal-switch">
                  Need an account?{" "}
                  <button onClick={() => setActiveModal("signup")} type="button">
                    Sign up
                  </button>
                </p>
              </>
            )}
          </section>
        </div>
      )}

      {!hasAcceptedCookies && (
        <aside className="cookie-banner">
          <div>
            <strong>Cookie notice</strong>
            <p>
              We use essential cookies to keep your theme choice and session preferences working.
            </p>
          </div>
          <button className="primary-action" onClick={acceptCookies} type="button">
            Accept
          </button>
        </aside>
      )}
    </>
  );
}
