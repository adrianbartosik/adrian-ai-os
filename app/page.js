"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import ExecutiveScore from "../components/ExecutiveScore";
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
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0b2d42 0%, #041018 35%, #000000 100%)",
        color: "#ffffff",
        padding: "24px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1700px",
          margin: "0 auto",
        }}
      >
        <Header time={time} />

        <ExecutiveScore />

        <div style={{ marginTop: "24px" }}>
          <KpiGrid />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr 1fr",
            gap: "24px",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          <SystemStatus />
          <ArcReactor />
          <AIBrief />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginTop: "80px",
          }}
        >
          <Risks />
          <NextMeeting />
        </div>
      </div>
    </main>
  );
}
