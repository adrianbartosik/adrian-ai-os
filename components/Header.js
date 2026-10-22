export default function Header({ time }) {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
        borderBottom: "1px solid #0070ad",
        paddingBottom: "20px",
      }}
    >
      <div>
        <div
          style={{
            color: "#12abdb",
            fontSize: "14px",
            letterSpacing: "3px",
            fontWeight: "600",
          }}
        >
          CAPGEMINI ENGINEERING
        </div>

        <h1
          className="title"
          style={{
            margin: "8px 0",
            color: "#12abdb",
            fontSize: "56px",
            fontWeight: "700",
          }}
        >
          ADRIAN AI OS
        </h1>

        <p
          style={{
            color: "#a8c4d6",
            margin: 0,
          }}
        >
          Engineering Leadership Command Center
        </p>
      </div>

      <div
        className="clock"
        style={{
          fontSize: "42px",
          color: "#12abdb",
          fontWeight: "700",
        }}
      >
        {time}
      </div>
    </div>
  );
}
