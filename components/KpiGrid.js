const stats = [
  { title: "EMAILS", value: 17 },
  { title: "MEETINGS", value: 4 },
  { title: "TEAMS", value: 12 },
  { title: "TASKS", value: 6 },
];

export default function KpiGrid() {
  return (
    <div className="kpi-grid">
      {stats.map((item) => (
        <div
          key={item.title}
          style={{
            border: "1px solid #204863",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <div>{item.title}</div>
          <h2>{item.value}</h2>
        </div>
      ))}
    </div>
  );
}
