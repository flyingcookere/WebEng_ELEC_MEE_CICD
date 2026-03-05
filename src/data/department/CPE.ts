const base = "/departments/CPE"; // public folder path

export const CPE = {
  code: "CPE",
  title: "COMPUTER ENGINEERING",
  subtitle: "Bachelor of Science in Computer Engineering",



  theme: { accentHex: "#2563eb" },

  images: {
    heroLeft: `${base}/hero-left.png`,
    heroBig: `${base}/hero-big.png`,
    heroSmall1: `${base}/hero-small-1.png`,
    heroSmall2: `${base}/hero-small-2.png`,
    peo: `${base}/peo.png`,
    watermark: `${base}/watermark.png`,
  },

  programOverview: {
    heading: "Program Overview",
    text: "EDIT ME: Computer Engineering program overview.",
    stats: { nonTeaching: 111, faculty: 22, students: 333 },
  },

  peo: {
    title: "Program Educational Objectives",
    subtitle: "EDIT ME: PEO subtitle.",
    bullets: ["PEO 1...", "PEO 2...", "PEO 3..."],
  },

  so: {
    title: "Student Outcomes",
    subtitle: "EDIT ME: SO subtitle.",
    outcomes: [
      { title: "SO 1", text: "Description..." },
      { title: "SO 2", text: "Description..." },
      { title: "SO 3", text: "Description..." },
    ],
  },

  curriculum: {
    title: "Curriculum Overview",
    text: "EDIT ME: curriculum overview text.",
    bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
  },

  laboratories: {
    title: "Laboratories",
    items: ["Materials Lab", "Surveying Lab", "Hydraulics Lab"],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Engr. Sample 1", role: "Chair" },
      { name: "Engr. Sample 2", role: "Faculty" },
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "EDIT ME: careers subtitle.",
    cards: [
      { icon: "🏗️", title: "Site Engineer", text: "Description..." },
      { icon: "📐", title: "Structural Engineer", text: "Description..." },
      { icon: "🌉", title: "Project Engineer", text: "Description..." },
    ],
  },
};
