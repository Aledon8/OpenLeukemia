---
title: Getting Started
---

# Getting Started

## Requirements

- Node.js 22 or newer for the frontend workspace.
- npm 10 or newer.
- Python 3.12 or newer for the AI service.

## Install frontend dependencies

From the repository root:

```powershell
npm install
```

## Run the frontend

```powershell
npm --workspace frontend run dev
```

The default local frontend URL is:

```text
http://127.0.0.1:5173
```

## Run the frontend and documentation together

```powershell
npm run dev
```

This starts the Vite frontend on port `5173` and Docusaurus on port `3000`. The frontend dev server proxies `/docs` to Docusaurus, so the landing page documentation link works locally.

## Run only the documentation site

```powershell
npm run dev:docs
```

Docusaurus serves the documentation locally at:

```text
http://localhost:3000/docs/
```

## Create the AI-service environment

```powershell
cd ai-service
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
```

## Run the AI service

```powershell
cd ai-service
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

The default AI-service URL is:

```text
http://127.0.0.1:8000
```

Health check:

```text
http://127.0.0.1:8000/health
```
