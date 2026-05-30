---
title: AI Safety
---

# AI Safety

OpenLeukemia may use structured ML and language models, but their roles are intentionally limited.

## Allowed uses

AI may help with:

- document extraction;
- plain-language explanation;
- trend summaries;
- anomaly-support workflows;
- FAQ-style answers from curated knowledge;
- translation of complex medical wording.

## Restricted uses

AI must not be presented as the final decision-maker for:

- diagnosis;
- relapse detection;
- urgent clinical judgment;
- treatment recommendations.

## Patient-facing language

Do not write:

```text
You have a relapse.
```

Prefer careful, non-diagnostic wording:

```text
Changes were detected. Consider discussing these results with your doctor.
```

## Review before canonical storage

LLM extraction can produce candidate structured fields. The patient or an authorized reviewer should confirm high-risk medical values before they become canonical records.
