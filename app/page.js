"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import ExecutiveScore from "../components/ExecutiveScore";
import KpiGrid from "../components/KpiGrid";

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
          "radial-gradient(circle at top, #12304a 0%, #050505 40%, #000000 100%)",
        color: "#ffffff",
        padding: "24px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Header time={time} />

        <ExecutiveScore />

        <div style={{ marginTop: "24px" }}>
          <KpiGrid />
        </div>
      </div>
    </main>
  );
}
