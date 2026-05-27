---
title: Development
---

# Development

## Frontend checks

```powershell
npm run lint:frontend
npm run typecheck:frontend
npm test --workspace frontend
npm --workspace frontend run build
```

## Documentation build

```powershell
npm run build:docs
```

## GitHub Pages build

```powershell
npm run build:pages
```

This builds the Vite frontend, builds the Docusaurus documentation site, and stages the documentation under:

```text
frontend/dist/docs
```

## AI-service checks

```powershell
cd ai-service
.\.venv\Scripts\python.exe -m ruff check .
.\.venv\Scripts\python.exe -m pytest
.\.venv\Scripts\python.exe -m mypy app
```

Run the checks most relevant to the files you changed. When touching medical, consent, authentication, or privacy-sensitive behavior, be extra conservative and call out residual risk.
