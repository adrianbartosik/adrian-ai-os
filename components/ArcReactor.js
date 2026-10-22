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
          width: "min(340px, 80vw)",
          height: "min(340px, 80vw)",
          borderRadius: "50%",
          border: "3px solid #12abdb",
          boxShadow: "0 0 40px #12abdb",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "8%",
            borderRadius: "50%",
            border: "2px dashed #12abdb",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "18%",
            borderRadius: "50%",
            border: "2px solid rgba(18,171,219,.4)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "28%",
            borderRadius: "50%",
            background: "#12abdb",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#00121b",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          <div
            style={{
              fontSize: "clamp(24px,4vw,42px)",
            }}
          >
            82%
          </div>

          <div
            style={{
              fontSize: "clamp(8px,1vw,10px)",
              lineHeight: "1.2",
              textTransform: "uppercase",
            }}
          >
            Executive
            <br />
            Score
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            width: "100%",
            textAlign: "center",
            color: "#12abdb
