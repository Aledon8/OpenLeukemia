import { ConsentPanel } from "../consents/ConsentPanel";
import { TimelineSummary } from "../timeline/TimelineSummary";

export function DashboardPage() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <p className="section-kicker">OpenLeukemia</p>
        <h1>Patient dashboard</h1>
      </header>

      <section className="dashboard-grid">
        <ConsentPanel />
        <TimelineSummary />
      </section>
    </main>
  );
}
