# Supabase Edge Functions

This directory is reserved for lightweight backend logic that belongs close to the Supabase platform layer during the MVP stage.

Good candidates:

- profile-related workflows;
- consent-related workflows;
- lightweight orchestration around database and storage operations;
- webhook-style integrations that do not require the Python AI stack.

Keep heavier work in `ai-service/`, including:

- ML inference;
- document extraction;
- OCR;
- model-facing APIs;
- compute-heavy workflows.
