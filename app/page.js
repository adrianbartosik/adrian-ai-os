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

  const cardStyle = {
    background: "#09131f",
    border: "1px solid #204863",
    borderRadius: "16px",
    padding: "20px",
  };

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
        {/* HEADER */}

        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div>
            <h1
              className="title"
              style={{
                margin: 0,
                color: "#6dd6ff",
              }}
            >
              ADRIAN AI OS
            </h1>

      
