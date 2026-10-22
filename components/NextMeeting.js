"use client";

import { useEffect, useState } from "react";

export default function NextMeeting() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const target = new Date();

    target.setHours(15);
    target.setMinutes(0);
    target.setSeconds(0);

    const update = () => {
      const now = new Date();

      const diff = target - now;

      if (diff <= 0) {
        setCountdown("LIVE");
        return;
      }

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor(
        (diff / 1000 / 60) % 60
      );
      const seconds = Math.floor(
        (diff / 1000) % 60
      );

      setCountdown(
        `${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`
      );
    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <h2
        style={{
          color: "#12abdb",
          marginTop: 0,
        }}
      >
        NEXT MEETING
      </h2>

      <h3>Leadership Sync</h3>

      <p>15:00</p>

      <div
        style={{
          fontSize: "34px",
          fontWeight: "bold",
          color: "#12abdb",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        {countdown}
      </div>

      <div
        style={{
          background: "#0c2533",
          height: "10px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "84%",
            height: "100%",
            background: "#12abdb",
            boxShadow: "0 0 12px #12abdb",
          }}
        />
      </div>

      <p
        style={{
          color: "#12abdb",
        }}
      >
        Preparation Score: 84%
      </p>
    </div>
  );
}
