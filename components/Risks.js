const colors = {
  high: "#ff6b6b",
  medium: "#ffc857",
  low: "#12abdb",
};

export default function Risks({ risks }) {
  return (
    <div style={{ padding: "24px" }}>
      <h2
        style={{
          marginTop: 0,
          color: "#ff6b6b",
        }}
      >
        RISKS
      </h2>

      <div
        style={{
          display: "grid",
          gap: "13px",
        }}
      >
        {risks.map((risk) => (
          <div
            key={risk.text}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                display: "block",
                width: "8px",
                height: "8px",
                marginTop: "6px",
                flexShrink: 0,
                borderRadius: "50%",
                background: colors[risk.level],
                boxShadow: `0 0 8px ${colors[risk.level]}`,
              }}
            />

            <span>{risk.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
