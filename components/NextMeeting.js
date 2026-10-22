export default function NextMeeting() {
  return (
    <div
      style={{
        background: "#061a27",
        border: "1px solid #0070ad",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <h2 style={{ color: "#12abdb" }}>
        NEXT MEETING
      </h2>

      <h3>Leadership Sync</h3>

      <p>15:00</p>

      <p>Starts in 23 minutes</p>

      <div
        style={{
          background: "#113245",
          borderRadius: "12px",
          height: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "84%",
            height: "100%",
            background: "#12abdb",
          }}
        />
      </div>

      <p style={{ color: "#12abdb" }}>
        Preparation Score: 84%
      </p>
    </div>
  );
}
