export default function AIBrief({ items }) {
  return (
    <div style={{ padding: "24px" }}>
      <h2
        style={{
          marginTop: 0,
          color: "#12abdb",
        }}
      >
        AI BRIEF
      </h2>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <span style={{ color: "#12abdb" }}>›</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
