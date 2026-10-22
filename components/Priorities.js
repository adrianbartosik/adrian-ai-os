export default function Priorities({ priorities }) {
  return (
    <div style={{ padding: "24px" }}>
      <h2
        style={{
          marginTop: 0,
          color: "#12abdb",
        }}
      >
        TOP PRIORITIES
      </h2>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {priorities.map((priority, index) => (
          <div
            key={priority}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "28px",
                color: "#12abdb",
                fontSize: "18px",
                fontWeight: "800",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div>{priority}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
