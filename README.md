# OpenLeukemia

[![CI](https://github.com/Aledon8/OpenLeukemia/actions/workflows/ci.yml/badge.svg)](https://github.com/Aledon8/OpenLeukemia/actions/workflows/ci.yml)

OpenLeukemia is a patient-centered platform for organizing leukemia-related medical data, tracking changes over time, and turning complex results into understandable explanations without replacing a physician.

The project is guided by the principles in [PROJECT_CHARTER.md](./PROJECT_CHARTER.md) and the system design in [ARCHITECTURE.md](./ARCHITECTURE.md).

## MVP Architecture

For the MVP, the project intentionally keeps the general backend surface small:

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

Use Supabase for ordinary product workflows. Use the Python AI service only when the task genuinely needs Python, ML, or heavier compute.

## Stack

- Frontend: React, TypeScript, Vite
- Platform layer: Supabase Auth, Postgres, Storage, Edge Functions
- AI service: Python, FastAPI
- AI/ML: PyTorch, XGBoost, scikit-learn, Gemma or another LLM for extraction and explanation tasks

## Repository Layout

```text
frontend/       React + TypeScript application
ai-service/     Python service for ML and extraction workloads
supabase/       migrations, policies, and Edge Functions
ml/             machine learning workspace
docs/           project documentation
```

## Product Rules

- Registration does not mean blanket consent.
- Patient data belongs to the patient.
- AI may explain and summarize, but must not diagnose.
- Structured ML handles prediction and trend detection; LLMs handle extraction and explanation.
- Privacy-sensitive workflows should prefer minimal collection and explicit consent.

## Getting Started

### Requirements

- Node.js 22+
- npm 10+
- Python 3.12+

### 1. Install frontend dependencies

From the repository root:

```powershell
npm install
```

This project uses npm workspaces, so frontend dependencies are installed once in the repository root `node_modules/`.

### 2. Create the AI service virtual environment

```powershell
cd ai-service
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
```

### 3. Run the AI service

```powershell
cd ai-service
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

Default local API URL:

```text
http://127.0.0.1:8000
```

Health check:

```text
http://127.0.0.1:8000/health
```

### 4. Run the frontend

From the repository root:

```powershell
npm --workspace frontend run dev
```

Default local frontend URL:

```text
http://127.0.0.1:5173
```

Useful pages:

- `/` landing page
- `/docs` project documentation page
- `/app` early patient dashboard

## Development Workflow

### Frontend checks

```powershell
npm run lint:frontend
npm run typecheck:frontend
npm test --workspace frontend
```

### AI service checks

```powershell
cd ai-service
.\.venv\Scripts\python.exe -m ruff check .
.\.venv\Scripts\python.exe -m pytest
.\.venv\Scripts\python.exe -m mypy app
```

### Production build

```powershell
npm --workspace frontend run build
```

GitHub Actions runs frontend checks and AI-service checks on pushes to `main` and on pull requests.

## Coding Conventions

- Prefer clear names over clever ones.
- Keep functions small and responsibility-focused.
- Reuse existing local patterns before introducing new abstractions.
- Use typed models and structured parsing instead of ad hoc string manipulation.
- Keep frontend components feature-oriented and Python code domain-oriented.
- Add comments only where they genuinely reduce reading effort.
- Keep patient-facing text careful, calm, and non-diagnostic.

## Frontend Rules

- Build mobile-first responsive layouts.
- Keep the public site lightweight: avoid unnecessary heavy animation, video, or large assets.
- Maintain both light and dark themes.
- Preserve accessible interaction patterns for menus, forms, and dialogs.
- Keep brand color usage centered on red, but avoid making every surface the same hue.

## Supabase Rules

- Keep routine CRUD, auth, storage, and access-control flows close to Supabase.
- Use Row Level Security as a primary protection layer.
- Keep consent logic explicit and auditable.
- Put lightweight server logic in `supabase/functions/`.

## AI Service Rules

- Keep the AI service focused on Python-native workloads.
- Route handlers should stay thin.
- Put reusable logic into services and domain modules.
- Use explicit schemas for all requests and responses.
- Keep model outputs explainable and non-diagnostic.

## AI Rules

```text
structured data -> validated ML -> LLM explanation -> patient understanding
```

Gemma or another LLM may help with:

- PDF/document extraction;
- plain-language explanation;
- FAQ-style responses from curated knowledge;
- translation of medical wording.

Gemma or another LLM must not be the final decision-maker for:

- relapse detection;
- diagnosis;
- urgent clinical judgment;
- treatment recommendations.

## Consent Model

The user should decide separately whether to:

```text
[ ] store data in cloud
[ ] participate in research
[ ] anonymously improve AI
[ ] share with the community
```

Every consent must be:

- explicit;
- independent;
- revocable;
- visible to the user.

## Current Status

The project is in early implementation. The repository already contains:

- a public landing page;
- a documentation page;
- an early dashboard;
- a focused Python AI service skeleton;
- a Supabase workspace for migrations, policies, and Edge Functions;
- linting, type checking, tests, and CI;
- architecture and project-charter documents.

## Project Documents

- [PROJECT_CHARTER.md](./PROJECT_CHARTER.md)
- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [ai-service/README.md](./ai-service/README.md)
- [supabase/functions/README.md](./supabase/functions/README.md)
