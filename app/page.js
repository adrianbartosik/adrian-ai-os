"use client";

import { useEffect, useState } from "react";

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
        background: "#000",
        color: "#6dd6ff",
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1>ADRIAN AI OS</h1>

      <p>Chief of Staff Command Center</p>

      <h2>{time}</h2>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #6dd6ff",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h3>Executive Score</h3>
        <p>82%</p>
      </div>
    </main>
  );
}
