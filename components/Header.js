export default function Header({ time }) {
  return (
    <>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(18, 171, 219, 0.3);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .logo {
          height: 50px;
          width: auto;
          object-fit: contain;
        }

        .title {
          margin: 6px 0;
          color: #12abdb;
          font-size: 56px;
          font-weight: 700;
          line-height: 1;
        }

        .subtitle {
          color: #a8c4d6;
          margin: 0;
        }

        .clock {
          font-size: 42px;
          color: #12abdb;
          font-weight: 700;
          text-shadow: 0 0 15px rgba(18, 171, 219, 0.5);
        }

        .brand-tag {
          color: #12abdb;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 700;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .clock {
            font-size: 32px;
          }

          .title {
            font-size: 42px;
          }

          .logo {
            height: 40px;
          }
        }

        @media (max-width: 600px) {
          .brand {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .title {
            font-size: 34px;
          }

          .logo {
            height: 32px;
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
            <div className="brand-tag">
              ENGINEERING COMMAND CENTER
            </div>

            <h1 className="title">
              ADRIAN AI OS
            </h1>

            <p className="subtitle">
              Chief of Staff Intelligence Platform
            </p>
          </div>
        </div>

        <div className="clock">
          {time}
        </div>
      </div>
    </>
  );
}
