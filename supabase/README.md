# Supabase workspace

Supabase is the main product-platform layer for the MVP.

This directory is reserved for:

- SQL migrations;
- row-level security policies;
- storage bucket definitions;
- Edge Functions for lightweight backend workflows;
- seed data for local development where appropriate.

Use Supabase for:

- authentication;
- database-backed product workflows;
- document storage;
- consent-aware access control;
- lightweight orchestration close to the data layer.

Use `ai-service/` instead for:

- ML inference;
- PDF extraction;
- OCR;
- model-facing APIs;
- compute-heavy Python workflows.
