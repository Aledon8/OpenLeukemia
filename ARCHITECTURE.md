# OpenLeukemia Architecture

## 1. Purpose

OpenLeukemia is designed as a patient-centered platform for:

- storing and organizing leukemia-related medical data;
- tracking changes over time;
- extracting structured information from documents;
- generating understandable explanations from validated model outputs;
- preserving patient control over data and consent.

The system must help patients understand their information without acting as a replacement for a physician.

## 2. Architectural Principles

### Patient control first

- The patient owns their data.
- Registration does not imply broad consent.
- Every consent is separate, explicit, and revocable.
- The user must be able to export or delete their data.

### Privacy by default

- Collect only data required for the current feature.
- Separate identity data from medical data where possible.
- Prefer local processing for sensitive workflows when practical.
- Encrypt data in transit and at rest.

### AI assists, not diagnoses

- Structured ML models perform prediction and detection tasks.
- LLMs explain, summarize, and extract information.
- The system must not present generated text as a medical diagnosis.

### MVP simplicity

- Supabase handles standard product-platform needs.
- Python exists only where Python materially helps.
- Advanced components such as federated learning should be designed for, but not block the first release.

## 3. High-Level System View

```text
                +----------------------+
                |   React Frontend     |
                |   TypeScript         |
                +----+------------+----+
                     |            |
          +----------+            +------------------+
          |                                          |
          v                                          v
+----------------------+                +----------------------+
| Supabase Platform    |                | Python AI Service    |
| auth / postgres /    |                | FastAPI              |
| storage / functions  |                | ML + extraction      |
+----------+-----------+                +----------+-----------+
           |                                       |
           v                                       v
+----------------------+                +----------------------+
| Patient Data         |                | Model outputs and    |
| structured + files   |                | explanations         |
+----------------------+                +----------------------+
```

## 4. Main Components

### 4.1 Frontend

Technology:

- React
- TypeScript

Responsibilities:

- registration and authentication UI;
- consent management UI;
- upload of PDFs and manual entry of analyses;
- patient timeline and trends;
- display of extracted data;
- display of model findings and explanations;
- chat assistant interface;
- data export and deletion flows.

### 4.2 Supabase Platform Layer

Technology:

- Supabase Auth
- PostgreSQL
- Storage
- Row Level Security
- Edge Functions

Responsibilities:

- authentication;
- standard CRUD workflows;
- storage of uploaded documents;
- consent records;
- patient profile records;
- row-level access enforcement;
- lightweight server-side workflows through Edge Functions.

Likely Edge Function candidates:

- profile-related workflows;
- consent-related workflows;
- metadata updates;
- lightweight orchestration close to storage and database operations.

### 4.3 Python AI Service

Technology:

- Python
- FastAPI
- PyTorch
- XGBoost
- scikit-learn
- Gemma or another suitable LLM

Responsibilities:

- model-facing APIs;
- anomaly detection;
- trend analysis;
- risk scoring;
- document extraction;
- OCR or parsing workflows;
- plain-language explanation generation;
- compute-heavy jobs that do not belong in Edge Functions.

The AI service is intentionally narrower than a general application backend.

### 4.4 Database and Storage

Primary data groups:

- user identity;
- patient profile;
- consent records;
- uploaded documents;
- extracted observations;
- normalized lab results;
- symptom entries;
- model outputs;
- generated explanations;
- audit events.

Important separation:

- identity data and medical data should be modeled separately;
- each access path must be protected by explicit authorization rules;
- document storage should not be treated as a substitute for normalized clinical data.

## 5. Core Data Flows

### 5.1 Manual lab entry

```text
patient input
    |
    v
frontend validation
    |
    v
Supabase / Edge Function validation
    |
    v
normalized lab record
    |
    v
timeline / optional AI-service request
```

### 5.2 PDF ingestion

```text
PDF upload
    |
    v
Supabase storage
    |
    v
AI service extraction
    |
    v
structured candidate fields
    |
    v
validation + patient confirmation
    |
    v
Supabase canonical records
```

Design note:

- LLM extraction should produce candidate data, not unquestioned truth.
- High-risk extracted values should be reviewable before becoming canonical records.

### 5.3 ML explanation flow

```text
normalized medical data
    |
    v
feature engineering
    |
    v
ML model
    |
    v
score / anomaly / detected change
    |
    v
LLM explanation layer
    |
    v
patient-friendly text
```

### 5.4 Chat assistant flow

```text
patient question
    |
    v
retrieval from approved knowledge base
    |
    v
optional patient context allowed by consent
    |
    v
LLM response generation
    |
    v
guardrails + citations / disclaimers
    |
    v
answer shown to patient
```

## 6. Consent Architecture

The consent system is a first-class domain, not a checkbox at sign-up.

Recommended consent types:

```text
[ ] store data in cloud
[ ] participate in research
[ ] anonymously improve AI
[ ] share with the community
```

Consent checks should be enforced:

- in the frontend UI;
- in Supabase policies and workflows;
- in data-processing jobs;
- in AI and research pipelines.

## 7. Security and Privacy

### Required from early versions

- HTTPS for all communication;
- strong authentication;
- row-level security in Supabase;
- least-privilege access control;
- audit trail for sensitive actions;
- explicit deletion workflow;
- minimal collection of personal data.

### Recommended as the system matures

- end-to-end encryption for selected workflows;
- key management strategy;
- device-level local encryption;
- immutable audit records for critical events;
- security reviews and threat modeling;
- data retention policies;
- pseudonymization or de-identification where appropriate.

## 8. Federated Learning Direction

Federated learning remains a long-term privacy-preserving path for improving models without centralizing raw patient data.

```text
patient device
    |
    v
local model training
    |
    v
model update
    |
    v
secure aggregation
    |
    v
central model update
```

## 9. Suggested MVP Boundary

### MVP goals

- user account;
- separate consent management;
- manual lab entry;
- PDF upload;
- document extraction into candidate structured values;
- timeline view of lab dynamics;
- basic ML-backed trend or anomaly signals;
- plain-language explanation;
- export and delete personal data.

### Explicitly outside initial MVP

- automatic diagnosis;
- autonomous treatment recommendations;
- broad research marketplace;
- fully mature federated learning pipeline;
- complex clinician workflows unless separately scoped.

## 10. Suggested Repository Structure

```text
OpenLeukemia/
  frontend/
  ai-service/
  ml/
  docs/
  supabase/
    migrations/
    policies/
    functions/
```

## 11. Open Architectural Questions

- Which workflows must work fully offline in the first release?
- Will Gemma run locally, on a project-controlled server, or through an external provider?
- Which extracted PDF fields require patient confirmation before storage?
- What is the first target use case for the ML core: anomaly detection, trend detection, or risk scoring?
- What data is essential for MVP, and what should be deliberately postponed?
- Which jurisdictions and compliance regimes are in scope first?

## 12. Architecture Summary

OpenLeukemia should be built around a simple separation of responsibilities:

```text
Supabase handles product workflows.
Python handles AI workflows.
```

And a simple trust rule:

```text
no broad consent, no hidden collection, no diagnosis by language model
```
