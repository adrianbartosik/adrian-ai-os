"use client";

export default function ArcReactor({ score = 87 }) {
  <div
  className="sector"
  style={{ top: "18%", left: "66%", transform: "rotate(60deg)" }}
>
  <span>COMPLIANCE</span>
</div>

<div
  className="sector"
  style={{ top: "78%", left: "70%", transform: "rotate(60deg)" }}
>
  <span>PEOPLE</span>
</div>

<div
  className="sector"
  style={{ top: "78%", left: "22%", transform: "rotate(-60deg)" }}
>
  <span>DELIVERY</span>
</div>

<div
  className="sector"
  style={{ top: "50%", left: "2%", transform: "translateY(-50%)" }}
>
  <span>QUALITY</span>
</div>

<div
  className="sector"
  style={{ top: "18%", left: "22%", transform: "rotate(-60deg)" }}
>
  <span>FINANCE</span>
</div>

<div
  className="sector"
  style={{ top: "50%", right: "0%", transform: "translateY(-50%)" }}
>
  <span>RISK</span>
</div>

  return (
    <>
      <style jsx>{`
        @keyframes outerSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes innerSpin {
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
            transform: translate(-50%, -50%) scale(0.96);
          }

          50% {
            transform: translate(-50%, -50%) scale(1.03);
          }
        }

        .reactor {
          width: min(340px, 85vw);
          height: min(340px, 85vw);
          position: relative;
          margin: 0 auto;
        }

        .outer-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #12abdb;
          box-shadow:
            0 0 12px #12abdb,
            inset 0 0 12px #12abdb;
          animation: outerSpin 18s linear infinite;
        }

        .outer-ring::before {
          content: "";
          position: absolute;
          inset: 16px;
          border-radius: 50%;
          border: 1px solid rgba(18, 171, 219, 0.4);
        }

        .hexagon {
          position: absolute;
          inset: 32px;
          border: 2px solid rgba(18, 171, 219, 0.8);
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
          animation: innerSpin 12s linear infinite;
          box-shadow:
            0 0 20px rgba(18, 171, 219, 0.5),
            inset 0 0 20px rgba(18, 171, 219, 0.3);
        }

        .progress-ring {
          position: absolute;
          inset: 58px;
          border-radius: 50%;
          background: conic-gradient(
            #12abdb 0deg,
            #8ae8ff var(--score-angle),
            rgba(18, 171, 219, 0.08) var(--score-angle),
            rgba(18, 171, 219, 0.08) 360deg
          );
          box-shadow:
            0 0 24px rgba(18, 171, 219, 0.45),
            inset 0 0 14px rgba(18, 171, 219, 0.25);
        }

        .progress-ring::after {
          content: "";
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          background: #04131d;
        }

        .sector {
  position: absolute;
  color: #6fdfff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 0 8px #12abdb;
  z-index: 10;
}

        .sector span {
  display: block;
  white-space: nowrap;
}

        .core {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background:
            radial-gradient(
              circle,
              #ffffff 0%,
              #9defff 25%,
              #12abdb 65%,
              #0070ad 100%
            );
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #00121b;
          z-index: 20;
          animation: pulse 3s ease-in-out infinite;
          box-shadow:
            0 0 20px #12abdb,
            0 0 40px #12abdb,
            0 0 80px rgba(18, 171, 219, 0.4);
        }

        .core::before {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .score {
          font-size: 34px;
          font-weight: 900;
          line-height: 1;
        }

        .label {
          margin-top: 5px;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 1px;
        }

        .footer {
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  text-align: center;
  color: #12abdb;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

        @media (max-width: 600px) {
          .reactor {
            width: 280px;
            height: 280px;
          }

          .core {
            width: 100px;
            height: 100px;
          }

          .score {
            font-size: 28px;
          }
        }
      `}</style>

      <div
        className="reactor"
        style={{
          "--score-angle": `${score * 3.6}deg`,
        }}
      >
        <div className="outer-ring" />

        <div className="hexagon" />

        <div className="progress-ring" />

        {sectors.map((sector, index) => {
  const angle = index * 60;

  return (
    <div
      key={sector}
      className="sector"
      style={{
        transform: `rotate(${angle}deg) translateX(125px)`,
      }}
    >
      <span
        style={{
          transform:
            angle > 90 && angle < 270
              ? `translateY(-10px) rotate(180deg)`
              : `translateY(-10px)`,
        }}
      >
        {sector}
      </span>
    </div>
  );
})}

        <div className="core">
          <div className="score">{score}%</div>

          <div className="label">
            Executive
            <br />
            Score
          </div>
        </div>

        <div className="footer">
          ADRIAN AI OS • INTELLIGENCE CORE
        </div>
      </div>
    </>
  );
}
