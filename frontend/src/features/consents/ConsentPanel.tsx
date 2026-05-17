import { useState } from "react";

import type { ConsentItem } from "./consentTypes";

const initialConsentItems: ConsentItem[] = [
  {
    id: "store-data",
    title: "Store data in cloud",
    description: "Allow encrypted cloud storage for your medical records.",
    enabled: false,
  },
  {
    id: "research",
    title: "Participate in research",
    description: "Allow approved use of eligible data in research workflows.",
    enabled: false,
  },
  {
    id: "improve-ai",
    title: "Anonymously improve AI",
    description: "Allow privacy-preserving use of eligible data to improve models.",
    enabled: false,
  },
  {
    id: "share-community",
    title: "Share with community",
    description: "Allow separately approved sharing of de-identified contributions.",
    enabled: false,
  },
];

export function ConsentPanel() {
  const [consentItems, setConsentItems] = useState(initialConsentItems);

  function updateConsentState(consentId: string) {
    setConsentItems((currentConsentItems) =>
      currentConsentItems.map((consentItem) =>
        consentItem.id === consentId
          ? { ...consentItem, enabled: !consentItem.enabled }
          : consentItem,
      ),
    );
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Consents</h2>
        <span>{consentItems.filter((item) => item.enabled).length} active</span>
      </div>

      <div className="consent-list">
        {consentItems.map((consentItem) => (
          <label className="consent-row" key={consentItem.id}>
            <input
              checked={consentItem.enabled}
              onChange={() => updateConsentState(consentItem.id)}
              type="checkbox"
            />
            <span>
              <strong>{consentItem.title}</strong>
              <small>{consentItem.description}</small>
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}
