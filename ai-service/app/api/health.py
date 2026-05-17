from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def read_health_status() -> dict[str, str]:
    return {"status": "ok"}
