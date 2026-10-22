"use client";

export default function ArcReactor() {
  return (
    <>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
          }

          50% {
            transform: scale(1.05);
          }

          100% {
            transform: scale(0.95);
          }
        }

        .reactor {
          width: min(340px, 80vw);
          height: min(340px, 80vw);
          position: relative;
          margin: 0 auto;
        }

        .ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #12abdb;
          animation: spin 20s linear infinite;
          box-shadow: 0 0 20px #12abdb;
        }

        .ring2 {
          position: absolute;
          inset: 25px;
          border-radius: 50%;
          border: 2px dashed #12abdb;
          animation: spin 12s linear infinite reverse;
        }

        .core {
          position: absolute;
          inset: 90px;
          background: #12abdb;
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;
          color: #00121b;
          font-weight: bold;
        }

        .score {
          font-size: clamp(24px, 4vw, 42px);
        }

        .label {
          font-size: 10px;
          text-transform: uppercase;
        }

        .footer {
          position: absolute;
          bottom: -40px;
          width: 100%;
          text-align: center;
          color: #12abdb;
          font-size: 12px;
        }
      `}</style>

      <div className="reactor">
        <div className="ring" />
        <div className="ring2" />

        <div className="core">
          <div className="score">82%</div>

          <div className="label">
            Executive
            <br />
            Score
          </div>
        </div>

        <div className="footer">
          ENGINEERING INTELLIGENCE CORE
        </div>
      </div>
    </>
  );
}
