export default function Header({
  time,
  dateInfo,
}) {
  return (
    <>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 112, 173, 0.3);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .logo {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .tag {
          color: #0070ad;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .title {
          margin: 6px 0;
          color: #0070ad;
          font-size: 56px;
          font-weight: 700;
          line-height: 1;
        }

        .date {
          margin-top: 8px;
          color: #8fbcd6;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .subtitle {
          margin-top: 6px;
          color: #b8d1df;
        }

        .clockBox {
          text-align: right;
        }

        .clock {
          font-size: 42px;
          color: #0070ad;
          font-weight: 700;
          text-shadow: 0 0 12px rgba(0, 112, 173, 0.35);
        }

        .clockLabel {
          margin-top: 6px;
          color: #8fbcd6;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .clockBox {
            text-align: left;
          }

          .title {
            font-size: 40px;
          }

          .clock {
            font-size: 32px;
          }

          .logo {
            height: 36px;
          }
        }

        @media (max-width: 600px) {
          .brand {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .title {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="header">
        <div className="brand">
          <img
            src="/Capgemini_Engineering_Primary-logo_Capgemini-Blue.png"
            alt="Capgemini Engineering"
            className="logo"
          />

          <div>
            <div className="tag">
              ENGINEERING COMMAND CENTER
            </div>

            <h1 className="title">
              ADRIAN AI OS
            </h1>

            <div className="date">
              {dateInfo}
            </div>

            <div className="subtitle">
              Chief of Staff Intelligence Platform
            </div>
          </div>
        </div>

        <div className="clockBox">
          <div className="clock">
            {time}
          </div>

          <div className="clockLabel">
            LOCAL SYSTEM TIME
          </div>
        </div>
      </div>
    </>
  );
}
