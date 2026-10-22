"use client";

import { useState } from "react";

export default function CommandPalette({ actions }) {
  const [selectedAction, setSelectedAction] =
    useState("Select an action");

  return (
    <div style={{ padding: "24px" }}>
      <h2
        style={{
          marginTop: 0,
          color: "#12abdb",
        }}
      >
        ACTION CENTER
      </h2>

      <div
        style={{
          marginBottom: "16px",
          color: "#9bb7c7",
          fontSize: "13px",
        }}
      >
        Current command: {selectedAction}
      </div>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {actions.map((action) => (
          <button
            className="action-button"
            key={action}
            onClick={() => setSelectedAction(action)}
            type="button"
          >
            {action}
          </button>
        ))}
      </div>

      <style jsx>{`
        .action-button {
          padding: 14px;
          border: 1px solid rgba(18, 171, 219, 0.4);
          border-radius: 12px;
          background: rgba(18, 171, 219, 0.07);
          color: #ffffff;
          font: inherit;
          text-align: left;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .action-button:hover {
          border-color: #12abdb;
          background: rgba(18, 171, 219, 0.16);
          transform: translateY(-2px);
        }

        .action-button:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
