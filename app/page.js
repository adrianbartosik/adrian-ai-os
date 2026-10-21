export default function Home() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "48px" }}>
        ADRIAN AI OS
      </h1>

      <p>Chief of Staff Console</p>

      <hr />

      <div style={{ marginTop: "30px" }}>
        <h2>Status</h2>

        <p>📧 Emails: 17</p>
        <p>📅 Meetings: 4</p>
        <p>💬 Teams: 12</p>
        <p>✅ Tasks: 6</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Today's Focus</h2>

        <ul>
          <li>Contract Extensions</li>
          <li>Pending Approvals</li>
          <li>Leadership Updates</li>
        </ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>AI Brief</h2>

        <p>3 people waiting for decisions</p>
        <p>2 overdue actions</p>
        <p>1 escalation risk</p>
      </div>
    </main>
  );
}
