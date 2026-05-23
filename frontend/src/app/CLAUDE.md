# App Shell Memory

Apply this inside `frontend/src/app/`.

- Keep `App.tsx` focused on app shell concerns: route selection, theme state, and page composition.
- Do not put feature business logic here; move it into `src/features/<feature>/`.
- Preserve `/`, `/docs`, and `/app` route behavior unless intentionally changing navigation.
- Update `App.test.tsx` when shell routing, theme initialization, or theme toggling changes.
