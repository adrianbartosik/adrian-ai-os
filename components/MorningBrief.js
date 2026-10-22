"use client";

import { useEffect, useState } from "react";

export default function MorningBrief() {
  const [greeting, setGreeting] = useState("GOOD DAY");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("GOOD MORNING");
    } else if (hour < 18) {
      setGreeting("GOOD AFTERNOON");
    } else {
      setGreeting("GOOD EVENING");
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .brief {
          position: relative;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 28px;
          padding: 26px;
          margin-top: 24px;
          overflow: hidden;
          border: 1px solid rgba(18, 171, 219, 0.38);
          border-radius: 18px;
          background: linear-gradient(
            115deg,
            rgba(18, 171, 219, 0.12),
            rgba(6, 26, 39, 0.68)
          );
          backdrop-filter: blur(14px);
          box-shadow:
            inset 0 0 20px rgba(18, 171, 219, 0.05),
            0 0 24px rgba(18, 171, 219, 0.08);
        }

        .brief::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 90px;
          border-top: 3px solid #12abdb;
          box-shadow: 0 0 10px #12abdb;
        }

        .eyebrow {
          margin-bottom: 8px;
          color: #12abdb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        h2 {
          margin: 0 0 12px;
          font-size: clamp(25px, 4vw, 38px);
        }

        .summary {
          max-width: 720px;
          margin: 0;
          color: #b8d1df;
          line-height: 1.65;
        }

        .recommendation {
          padding: 18px;
          border-left: 2px solid #12abdb;
          background: rgba(18, 171, 219, 0.06);
        }

        .recommendation-title {
          margin-bottom: 10px;
          color: #12abdb;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .focus {
          margin-bottom: 7px;
          font-weight: 700;
        }

        .reason {
          color: #9ab6c6;
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 800px) {
          .brief {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .recommendation {
            border-top: 1px solid rgba(18, 171, 219, 0.3);
            border-left: 0;
          }
        }
      `}</style>

      <section className="brief">
        <div>
          <div className="eyebrow">
            EXECUTIVE MORNING BRIEF
          </div>

          <h2>{greeting}, ADRIAN</h2>

          <p className="summary">
            You have 4 meetings today, 4 pending decisions
            and 2 active risks. The next meeting begins at
            15:00. Contract extensions remain the highest
            priority item.
          </p>
        </div>

        <div className="recommendation">
          <div className="recommendation-title">
            RECOMMENDED NEXT ACTION
          </div>

          <div className="focus">
            Review contract extension approvals
          </div>

          <div className="reason">
            Two related decisions are waiting and one
            contract enters the 14-day risk window.
          </div>
        </div>
      </section>
    </>
  );
}
