"use client";

export default function ArcReactor() {
  return (
    <>
      <style jsx>{`
        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 30px #12abdb;
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 80px #12abdb;
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 30px #12abdb;
          }
        }

        @keyframes scan {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "340px",
            height: "340px",
            position: "relative",
          }}
        >
          {/* Ring 1 */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid #12abdb",
              animation: "rotateSlow 20s linear infinite",
              boxShadow: "0 0 40px rgba(18,171,219,.7)",
            }}
          />

          {/* Ring 2 */}

          <div
            style={{
              position: "absolute",
              inset: "25px",
              borderRadius: "50%",
              border: "2px dashed rgba(18,171,219,.8)",
              animation: "rotateReverse 14s linear infinite",
            }}
          />

          {/* Ring 3 */}

          <div
            style={{
              position: "absolute",
              inset: "60px",
              borderRadius: "50%",
              border: "2px solid rgba(18,171,219,.4)",
              animation: "rotateSlow 12s linear infinite",
            }}
          />

          {/* Scanner */}

          <div
            style={{
              position: "absolute",
              inset: "10px",
              borderRadius: "50%",
              animation: "scan 4s linear infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "45%",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #12abdb)",
                transformOrigin: "left center",
              }}
            />
          </div>

          {/* Crosshair */}

          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "50%",
              borderTop: "1px solid rgba(18,171,219,.25)",
            }}
          />

          <div
            style={{
              position: "absolute",
              height: "100%",
              left: "50%",
              borderLeft: "1px solid rgba(18,171,219,.25)",
            }}
          />

          {/* Core */}

          <div
            style={{
              position: "absolute",
              inset: "115px",
              borderRadius: "50%",
              background: "#12abdb",
              animation: "pulse 3s ease-in-out infinite",
            }}
          />

          {/* Label */}

          <div
            style={{
              position: "absolute",
              bottom: "-50px",
              width: "100%",
              textAlign: "center",
              color: "#12abdb",
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            ENGINEERING INTELLIGENCE CORE
          </div>
        </div>
      </div>
    </>
  );
}
