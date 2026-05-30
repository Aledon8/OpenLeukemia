---
title: Architecture
---

# Architecture

OpenLeukemia keeps a clear separation between routine product workflows and AI-heavy workloads.

```text
React frontend
    |
    +--> Supabase
    |      - Auth
    |      - Postgres
    |      - Storage
    |      - Row Level Security
    |      - Edge Functions
    |
    +--> Python AI service
           - ML inference
           - document extraction
           - OCR / parsing
           - model-facing endpoints
```

## Frontend

The frontend is a React and TypeScript application. It owns patient-facing workflows such as landing pages, consent surfaces, dashboards, timelines, upload flows, and explanation displays.

Frontend copy must stay calm, careful, and non-diagnostic.

## Supabase

Supabase should handle routine platform work:

- authentication;
- standard CRUD workflows;
- storage;
- consent records;
- access-control paths;
- Row Level Security;
- lightweight Edge Functions.

Consent and access checks should be enforced close to the data, not only in the UI.

## AI service

The Python FastAPI service should be used when the task genuinely needs Python, ML, OCR, extraction, parsing, or heavier compute.

Route handlers should stay thin. Reusable behavior belongs in service and domain modules.

## Data-flow rule

```text
structured data -> validated ML -> LLM explanation -> patient understanding
```

LLM output is explanation or candidate extraction. It is not a medical decision.
