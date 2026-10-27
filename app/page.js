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
import CommanderPanel from "../components/CommanderPanel";
import ScoreTrend from "../components/ScoreTrend";
import ActivityRadar from "../components/ActivityRadar";
import JarvisGreeting from "../components/JarvisGreeting";

export default function Home() {
  const [time, setTime] = useState("--:--:--");
  const [dateInfo, setDateInfo] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/Warsaw",
        })
      );

      setDateInfo(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "Europe/Warsaw",
        })
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
          color: #ffffff;
          font-family: "Segoe UI", Arial, sans-serif;

          background:
            linear-gradient(
              rgba(0, 112, 173, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0, 112, 173, 0.04) 1px,
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
        }

        .container {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
        }

        .glass {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 112, 173, 0.3);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          box-shadow:
            inset 0 0 12px rgba(0, 112, 173, 0.08),
            0 0 20px rgba(0, 112, 173, 0.1);
        }

        .glass::before,
        .glass::after {
          content: "";
          position: absolute;
          z-index: 2;
          width: 24px;
          height: 24px;
          pointer-events: none;
          border-color: #0070ad;
          border-style: solid;
          filter: drop-shadow(0 0 5px #0070ad);
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
          top: 55%;
          left: 50%;
          z-index: 0;

          width: 800px;
          max-width: 70vw;

          opacity: 0.05;
          pointer-events: none;

          transform: translate(-50%, -50%);

          filter: saturate(0.8) brightness(2);
        }

        .watermark-section > *:not(.watermark) {
          position: relative;
          z-index: 1;
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

          .decision-section {
            margin-top: 32px;
          }

          .watermark {
            width: 650px;
            max-width: 90vw;
          }
        }

        @media (max-width: 440px) {
          .page {
            padding: 12px;
          }

          .watermark {
            top: 45%;
            max-width: 96vw;
            opacity: 0.035;
          }
        }
      `}</style>

      <main className="page">
        <JarvisGreeting />

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
            
            /Capgemini_Engineering_Primary-logo_Capgemini-Blue.png

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
