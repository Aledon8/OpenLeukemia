from enum import StrEnum

from pydantic import BaseModel


class ConsentType(StrEnum):
    STORE_DATA_IN_CLOUD = "store_data_in_cloud"
    PARTICIPATE_IN_RESEARCH = "participate_in_research"
    ANONYMOUSLY_IMPROVE_AI = "anonymously_improve_ai"
    SHARE_WITH_COMMUNITY = "share_with_community"


class ConsentDefinition(BaseModel):
    consent_type: ConsentType
    title: str
    description: str
