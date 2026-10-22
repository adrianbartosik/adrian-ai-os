export default function ActivityRadar() {
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
        ACTIVITY RADAR
      </h2>

      <pre
        style={{
          color: "#12abdb",
          fontSize: "16px",
        }}
      >
{`MON ████
TUE ██████
WED ███
THU ███████
FRI █████`}
      </pre>
    </div>
  );
}
