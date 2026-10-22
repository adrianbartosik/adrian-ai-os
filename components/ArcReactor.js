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

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(0.96);
            box-shadow: 0 0 24px #12abdb;
          }

          50% {
            transform: scale(1.04);
            box-shadow: 0 0 55px #12abdb;
          }
        }

        @keyframes progressPulse {
          0%,
          100% {
            filter: drop-shadow(0 0 4px #ffffff);
          }

          50% {
            filter: drop-shadow(0 0 12px #12abdb);
          }
        }

        .reactor {
          width: min(320px, 76vw);
          aspect-ratio: 1;
          position: relative;
          margin: 0 auto;
        }

        .ring-one {
          position: absolute;
          inset: 0;
          border: 2px solid #12abdb;
          border-radius: 50%;
          box-shadow:
            0 0 22px rgba(18, 171, 219, 0.8),
            inset 0 0 22px rgba(18, 171, 219, 0.2);
          animation: spin 18s linear infinite;
        }

        .ring-two {
          position: absolute;
          inset: 8%;
          border: 2px dashed rgba(18, 171, 219, 0.9);
          border-radius: 50%;
          animation: spinReverse 10s linear infinite;
        }

        .ring-three {
          position: absolute;
          inset: 18%;
          border: 1px solid rgba(18, 171, 219, 0.45);
          border-radius: 50%;
          animation: spin 14s linear infinite;
        }

        .progress-ring {
          position: absolute;
          inset: 22%;
          border-radius: 50%;
          background: conic-gradient(
            #ffffff 0deg,
            #12abdb 295deg,
            rgba(18, 171, 219, 0.13) 295deg,
            rgba(18, 171, 219, 0.13) 360deg
          );
          animation: progressPulse 2.5s ease-in-out infinite;
        }

        .progress-ring::after {
          content: "";
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background: #04131d;
        }

        .scanner {
          position: absolute;
          inset: 5%;
          border-radius: 50%;
          animation: spin 4s linear infinite;
          z-index: 3;
        }

        .scanner-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 46%;
          height: 3px;
          transform-origin: left center;
          background: linear-gradient(
            90deg,
            rgba(18, 171, 219, 0),
            rgba(18, 171, 219, 0.75),
            #ffffff
          );
          box-shadow:
            0 0 8px #12abdb,
            0 0 18px #12abdb,
            0 0 30px rgba(18, 171, 219, 0.8);
        }

        .scanner-glow {
          position: absolute;
          top: calc(50% - 15px);
          left: 50%;
          width: 42%;
          height: 30px;
          transform-origin: left center;
          background: linear-gradient(
            90deg,
            rgba(18, 171, 219, 0),
            rgba(18, 171, 219, 0.12)
          );
          clip-path: polygon(0 48%, 100% 0, 100% 100%);
          filter: blur(3px);
        }

        .cross-horizontal {
          position: absolute;
          top: 50%;
          width: 100%;
          border-top: 1px solid rgba(18, 171, 219, 0.2);
        }

        .cross-vertical {
          position: absolute;
          left: 50%;
          height: 100%;
          border-left: 1px solid rgba(18, 171, 219, 0.2);
        }

        .core {
          position: absolute;
          inset: 31%;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 8px;
          border: 2px solid rgba(255, 255, 255, 0.75);
          border-radius: 50%;
          background: #12abdb;
          color: #00121b;
          text-align: center;
          animation: pulse 3s ease-in-out infinite;
        }

        .score {
          font-size: clamp(25px, 4vw, 38px);
          font-weight: 800;
          line-height: 1;
        }
