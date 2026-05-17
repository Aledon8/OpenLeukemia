from fastapi import APIRouter

from app.domains.consents.schemas import ConsentDefinition
from app.domains.consents.service import list_available_consents

router = APIRouter(prefix="/consents", tags=["consents"])


@router.get("", response_model=list[ConsentDefinition])
def read_available_consents() -> list[ConsentDefinition]:
    return list_available_consents()
