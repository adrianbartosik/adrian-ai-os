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
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .arc-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .arc-reactor {
          width: clamp(220px, 28vw, 340px);
          height: clamp(220px, 28vw, 340px);
          position: relative;
        }

        .arc-core {
          position: absolute;
          inset: 28%;
          border-radius: 50%;
          background: #12abdb;
          animation: pulse 3s ease-in-out infinite;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #00121b;
          font-weight: bold;
          text-align: center;
          padding: 10px;
        }

        .score {
          font-size: clamp(24px, 4vw, 42px);
          line-height: 1;
        }

        .label {
          font-size: clamp(8px, 1vw, 10px);
          margin-top: 6px;
          letter-spacing: 1px;
          line-height: 1.2;
          text-transform: uppercase;
          max-width: 80px;
        }

        .reactor-footer {
          position: absolute;
          bottom: -50px;
          width: 100%;
          text-align: center;
          color: #12abdb;
          letter-spacing: 2px;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .reactor-footer {
            font-size: 10px;
            letter-spacing: 1px;
          }
        }
      `}</style>

      <div className="arc-wrapper">
        <div className="arc-reactor">
          {/* Outer Ring */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid #12abdb",
              animation: "rotateSlow 20s linear infinite",
              boxShadow: "0 0 40px rgba(18,
