from app.domains.consents.schemas import ConsentDefinition, ConsentType


def list_available_consents() -> list[ConsentDefinition]:
    return [
        ConsentDefinition(
            consent_type=ConsentType.STORE_DATA_IN_CLOUD,
            title="Store data in cloud",
            description="Allow encrypted storage of personal medical data in cloud infrastructure.",
        ),
        ConsentDefinition(
            consent_type=ConsentType.PARTICIPATE_IN_RESEARCH,
            title="Participate in research",
            description="Allow separately approved use of eligible data in research workflows.",
        ),
        ConsentDefinition(
            consent_type=ConsentType.ANONYMOUSLY_IMPROVE_AI,
            title="Anonymously improve AI",
            description="Allow privacy-preserving use of eligible data to improve models.",
        ),
        ConsentDefinition(
            consent_type=ConsentType.SHARE_WITH_COMMUNITY,
            title="Share with community",
            description="Allow separately approved sharing of de-identified contributions.",
        ),
    ]
