export default function Header({ time }) {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div>
        <h1
          className="title"
          style={{
            margin: 0,
            color: "#6dd6ff",
            fontSize: "52px",
          }}
        >
          ADRIAN AI OS
        </h1>

        <p style={{ color: "#8aa9b5" }}>
          Chief of Staff Command Center
        </p>
      </div>

      <div
        className="clock"
        style={{
          fontSize: "38px",
          color: "#78f7ff",
          fontWeight: "bold",
        }}
      >
        {time}
      </div>
    </div>
  );
}
