export default function ScoreTrend({
  score,
  trend,
  status,
}) {
  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <div
        style={{
          color: "#0070AD",
          fontSize: "12px",
          letterSpacing: "2px",
          marginBottom: "14px",
        }}
      >
        EXECUTIVE SCORE TREND
      </div>

      <div
        style={{
          fontSize: "52px",
          color: "#0070AD",
          fontWeight: "700",
        }}
      >
        {score}%
      </div>

      <div
        style={{
          color: "#00C389",
          fontSize: "22px",
          marginTop: "8px",
        }}
      >
        ↑ +{trend} today
      </div>

      <div
        style={{
          marginTop: "16px",
          color: "#B8D1DF",
        }}
      >
        Status
      </div>

      <div
        style={{
          color: "#00C389",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        {status}
      </div>
    </div>
  );
}
