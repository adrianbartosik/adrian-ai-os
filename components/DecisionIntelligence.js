import ArcReactor from "./ArcReactor";

export default function DecisionIntelligence({ data }) {
  const metrics = [
    {
      label: "PENDING DECISIONS",
      value: data.decisions.length,
      tone: "#ffc857",
    },
    {
      label: "ACTIVE RISKS",
      value: data.risks.length,
      tone: "#ff6b6b",
    },
    {
      label: "APPROVALS",
      value: data.inbox.approvals,
      tone: "#12abdb",
    },
    {
      label: "MEETINGS TODAY",
      value: data.meetings.today,
      tone: "#00c389",
    },
  ];

  const positions = ["one", "two", "three", "four"];

  return (
    <>
      <style jsx>{`
        .layer {
          display: grid;
          grid-template-columns: minmax(130px, 1fr) auto minmax(
              130px,
              1fr
            );
          grid-template-areas:
            "metric-one reactor metric-two"
            "metric-three reactor metric-four";
          gap: 20px;
          align-items: center;
        }

        .reactor {
          grid-area: reactor;
          padding: 8px 0 40px;
        }

        .metric {
          padding: 15px;
          border: 1px solid rgba(18, 171, 219, 0.28);
          border-radius: 12px;
          background: rgba(6, 26, 39, 0.7);
          backdrop-filter: blur(10px);
        }

        .metric-one {
          grid-area: metric-one;
        }

        .metric-two {
          grid-area: metric-two;
        }

        .metric-three {
          grid-area: metric-three;
        }

        .metric-four {
          grid-area: metric-four;
        }

        .value {
          margin-bottom: 5px;
          font-size: 28px;
          font-weight: 800;
        }

        .label {
          color: #9bb7c7;
          font-size: 10px;
          letter-spacing: 1px;
        }

        @media (max-width: 900px) {
          .layer {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "reactor reactor"
              "metric-one metric-two"
              "metric-three metric-four";
          }
        }

        @media (max-width: 520px) {
          .layer {
            grid-template-columns: 1fr;
            grid-template-areas:
              "reactor"
              "metric-one"
              "metric-two"
              "metric-three"
              "metric-four";
          }

          .metric {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .value {
            margin: 0;
          }
        }
      `}</style>

      <section className="layer">
        {metrics.map((metric, index) => (
          <div
            className={`metric metric-${positions[index]}`}
            key={metric.label}
          >
            <div
              className="value"
              style={{ color: metric.tone }}
            >
              {metric.value}
            </div>

            <div className="label">{metric.label}</div>
          </div>
        ))}

        <div className="reactor">
          <ArcReactor score={data.executiveScore} />
        </div>
      </section>
    </>
  );
}
