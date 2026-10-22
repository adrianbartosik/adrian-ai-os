"use client";

import { useEffect, useState } from "react";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "GOOD MORNING";
  }

  if (hour < 18) {
    return "GOOD AFTERNOON";
  }

  return "GOOD EVENING";
}

export default function MorningBrief({ data }) {
  const [greeting, setGreeting] =
    useState("GOOD DAY");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const decisionCount = data.decisions.length;
  const riskCount = data.risks.length;
  const meetingsToday = data.meetings.today;

  const recommendation =
    data.recommendation || {
      title: "Review current priorities",
      reason:
        "No specific recommendation is available.",
    };

  return (
    <>
      <style jsx>{`
        .brief {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(0, 1.4fr)
            minmax(260px, 1fr);
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
            inset 0 0 20px
              rgba(18, 171, 219, 0.05),
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
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .title {
          margin: 0 0 12px;
          font-size: clamp(25px, 4vw, 38px);
        }

        .summary {
          max-width: 760px;
          margin: 0;
          color: #b8d1df;
          line-height: 1.65;
        }

        .metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .metric {
          padding: 8px 12px;
          border: 1px solid
            rgba(18, 171, 219, 0.22);
          border-radius: 20px;
          background: rgba(18, 171, 219, 0.05);
          color: #9bb7c7;
          font-size: 11px;
        }

        .metric strong {
          margin-right: 4px;
          color: #12abdb;
        }

        .recommendation {
          padding: 18px;
          border-left: 2px solid #12abdb;
          background: rgba(18, 171, 219, 0.06);
        }

        .recommendation-title {
          margin-bottom: 12px;
          color: #12abdb;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .focus {
          margin-bottom: 8px;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
        }

        .reason {
          color: #9ab6c6;
          font-size: 14px;
          line-height: 1.55;
        }

        @media (max-width: 800px) {
          .brief {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .recommendation {
            border-top: 1px solid
              rgba(18, 171, 219, 0.3);
            border-left: 0;
          }
        }
      `}</style>

      <section className="brief">
        <div>
          <div className="eyebrow">
            EXECUTIVE DAILY BRIEF
          </div>

          <h2 className="title">
            {greeting}, ADRIAN
          </h2>

          <p className="summary">
            You have {meetingsToday} meetings today,{" "}
            {decisionCount} pending decisions and{" "}
            {riskCount} active risks. Your next meeting is{" "}
            {data.meetings.nextMeeting} at{" "}
            {data.meetings.nextMeetingTime}.
          </p>

          <div className="metrics">
            <div className="metric">
              <strong>{meetingsToday}</strong>
              meetings
            </div>

            <div className="metric">
              <strong>{decisionCount}</strong>
              decisions
            </div>

            <div className="metric">
              <strong>{riskCount}</strong>
              risks
            </div>

            <div className="metric">
              <strong>{data.inbox.approvals}</strong>
              approvals
            </div>
          </div>
        </div>

        <div className="recommendation">
          <div className="recommendation-title">
            RECOMMENDED NEXT ACTION
          </div>

          <div className="focus">
            {recommendation.title}
          </div>

          <div className="reason">
            {recommendation.reason}
          </div>
        </div>
      </section>
    </>
  );
}
