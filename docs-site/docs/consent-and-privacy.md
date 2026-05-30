---
title: Consent and Privacy
---

# Consent and Privacy

Consent is a first-class product domain in OpenLeukemia.

Registration does not grant broad permission to store, process, share, or use patient data for research. Every permission should be separate, explicit, auditable, and revocable.

## Consent examples

```text
[ ] store data in cloud
[ ] participate in research
[ ] anonymously improve AI
[ ] share with the community
```

Each consent should be visible to the patient and withdrawable later.

## Privacy expectations

- Collect the minimum data needed for the active workflow.
- Keep identity data and medical data conceptually separate.
- Prefer local processing for privacy-sensitive workflows when practical.
- Protect storage and database access with least-privilege rules.
- Keep audit trails for sensitive actions.

## Document extraction

Extracted medical values should be treated as candidate data until reviewed. High-risk values must not silently become canonical records.

The system should help a patient organize information for discussion with clinicians, not create hidden clinical conclusions.
