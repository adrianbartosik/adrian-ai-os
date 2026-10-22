export default function TopStatusBar() {
  return (
    <>
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            opacity: 0.6;
          }

          50% {
            opacity: 1;
          }
        }

        .status {
          display: flex;
          justify-content: space-between;
          align-items: center;

          background: rgba(18, 171, 219, 0.08);

          border: 1px solid #12abdb;

          border-radius: 12px;

          padding: 12px 20px;

          margin-bottom: 24px;
        }

        .online {
          color: #00c389;
          animation: glow 2s infinite;
          font-weight: bold;
        }

        @media (max-width: 700px) {
          .status {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      <div className="status">
        <div>
          AI CORE: <span className="online">ONLINE</span>
        </div>

        <div>SYSTEMS NORMAL</div>

        <div>LAST SYNC: LIVE</div>
      </div>
    </>
  );
}
