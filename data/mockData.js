const scoreFactors = {
  base: 42,
  meetingPreparation: 20,
  completedApprovals: 15,
  inboxControl: 10,
  openRiskPenalty: -5,
};

function calculateExecutiveScore(factors) {
  const result = Object.values(factors).reduce(
    (total, value) => total + value,
    0
  );

  return Math.max(0, Math.min(100, result));
}

export const mockData = {
  executiveScore: calculateExecutiveScore(scoreFactors),

  scoreTrend: 4,

  scoreStatus: "EXCELLENT",

  scoreFactors,

  inbox: {
    emails: 17,
    approvals: 3,
    unanswered: 2,
  },

  teams: {
    messages: 12,
    mentions: 4,
  },

  tasks: {
    open: 6,
    overdue: 1,
  },

  meetings: {
    today: 4,
    nextMeeting: "Leadership Sync",
    nextMeetingTime: "15:00",
    preparationScore: 84,
  },

  risks: [
    {
      level: "high",
      text: "2 unanswered emails older than 5 days",
    },
    {
      level: "medium",
      text: "1 overdue approval",
    },
    {
      level: "medium",
      text: "Contract expires in 14 days",
    },
    {
      level: "low",
      text: "Staffing review pending",
    },
  ],

  decisions: [
    {
      priority: "high",
      title: "Contract Extension",
    },
    {
      priority: "medium",
      title: "Budget Approval",
    },
    {
      priority: "normal",
      title: "Hiring Request",
    },
    {
      priority
            title: "Customer Escalation",
    },
  ],

  priorities: [
    "Contract Extensions",
    "Leadership Updates",
    "Staffing Review",
    "Open Approvals",
  ],

  aiBrief: [
    "4 decisions require attention",
    "2 active risks detected",
    "3 approvals are waiting",
    "Leadership review requires preparation",
  ],

  recommendation: {
    title: "Review contract extension approvals",
    reason:
      "Two related decisions are waiting and one contract enters the 14-day risk window.",
  },

  activityRadar: {
    mon: 4,
    tue: 6,
    wed: 3,
    thu: 7,
    fri: 5,
  },
};
