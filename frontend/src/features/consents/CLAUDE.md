# Consent UI Memory

Apply this inside `frontend/src/features/consents/`.

- Consent is never implied by registration or navigation.
- Keep each consent separate, explicit, and reversible in the UI.
- Use clear patient-facing labels that describe what the consent allows.
- Do not combine research, cloud storage, AI improvement, or sharing consent into one toggle.
- Keep frontend consent identifiers aligned with API/domain consent types when wiring backend data.
- When changing copy or toggles, check every place consent text appears so variants do not drift.
