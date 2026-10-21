"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "EMAILS", value: 17 },
    { title: "MEETINGS", value: 4 },
    { title: "TEAMS", value: 12 },
    { title: "TASKS", value: 6 }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #12263f 0%, #050505 45%, #000000 100%)",
        color: "white",
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px"
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "48px",
                margin: 0,
                color: "#6dd6ff"
              }}
            >
              ADRIAN AI OS
            </h1>

            <p
              style={{
                color: "#89b4c7",
                marginTop: "8px"
              }}
            >
              Chief of Staff Command Center
            </p>
          </div>

          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#78f7ff"
            }}
          >
            {time}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#09131f",
                border: "1px solid #1c4b6b",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 0 20px rgba(109,214,255,0.15)"
              }}
            >
              <div
                style={{
                  color: "#8db4c6",
                  marginBottom: "10px"
                }}
              >
                {card.title}
              </div>

              <div
                style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  color: "#6dd6ff"
                }}
              >
                {card.value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px"
          }}
        >
          <div
            style={{
              background: "#09131f",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #1c4b6b"
            }}
          >
            <h2
              style={{
                color: "#6dd6ff"
              }}
            >
              AI BRIEF
            </h2>

            <ul
              style={{
                fontSize: "18px",
                lineHeight: "2"
              }}
            >
              <li>3 people waiting for decisions</li>
              <li>2 approvals pending</li>
              <li>1 escalation risk detected</li>
              <li>Contract extensions need review</li>
            </ul>
          </div>

          <div
            style={{
              background: "#09131f",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #1c4b6b"
            }}
          >
            <h2
              style={{
                color: "#6dd6ff"
              }}
            >
              NEXT MEETING
            </h2>

            <h3>Leadership Sync</h3>

            <p>15:00</p>

            <div
              style={{
                marginTop: "15px"
              }}
            >
              Preparation Score
            </div>

            <div
              style={{
                marginTop: "10px",
                height: "10px",
                background: "#223649",
                borderRadius: "10px",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  width: "84%",
                  height: "100%",
                  background: "#6dd6ff"
                }}
              />
            </div>

            <p
              style={{
                marginTop: "10px",
                color: "#6dd6ff"
              }}
            >
              84%
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            background: "#09131f",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #1c4b6b"
          }}
        >
          <h2
            style={{
              color: "#6dd6ff"
            }}
          >
            FOCUS RADAR
          </h2>

          <p>People waiting for your attention</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "15px"
            }}
          >
            {["Krzysztof", "Mykola", "Justyna"].map((name) => (
              <div
                key={name}
                style={{
                  padding: "10px 16px",
                  borderRadius: "30px",
                  background: "#12304a",
                  color: "#7cdfff"
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
