"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#6dd6ff",
        padding: "30px",
        fontFamily: "Segoe UI",
      }}
    >
      <h1>ADRIAN AI OS</h1>

      <p>Chief of Staff Command Center</p>

      <h2>{time}</h2>

      <div
        style={{
          marginTop: "30px",
          border: "1px solid #6dd6ff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>Executive Score</h3>
        <h1>82%</h1>
      </div>
    </main>
  );
}
