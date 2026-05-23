---
applyTo: "ml/**/*"
---

# ML Instructions

- Keep structured ML workflows separate from LLM explanation workflows.
- Use measurable criteria: split, metric, threshold, calibration, and known failure modes.
- Do not commit patient-identifying or sensitive medical data.
- Model outputs support signals and trends, not diagnosis or treatment guidance.
- Document label assumptions, cohort limitations, and evaluation caveats near the relevant code or report.
