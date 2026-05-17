from fastapi import FastAPI

from app.api.health import router as health_router
from app.api.v1.consents import router as consents_router


def create_application() -> FastAPI:
    application = FastAPI(
        title="OpenLeukemia API",
        version="0.1.0",
        description="Patient-centered API for OpenLeukemia.",
    )
    application.include_router(health_router)
    application.include_router(consents_router, prefix="/api/v1")
    return application


app = create_application()
