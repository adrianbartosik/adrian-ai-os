"use client";

import { useEffect, useState } from "react";

function calculateCountdown(meetingTime) {
  if (!meetingTime || !meetingTime.includes(":")) {
    return "TIME NOT SET";
  }

  const [hours, minutes] = meetingTime
    .split(":")
    .map(Number);

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes)
  ) {
    return "INVALID TIME";
  }

  const now = new Date();
  const target = new Date();

  target.setHours(hours);
  target.setMinutes(minutes);
  target.setSeconds(0);
  target.setMilliseconds(0);

  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return "COMPLETED";
  }

  const totalSeconds = Math.floor(difference / 1000);

  const remainingHours = Math.floor(
    totalSeconds / 3600
  );

  const remainingMinutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const remainingSeconds = totalSeconds % 60;

  return [
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  ]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

export default function NextMeeting({ meeting }) {
  const [countdown, setCountdown] =
    useState("00:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(
        calculateCountdown(meeting.nextMeetingTime)
      );
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [meeting.nextMeetingTime]);

  const preparationScore = Math.max(
    0,
    Math.min(100, meeting.preparationScore)
  );

  const countdownIsActive =
    countdown !== "COMPLETED" &&
    countdown !== "TIME NOT SET" &&
    countdown !== "INVALID TIME";

  return (
    <>
      <style jsx>{`
        .panel {
          padding: 24px;
        }

        .heading {
          margin: 0 0 18px;
          color: #12abdb;
          font-size: 22px;
        }

        .meeting-name {
          margin: 0 0 5px;
          font-size: 20px;
        }

        .meeting-time {
          margin: 0;
          color: #9bb7c7;
        }

        .countdown-label {
          margin-top: 24px;
          color: #7896a7;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-align: center;
        }

        .countdown {
          margin: 8px 0 24px;
          color: #12abdb;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 800;
          letter-spacing: 2px;
          text-align: center;
          text-shadow: 0 0 16px rgba(18, 171, 219, 0.8);
        }

        .completed {
          color: #00c389;
          font-size: 24px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 9px;
          color: #9bb7c7;
          font-size: 12px;
        }

        .progress-value {
          color: #12abdb;
          font-weight: 700;
        }

        .progress-track {
          height: 10px;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(18, 171, 219, 0.12);
        }

        .progress-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #0070ad,
            #12abdb
          );
          box-shadow:
            0 0 10px #12abdb,
            0 0 18px rgba(18, 171, 219, 0.6);
          transition: width 0.5s ease;
        }

        @media (max-width: 480px) {
          .panel {
            padding: 20px;
          }

          .countdown {
            letter-spacing: 1px;
          }
        }
      `}</style>

      <div className="panel">
        <h2 className="heading">NEXT MEETING</h2>

        <h3 className="meeting-name">
          {meeting.nextMeeting}
        </h3>

        <p className="meeting-time">
          Scheduled for {meeting.nextMeetingTime}
        </p>

        <div className="countdown-label">
          {countdownIsActive
            ? "STARTS IN"
            : "MEETING STATUS"}
        </div>

        <div
          className={
            countdownIsActive
              ? "countdown"
              : "countdown completed"
          }
        >
          {countdown}
        </div>

        <div className="progress-header">
          <span>Preparation score</span>

          <span className="progress-value">
            {preparationScore}%
          </span>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${preparationScore}%`,
            }}
          />
        </div>
      </div>
    </>
  );
}
