export default function CommanderPanel({
  actions,
}) {
  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <div
        style={{
          color: "#0070AD",
          fontSize: "12px",
          letterSpacing: "2px",
          marginBottom: "16px",
        }}
      >
        WHAT SHOULD I DO NEXT?
      </div>

      {actions.map((action, index) => (
        <div
          key={action.title}
          style={{
            marginBottom: "20px",
            paddingBottom: "16px",
            borderBottom:
              "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            {index + 1}. {action.title}
          </div>

          <div
            style={{
              color: "#B8D1DF",
              marginTop: "4px",
            }}
          >
            {action.description}
          </div>

          <div
            style={{
              marginTop: "8px",
              color:
                action.priority === "HIGH"
                  ? "#FF6B6B"
                  : "#F4B942",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            {action.priority}
          </div>
        </div>
      ))}
    </div>
  );
}
