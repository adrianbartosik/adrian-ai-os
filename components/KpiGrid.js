export default function KpiGrid({ data }) {
  const stats = [
    {
      title: "EMAILS",
      value: data.inbox.emails,
      detail: `${data.inbox.unanswered} unanswered`,
    },
    {
      title: "MEETINGS",
      value: data.meetings.today,
      detail: "scheduled today",
    },
    {
      title: "TEAMS",
      value: data.teams.messages,
      detail: `${data.teams.mentions} mentions`,
    },
    {
      title: "TASKS",
      value: data.tasks.open,
      detail: `${data.tasks.overdue} overdue`,
    },
  ];

  return (
    <>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .card {
          padding: 20px;
          border: 1px solid rgba(18, 171, 219, 0.3);
          border-radius: 16px;
          background: rgba(6, 26, 39, 0.68);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 18px rgba(18, 171, 219, 0.08);
        }

        .title {
          color: #9bb7c7;
          font-size: 11px;
          letter-spacing: 1.5px;
        }

        .value {
          margin: 8px 0 4px;
          color: #12abdb;
          font-size: 38px;
          font-weight: 800;
        }

        .detail {
          color: #7896a7;
          font-size: 12px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="grid">
        {stats.map((item) => (
          <div className="card" key={item.title}>
            <div className="title">{item.title}</div>
            <div className="value">{item.value}</div>
            <div className="detail">{item.detail}</div>
          </div>
        ))}
      </div>
    </>
  );
}
