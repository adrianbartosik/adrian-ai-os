"use client";

import { useEffect, useState } from "react";

import { mockData } from "../data/mockData";

import Header from "../components/Header";
import TopStatusBar from "../components/TopStatusBar";
import MorningBrief from "../components/MorningBrief";
import KpiGrid from "../components/KpiGrid";
import DecisionIntelligence from "../components/DecisionIntelligence";
import SystemStatus from "../components/SystemStatus";
import AIBrief from "../components/AIBrief";
import Risks from "../components/Risks";
import NextMeeting from "../components/NextMeeting";
import DecisionQueue from "../components/DecisionQueue";
import Priorities from "../components/Priorities";
import CommandPalette from "../components/CommandPalette";
import ActivityRadar from "../components/ActivityRadar";

export default function Home() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const actions = mockData.decisions.map(
    (decision) => decision.title
  );

  return (
    <>
      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 24px;
          overflow-x: hidden;
          background:
            linear-gradient(
              rgba(18, 171, 219, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(18, 171, 219, 0.04) 1px,
              transparent 1px
            ),
            radial-gradient(
              circle at top,
              #0b2d42 0%,
              #041018 38%,
              #000000 100%
            );
          background-size:
            40px 40px,
            40px 40px,
            cover;
          color: #ffffff;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
        }

        .glass {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(18, 171, 219, 0.25);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          box-shadow:
            inset 0 0 12px rgba(18, 171, 219, 0.07),
            0 0 20px rgba(18, 171, 219, 0.09);
        }

        .glass::before,
        .glass::after {
          content: "";
          position: absolute;
          z-index: 2;
          width: 24px;
          height: 24px;
          pointer-events: none;
          border-color: #12abdb;
          border-style: solid;
          filter: drop-shadow(0 0 5px #12abdb);
        }

        .glass::before {
          top: 0;
          left: 0;
          border-width: 2px 0 0 2px;
        }

        .glass::after {
          right: 0;
          bottom: 0;
          border-width: 0 2px 2px 0;
        }

        .decision-section {
          margin-top: 44px;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .activity {
          margin-top: 24px;
          margin-bottom: 40px;
        }

        @media (max-width: 800px) {
          .page {
            padding: 16px;
          }

          .support-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }

        @media (max-width: 440px) {
          .page {
            padding: 12px;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <Header time={time} />

          <TopStatusBar />

          <MorningBrief />

          <div style={{ marginTop: "24px" }}>
            <KpiGrid data={mockData} />
          </div>

          <section className="decision-section">
            <DecisionIntelligence data={mockData} />
          </section>

          <section className="support-grid">
            <div className="glass">
              <SystemStatus />
            </div>

            <div className="glass">
              <AIBrief items={mockData.aiBrief} />
            </div>
          </section>

          <section className="support-grid">
            <div className="glass">
              <Risks risks={mockData.risks} />
            </div>

            <div className="glass">
              <NextMeeting />
            </div>
          </section>

          <section className="support-grid">
            <div className="glass">
              <DecisionQueue
                decisions={mockData.decisions}
              />
            </div>

            <div className="glass">
              <Priorities
                priorities={mockData.priorities}
              />
            </div>
          </section>

          <section className="support-grid">
            <div className="glass">
              <CommandPalette actions={actions} />
            </div>

            <div className="glass">
              <div style={{ padding: "24px" }}>
                <h2
                  style={{
                    marginTop: 0,
                    color: "#12abdb",
                  }}
                >
                  SCORE BREAKDOWN
                </h2>

                <div>
                  Base score: {mockData.scoreFactors.base}
                </div>

                <div>
                  Meeting preparation: +
                  {mockData.scoreFactors.meetingPreparation}
                </div>

                <div>
                  Completed approvals: +
                  {mockData.scoreFactors.completedApprovals}
                </div>

                <div>
                  Inbox control: +
                  {mockData.scoreFactors.inboxControl}
                </div>

                <div>
                  Open risks:{" "}
                  {mockData.scoreFactors.openRiskPenalty}
                </div>

                <h3 style={{ color: "#12abdb" }}>
                  Total: {mockData.executiveScore}%
                </h3>
              </div>
            </div>
          </section>

          <div className="glass activity">
            <ActivityRadar />
          </div>
        </div>
      </main>
    </>
  );
}
