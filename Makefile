.PHONY: ai-service-lint ai-service-test frontend-lint frontend-typecheck

ai-service-lint:
	cd ai-service && ruff check .

ai-service-test:
	cd ai-service && pytest

frontend-lint:
	npm --workspace frontend run lint

frontend-typecheck:
	npm --workspace frontend run typecheck
