from fastapi.testclient import TestClient

from app.main import app


def test_consents_endpoint_returns_expected_items() -> None:
    client = TestClient(app)

    response = client.get("/api/v1/consents")

    assert response.status_code == 200
    assert [item["consent_type"] for item in response.json()] == [
        "store_data_in_cloud",
        "participate_in_research",
        "anonymously_improve_ai",
        "share_with_community",
    ]
