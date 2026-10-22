"use client";

import { useEffect, useState } from "react";

const statuses = [
  "SCANNING PRIORITIES",
  "ANALYZING DECISIONS",
  "MONITORING RISKS",
  "PREPARING BRIEF",
];

export default function TopStatusBar() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatusIndex((current) => {
        return (current + 1) % statuses.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes statusPulse {
          0%,
          100% {
            opacity: 0.65;
          }

          50% {
            opacity: 1;
          }
        }

        .status-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: center;
          padding: 13px 18px;
          margin-bottom: 24px;
          border: 1px solid rgba(18, 171, 219, 0.4);
          border-radius: 12px;
          background: rgba(6, 26, 39, 0.68);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 18px rgba(18, 171, 219, 0.1);
          font-size: 12px;
          letter-spacing: 1.2px;
        }

        .left {
          text-align: left;
        }

        .center {
          color: #12abdb;
          text-align: center;
          animation: statusPulse 2s ease-in-out infinite;
        }

        .right {
          text-align: right;
        }

        .online {
          color: #00c389;
          font-weight: 700;
        }

        .dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 7px;
          border-radius: 50%;
          background: #00c389;
          box-shadow: 0 0 10px #00c389;
          animation: statusPulse 1.5s infinite;
        }

        @media (max-width: 700px) {
          .status-bar {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .left,
          .center,
          .right {
            text-align: center;
          }
        }
      `}</style>

      <div className="status-bar">
        <div className="left">
          <span className="dot" />
          AI CORE: <span className="online">ONLINE</span>
        </div>

        <div className="center">
          {statuses[statusIndex]}
        </div>

        <div className="right">
          SYSTEMS NORMAL · SYNC LIVE
        </div>
      </div>
    </>
  );
}
