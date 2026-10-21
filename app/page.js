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
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
