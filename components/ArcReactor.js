export default function ArcReactor() {
  return (
    <div
      style={{
        width: "220px",
        height: "220px",
        borderRadius: "50%",
        margin: "0 auto",
        position: "relative",
        border: "2px solid #6dd6ff",
        boxShadow: "0 0 35px #6dd6ff",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "30px",
          borderRadius: "50%",
          border: "2px solid #6dd6ff",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "70px",
          borderRadius: "50%",
          background: "#6dd6ff",
          boxShadow: "0 0 60px #6dd6ff",
        }}
      />
    </div>
  );
}
