"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import TopStatusBar from "../components/TopStatusBar";
import KpiGrid from "../components/KpiGrid";
import ArcReactor from "../components/ArcReactor";
import SystemStatus from "../components/SystemStatus";
import AIBrief from "../components/AIBrief";
import Risks from "../components/Risks";
import NextMeeting from "../components/NextMeeting";
import DecisionQueue from "../components/DecisionQueue";
import Priorities from "../components/Priorities";
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

  return (
    <>
      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 24px;

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
              #041018 35%,
              #000000 100%
            );

          background-size:
            40px 40px,
            40px 40px,
            cover;

          color: white;
          font-family: Segoe UI, sans-serif;
        }

        .container {
          max-width: 1700px;
          margin: 0 auto;
        }

        .glass {
          position: relative;

          background: rgba(255, 255, 255, 0.03);

          border: 1px solid rgba(
            18,
            171,
            219,
            0.25
          );

          backdrop-filter: blur(12px);

          border-radius: 18px;

          box-shadow:
            inset 0 0 12px rgba(
              18,
              171,
              219,
              0.08
            ),
            0 0 20px rgba(
              18,
              171,
              219,
              0.1
            );
        }

        .glass::before,
        .glass::after {
          content: "";

          position: absolute;

          width: 24px;
          height: 24px;

          border-color: #12abdb;
          border-style: solid;
        }

        .glass::before {
          top: 0;
          left: 0;

          border-width: 2px 0 0 2px;
        }

        .glass::after {
          bottom: 0;
          right: 0;

          border-width: 0 2px 2px 0;
        }

        .command-grid {
          display: grid;

          grid-template-columns:
            1fr
            1.4fr
            1fr;

          gap: 24px;

          margin-top: 50px;

          align-items: center;
        }

        .bottom-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 24px;

          margin-top: 24px;
        }

        @media (max-width: 1000px) {
          .command-grid {
            grid-template-columns: 1fr;
          }

          .bottom-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <Header time={time} />

          <TopStatusBar />

          <div style={{ marginTop: "24px" }}>
            <KpiGrid />
          </div>

          <div className="command-grid">
            <div className="glass">
              <SystemStatus />
            </div>

            <ArcReactor />

            <div className="glass">
              <AIBrief />
            </div>
          </div>

          <div
            className="bottom-grid"
            style={{ marginTop: "60px" }}
          >
            <div className="glass">
              <Risks />
            </div>

            <div className="glass">
              <NextMeeting />
            </div>
          </div>

          <div className="bottom-grid">
            <div className="glass">
              <DecisionQueue />
            </div>

            <div className="glass">
              <Priorities />
            </div>
          </div>

          <div
            className="glass"
            style={{
              marginTop: "24px",
              paddingBottom: "20px",
            }}
          >
            <ActivityRadar />
          </div>
        </div>
      </main>
    </>
  );
}
