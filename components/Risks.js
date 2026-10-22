export default function Risks() {
  return (
    <div
      style={{
        background: "#061a27",
        border: "1px solid #0070ad",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <h2 style={{ color: "#ff6b6b" }}>
        RISKS
      </h2>

      <div style={{ lineHeight: "2" }}>
        <div>🔴 2 unanswered emails > 5 days</div>
        <div>🟠 1 overdue approval</div>
        <div>🟠 Contract expires in 14 days</div>
        <div>🟡 Staffing review pending</div>
      </div>
    </div>
  );
}
