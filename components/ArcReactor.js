"use client";

export default function ArcReactor({ score }) {
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
          top: 50%;
          left: 50%;
          width: 45%;
          height: 3px;
          transform-origin: left center;
          background: linear-gradient(
            to right,
            transparent,
            #12abdb,
            white
          );
          box-shadow:
            0 0 10px #12abdb,
            0 0 20px #12abdb;
        }

        .progress {
          position: absolute;
          inset: 54px;
          border-radius: 50%;
          background: conic-gradient(
            #12abdb 0deg,
            #12abdb var(--score-angle),
            rgba(18, 171, 219, 0.12) var(--score-angle),
            rgba(18, 171, 219, 0.12) 360deg
          );
          box-shadow: 0 0 14px rgba(18, 171, 219, 0.6);
        }

        .progress::after {
          content: "";
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background: #04131d;
        }

        .core {
          position: absolute;
          inset: 31%;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #12abdb;
          color: #00121b;
          text-align: center;
          animation: pulse 3s ease-in-out infinite;
        }

        .score {
          font-size: 34px;
          font-weight: 800;
          line-height: 1;
        }

        .label {
          margin-top: 4px;
          font-size: 8px;
          font-weight: 800;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .footer {
          position: absolute;
          bottom: -35px;
          width: 100%;
          color: #12abdb;
          font-size: 11px;
          letter-spacing: 1px;
          text-align: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .outer,
          .inner,
          .scanner,
          .core {
            animation: none;
          }
        }
      `}</style>

      <div
        className="reactor"
        style={{
          "--score-angle": `${score * 3.6}deg`,
        }}
      >
        <div className="outer" />
        <div className="inner" />

        <div className="progress" />

        <div className="scanner">
          <div className="beam" />
        </div>

        <div className="core">
          <div className="score">{score}%</div>

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
