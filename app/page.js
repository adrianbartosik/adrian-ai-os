"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import KpiGrid from "../components/KpiGrid";
import ArcReactor from "../components/ArcReactor";
import SystemStatus from "../components/SystemStatus";
import AIBrief from "../components/AIBrief";
import Risks from "../components/Risks";
import NextMeeting from "../components/NextMeeting";

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
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 50% 10%,
              rgba(18, 171, 219, 0.2) 0%,
              transparent 36%
            ),
            radial-gradient(
              circle at top,
              #0b2d42 0%,
              #041018 38%,
              #000000 100%
            );
          color: #ffffff;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
        }

        .kpi-section {
          margin-top: 24px;
        }

        .command-grid {
          display: grid;
          grid-template-columns: minmax(240px, 1fr) minmax(320px, 1.3fr) minmax(
              240px,
              1fr
            );
          gap: 28px;
          align-items: center;
          margin-top: 48px;
        }

        .system-panel {
          min-width: 0;
        }

        .reactor-panel {
          min-width: 0;
          padding: 12px 0 42px;
        }

        .brief-panel {
          min-width: 0;
        }

        .bottom-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 42px;
          padding-bottom: 32px;
        }

        @media (max-width: 1050px) {
          .command-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: stretch;
          }

          .reactor-panel {
            grid-column: 1 / -1;
            grid-row: 1;
            padding: 10px 0 45px;
          }

          .system-panel {
            grid-column: 1;
            grid-row: 2;
          }

          .brief-panel {
            grid-column: 2;
            grid-row: 2;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 16px;
          }

          .command-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 32px;
          }

          .reactor-panel {
            grid-column: 1;
            grid-row: 1;
            padding-bottom: 38px;
          }

          .system-panel {
            grid-column: 1;
            grid-row: 2;
          }

          .brief-panel {
            grid-column: 1;
            grid-row: 3;
          }

          .bottom-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 24px;
          }
        }

        @media (max-width: 420px) {
          .page {
            padding: 12px;
          }

          .kpi-section {
            margin-top: 18px;
          }

          .command-grid {
            margin-top: 24px;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <Header time={time} />

          <section className="kpi-section">
            <KpiGrid />
          </section>

          <section className="command-grid">
            <div className="system-panel">
              <SystemStatus />
            </div>

            <div className="reactor-panel">
              <ArcReactor />
            </div>

            <div className="brief-panel">
              <AIBrief />
            </div>
          </section>

          <section className="bottom-grid">
            <Risks />
            <NextMeeting />
          </section>
        </div>
      </main>
    </>
  );
}
