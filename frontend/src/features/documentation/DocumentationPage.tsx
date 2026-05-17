import logoMark from "../../assets/openleukemia-mark.png";

type DocumentationPageProps = {
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

const documentationSections = [
  {
    title: "For developers",
    body: "Frontend: React + TypeScript. Backend: FastAPI. The system separates structured ML from LLM-based extraction and explanation workflows.",
  },
  {
    title: "API",
    body: "Planned domains include auth, consents, documents, labs, timeline, assistant, and audit. Current backend exposes health and consent-definition endpoints.",
  },
  {
    title: "Project policy",
    body: "Patient data belongs to the patient. Consent is explicit, separated, and revocable. AI assists, but does not diagnose.",
  },
];

export function DocumentationPage({ theme, onThemeToggle }: DocumentationPageProps) {
  return (
    <main className="documentation-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="OpenLeukemia home">
          <img alt="" className="brand-mark-image" height="44" src={logoMark} width="44" />
          <span>OpenLeukemia</span>
        </a>

        <nav aria-label="Documentation navigation" className="documentation-nav">
          <a href="/">Home</a>
          <a href="https://github.com/Aledon8/OpenLeukemia" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <button className="theme-toggle" onClick={onThemeToggle} type="button">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </header>

      <section className="documentation-hero">
        <p className="section-kicker">Documentation</p>
        <h1>Project reference</h1>
        <p>
          A compact starting point for developers, API work, and the principles that shape
          OpenLeukemia.
        </p>
      </section>

      <section className="documentation-grid">
        {documentationSections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
