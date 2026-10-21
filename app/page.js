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
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
          }}
        >
          {/* LEFT */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h2 style={{ color: "#6dd6ff" }}>
                AI BRIEF
              </h2>

              <ul
                style={{
                  lineHeight: 2,
                  fontSize: "18px",
                }}
              >
                <li>3 people waiting for decisions</li>
                <li>2 approvals pending</li>
                <li>Contract extensions require review</li>
                <li>Leadership update due this week</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h2 style={{ color: "#6dd6ff" }}>
                TODAY'S AGENDA
              </h2>

              <div style={{ lineHeight: 2 }}>
                <div>09:00 • Leadership Sync</div>
                <div>11:00 • Customer Review</div>
                <div>15:00 • 1:1 Krzysztof</div>
                <div>16:30 • Staffing Review</div>
              </div>
            </div>

            <div style={cardStyle}>
              <h2 style={{ color: "#6dd6ff" }}>
                DECISION QUEUE
              </h2>

              <p>
                Items awaiting your approval
              </p>

              <ul style={{ lineHeight: 2 }}>
                <li>Contract extension</li>
                <li>Hiring request</li>
                <li>Budget approval</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h2 style={{ color: "#6dd6ff" }}>
                NEXT MEETING
              </h2>

              <h3>Leadership Sync</h3>

              <p>15:00</p>

              <p>Preparation Score</p>

              <div
                style={{
                  background: "#203748",
                  height: "12px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "84%",
                    height: "100%",
                    background: "#6dd6ff",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "10px",
                  color: "#6dd6ff",
                }}
              >
                84%
              </div>
            </div>

            <div style={cardStyle}>
              <h2 style={{ color: "#6dd6ff" }}>
                RISKS
              </h2>

              <ul style={{ lineHeight: 2 }}>
                <li>2 unanswered emails &gt; 5 days</li>
                <li>1 overdue action item</li>
                <li>Contract ending in 14 days</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h2 style={{ color: "#6dd6ff" }}>
                FOCUS RADAR
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>🔵 Krzysztof</div>
                <div>🔵 Mykola</div>
                <div>🔵 Justyna</div>
                <div>🔵 Artem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
