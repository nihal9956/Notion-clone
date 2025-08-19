// FindAnythingSection.jsx or .tsx
import React from "react";

const integrations1 = [
  "Slack",
  "Google Drive",
  "GitHub",
  "Jira",
  "MS Teams",
  "SharePoint"
];
const integrations2 = [
  "OneDrive",
  "Gmail",
  "Linear",
  { name: "Coming soon", isTitle: true },
  "Zendesk",
  "Salesforce",
  "Box"
];

export default function FindAnything() {
  return (
    <section className="find-anywhere-section">
      <div className="find-anywhere-content">
        <div className="find-anywhere-left">
          <h2>Find anything <br />with one search.</h2>
          <p className="find-anywhere-sub">
            Search across your company knowledge and apps, right inside Notion.
          </p>
          <div className="find-anywhere-buttons">
            <a className="blue-btn" href="#">Try for free</a>
            <a className="link-btn" href="#">Request a demo →</a>
          </div>
          <div className="find-anywhere-integrates">
            <div>
              <div className="integrates-title">Integrates with</div>
              <ul>
                {integrations1.map((item) =>
                  <li key={item}><span className="integrate-dot" />{item}</li>
                )}
              </ul>
            </div>
            <div>
              <ul>
                {integrations2.map((item) =>
                  typeof item === "string" ? (
                    <li key={item}><span className="integrate-dot" />{item}</li>
                  ) : (
                    <li key={item.name} className="integrate-coming">{item.name}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="find-anywhere-right">
          <div className="screenshot-bg">
            <video
              src="/find.mp4"
              className="screenshot-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
