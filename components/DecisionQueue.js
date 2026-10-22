export default function DecisionQueue() {
  return (
    <div
      style={{
        background: "#061a27",
        border: "1px solid #0070ad",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <h2
        style={{
          color: "#12abdb",
          marginTop: 0,
        }}
      >
        DECISION QUEUE
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>🟡 Contract Extension</div>
        <div>🟠 Budget Approval</div>
        <div>🔵 Hiring Request</div>
        <div>🟢 Customer Escalation</div>
      </div>
    </div>
  );
}
