"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { title: "EMAILS", value: 17 },
    { title: "MEETINGS", value: 4 },
    { title: "TEAMS", value: 12 },
    { title: "TASKS", value: 6 },
  ];

  const cardStyle = {
    background: "#09131f",
    border: "1px solid #204863",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 0 25px rgba(109,214,255,0.10)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#12304a 0%,#050505 40%,#000000 100%)",
        color: "white",
        padding: "30px",
        fontFamily: "Segoe UI,sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "52px",
                color: "#6dd6ff",
              }}
            >
              ADRIAN AI OS
            </h1>

            <p
              style={{
                color: "#8aa9b5",
              }}
            >
              Chief of Staff Command Center
            </p>
          </div>

          <div
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              color: "#78f7ff",
            }}
          >
            {time}
          </div>
        </div>

        {/* EXECUTIVE SCORE */}

        <div
          style={{
            ...cardStyle,
            marginBottom: "25px",
          }}
        >
          <div style={{ color: "#88adc3" }}>
            EXECUTIVE SCORE
          </div>

          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#6dd6ff",
            }}
          >
            82%
          </div>

          <div style={{ color: "#65ff9d" }}>
            ↑ +4% vs last week
          </div>
        </div>

        {/* KPI */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          {stats.map((item) => (
            <div key={item.title} style={cardStyle}>
              <div
                style={{
                  color: "#90aac0",
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontSize: "44px",
                  fontWeight: "bold",
                  color: "#6dd6ff",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}

        <div
          style={{
            display
