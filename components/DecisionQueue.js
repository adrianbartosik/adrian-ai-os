const colors = {
  high: "#ff6b6b",
  medium: "#ffc857",
  normal: "#12abdb",
};

export default function DecisionQueue({ decisions }) {
  return (
    <div style={{ padding: "24px" }}>
      <h2
        style={{
          marginTop: 0,
          color: "#12abdb",
        }}
      >
        DECISION QUEUE
      </h2>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {decisions.map((decision, index) => (
          <div
            key={decision.title}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              border: "1px solid rgba(18,171,219,0.18)",
              borderRadius: "10px",
              background: "rgba(18,171,219,0.04)",
            }}
          >
            <span>
              {index + 1}. {decision.title}
            </span>

            <span
              style={{
                color: colors[decision.priority],
                fontSize: "10px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              {decision.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
