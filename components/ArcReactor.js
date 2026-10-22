export default function ArcReactor() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "3px solid #12abdb",
          boxShadow: "0 0 50px rgba(18,171,219,.8)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "25px",
            borderRadius: "50%",
            border: "2px solid rgba(18,171,219,.5)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "60px",
            borderRadius: "50%",
            border: "2px solid rgba(18,171,219,.8)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "110px",
            borderRadius: "50%",
            background: "#12abdb",
            boxShadow: "0 0 70px #12abdb",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "50%",
            borderTop: "1px solid rgba(18,171,219,.3)",
          }}
        />

        <div
          style={{
            position: "absolute",
            height: "100%",
            left: "50%",
            borderLeft: "1px solid rgba(18,171,219,.3)",
          }}
        />
      </div>
    </div>
  );
}
