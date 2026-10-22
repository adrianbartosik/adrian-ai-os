export default function SystemStatus() {
  const row = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "14px",
  };

  const online = {
    color: "#00c389",
    fontWeight: "600",
  };

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
        SYSTEM STATUS
      </h2>

      <div style={row}>
        <span>AI CORE</span>
        <span style={online}>ONLINE</span>
      </div>

      <div style={row}>
        <span>MAIL</span>
        <span style={online}>ONLINE</span>
      </div>

      <div style={row}>
        <span>CALENDAR</span>
        <span style={online}>ONLINE</span>
      </div>

      <div style={row}>
        <span>TEAMS</span>
        <span style={online}>ONLINE</span>
      </div>

      <div style={row}>
        <span>ENGINEERING HUB</span>
        <span style={online}>ONLINE</span>
      </div>
    </div>
  );
}
