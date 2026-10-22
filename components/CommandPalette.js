export default function CommandPalette() {
  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#12abdb",
        }}
      >
        ACTION CENTER
      </h2>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        <button className="action-btn">
          Review Contract Extensions
        </button>

        <button className="action-btn">
          Open Approval Queue
        </button>

        <button className="action-btn">
          Prepare Leadership Sync
        </button>

        <button className="action-btn">
          Review Escalations
        </button>
      </div>

      <style jsx>{`
        .action-btn {
          background: rgba(18, 171, 219, 0.08);
          border: 1px solid rgba(18, 171, 219, 0.4);
          color: white;
          padding: 14px;
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
          transition: 0.2s;
        }

        .action-btn:hover {
          background: rgba(18, 171, 219, 0.16);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
