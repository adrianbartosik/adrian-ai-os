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
import ActivityRadar from "../components/ActivityRadar";
import CommanderPanel from "../components/CommanderPanel";
import ScoreTrend from "../components/ScoreTrend";

export default function Home() {
  const [time, setTime] = useState("--:--");
  const [dateInfo, setDateInfo] = useState("");

  useEffect(() => {
    const updateClock = () => {
  const now = new Date();

  setTime(
    now.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  setDateInfo(
    now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) + " CET"
  );
};

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

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
          border: 1px solid
            rgba(18, 171, 219, 0.25);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          box-shadow:
            inset 0 0 12px
              rgba(18, 171, 219, 0.07),
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
          border-color: #0070AD;
          border-style: solid;
          filter: drop-shadow(0 0 5px #0070AD);
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
  position: relative;
  margin-top: 44px;
}
.watermark {
  position: absolute;

  left: 50%;
  top: 55%;

  transform: translate(-50%, -50%);

  width: 800px;
  max-width: 70vw;

  opacity: 0.05;

  pointer-events: none;

  filter:
    grayscale(100%)
    brightness(3);

  z-index: 0;
}

.watermark-section > *:not(.watermark) {
  position: relative;
  z-index: 1;
}
        .support-grid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .score-panel {
          padding: 24px;
        }

        .score-title {
          margin-top: 0;
          color: #0070AD;
        }

        .score-lines {
          display: grid;
          gap: 10px;
        }

        .score-line {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          color: #9bb7c7;
        }

        .score-value {
          color: #ffffff;
          font-weight: 700;
        }

        .score-total {
          margin-bottom: 0;
          color: #0070AD;
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

          .decision-section {
            margin-top: 32px;
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
         <Header
  time={time}
  dateInfo={dateInfo}
/>

          <TopStatusBar />

          <MorningBrief data={mockData} />

          <div style={{ marginTop: "24px" }}>
            <KpiGrid data={mockData} />
          </div>

         <section className="decision-section watermark-section">
  <img
    src="/Capgemini_Engineering_Primary-logo_Capgemini-Blue.png"
    alt="Capgemini Engineering"
    className="watermark"
  />

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
              <NextMeeting
                meeting={mockData.meetings}
              />
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
    <CommanderPanel
      actions={mockData.commanderActions}
    />
  </div>

  <div className="glass">
    <ScoreTrend
      score={mockData.executiveScore}
      trend={mockData.scoreTrend}
      status={mockData.scoreStatus}
    />
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
    
