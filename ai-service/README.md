# AI Service

The Python service exists for workloads that benefit from the Python and ML ecosystem.

## Responsibilities

- model-facing APIs;
- document extraction;
- OCR or parsing workflows;
- ML inference;
- compute-heavy jobs that do not belong in Supabase Edge Functions.

## Setup

Create and activate a virtual environment:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
```

## Run

```powershell
uvicorn app.main:app --reload
```

## Quality checks

```powershell
ruff check .
pytest
mypy app
```
