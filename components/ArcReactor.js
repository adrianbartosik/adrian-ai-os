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
          0%,
          100% {
            transform: scale(0.96);
          }

          50% {
            transform: scale(1.04);
          }
        }

        .reactor {
          width: min(300px, 75vw);
          height: min(300px, 75vw);
          position: relative;
          margin: 0 auto;
        }

        .outer {
          position: absolute;
          inset: 0;
          border: 2px solid #12abdb;
          border-radius: 50%;
          animation: spin 16s linear infinite;
          box-shadow: 0 0 20px #12abdb;
        }

        .inner {
          position: absolute;
          inset: 25px;
          border: 2px dashed #12abdb;
          border-radius: 50%;
          animation: spin 8s linear infinite reverse;
        }

        .scanner {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          animation: spin 4s linear infinite;
        }

        .beam {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 45%;
          height: 3px;
          background: linear-gradient(
            to right,
            transparent,
            #12abdb,
            white
          );
          transform-origin: left center;
          box-shadow:
            0 0 10px #12abdb,
            0 0 20px #12abdb;
        }

        .core {
          position: absolute;
          inset: 30%;
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
        }

        .score {
          font-size: 36px;
        }

        .label {
          font-size: 9px;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .footer {
          position: absolute;
          width: 100%;
          bottom: -35px;
          text-align: center;
          color: #12abdb;
          font-size: 12px;
        }
      `}</style>

      <div className="reactor">
        <div className="outer" />

        <div className="inner" />

        <div className="scanner">
          <div className="beam" />
        </div>

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
