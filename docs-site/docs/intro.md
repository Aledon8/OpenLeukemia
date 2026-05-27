---
slug: /
title: OpenLeukemia Documentation
---

# OpenLeukemia Documentation

OpenLeukemia is a patient-centered platform for organizing leukemia-related medical data, tracking changes over time, extracting structured information from documents, and explaining validated model outputs in plain language.

The product is designed to help people understand their information without replacing a physician. Privacy, explicit consent, and non-diagnostic language are core requirements.

## What this documentation covers

- Product principles and safety rules.
- Local setup for the frontend and AI service.
- Architecture and data-flow guidance.
- Consent, privacy, and patient-control expectations.
- AI-service boundaries and non-diagnostic output rules.

## Project guardrails

- Registration does not mean blanket consent.
- Patient data belongs to the patient.
- Every consent must be separate, explicit, auditable, and revocable.
- AI may summarize and explain, but must not diagnose or recommend treatment.
- High-risk extracted medical values should be reviewable before becoming canonical records.

For deeper product principles, see the project charter in the repository.
