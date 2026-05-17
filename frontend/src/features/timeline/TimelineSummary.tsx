const recentObservations = [
  { label: "Platelets", value: "45 -> 28", status: "decreased" },
  { label: "CRP", value: "6 -> 34", status: "increased" },
  { label: "Temperature", value: "37.7 C", status: "watch" },
];

export function TimelineSummary() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Recent changes</h2>
        <span>Day +23</span>
      </div>

      <ul className="metric-list">
        {recentObservations.map((observation) => (
          <li key={observation.label}>
            <span>{observation.label}</span>
            <strong>{observation.value}</strong>
            <em>{observation.status}</em>
          </li>
        ))}
      </ul>

      <p className="assistant-summary">
        Recent changes were detected. Platelets decreased and CRP increased. Please discuss these
        results with your doctor.
      </p>
    </section>
  );
}
