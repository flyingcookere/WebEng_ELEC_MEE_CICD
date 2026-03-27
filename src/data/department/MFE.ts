const base = "/departments/MFE";

export const MFE = {
  code: "MFE",
  title: "MANUFACTURING ENGINEERING",
  subtitle: "Bachelor of Science in Manufacturing Engineering",

  theme: { accentHex: "#ef4444" },

  images: {
    heroLeft: `${base}/SME3.jpg`,
    heroBig: `${base}/SME1.jpg`,
    heroSmall1: `${base}/SME4.jpg`,
    heroSmall2: `${base}/SME2.jpg`,
    peo: `${base}/SME.jpg`,
    watermark: `${base}/MFE-Clear.png`,
  },

  programOverview: {
    heading: "Program Overview",
    text: "Edit this Program Overview text for this department.",
    stats: { nonTeaching: 0, faculty: 7, students: 342 },
  },

  peo: {
    title: "Program Educational Objectives (PEO)",
    subtitle: "3 to 5 years from now the graduates are expected to:",
    bullets: [
      "Establish themselves in manufacturing-related employment, entrepreneurship, or professional practice and demonstrate competence in applying engineering knowledge and modern tools to manufacturing systems and processes.",
      "Contribute to innovation, productivity, and quality improvement in the manufacturing sector by participating in leadership functions, research, systems improvement, and technology-based initiatives.",
      "Manifest ethical and socially responsible professional practice, promote sustainability in manufacturing, and pursue lifelong learning through continuing professional development, advanced studies, or active industry and community engagement."
    ],
  },

  so: {
    title: "Student Outcomes (SO)",
    subtitle: "Edit SO subtitle here.",
    outcomes: [
      { title: "a", text: "Apply knowledge of mathematics and science to solve complex manufacturing engineering problems" },
      { title: "b", text: "Design and conduct experiments, as well as to analyze and interpret data" },
      { title: "c", text: "Design a system, component, or process to meet desired needs within realistic constraints, in accordance with standards" },
      { title: "d", text: "Function in multidisciplinary and multi-cultural teams" },
      { title: "e", text: "Identify, formulate, and solve complex manufacturing engineering problems" },
      { title: "f", text: "Discuss professional and ethical responsibility" },
      { title: "g", text: "Communicate effectively" },
      { title: "h", text: "Identify the impacts of manufacturing engineering solutions in a global, economic, environmental, and societal context" },
      { title: "i", text: "Recognize the need for and engage in life-long learning" },
      { title: "j", text: "Analyze relevant contemporary issues" },
      { title: "k", text: "Use techniques, skills, and modern engineering tools necessary for manufacturing engineering practice" },
      { title: "l", text: "Identify and discuss engineering and management principles as a member and leader of a team and manage projects in a multidisciplinary environment" },
    ],
  },

  curriculum: {
    title: "Curriculum Overview",
    text: "Edit curriculum overview paragraph here.",
    bullets: ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4"],
  },

  laboratories: {
    title: "Laboratories",
    items: [
      { name: "Facility 1", image: `${base}/NH401.png` },
      { name: "Facility 2", image: `${base}/COE2-107.png`},
      { name: "Facility 3", image: `${base}/NH403.png`},
    ],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Engr. Nancy M. Santiago", role: "Department Chair", image: `${base}/Nancy.jpg` },
      { name: "Engr. Rachel C. Bual", role: "Faculty", image: `${base}/Rachel.jpg` },
      { name: "Engr. Cyrus Lawrence C. Bual", role: "Faculty", image: `${base}/Cyrus.jpg` },
      { name: "Engr. Jayvee L. De Robles", role: "Faculty", image: `${base}/Jayvee.jpg` },
      { name: "Engr. Niño Joselito D. Almario", role: "Faculty", image: `${base}/Almario.jpg` },
      { name: "Engr. Precious Rose F. Galvez", role: "Faculty", image: `${base}/Precious.jpg` },
      { name: "Engr. Romano A. Gabrillo", role: "Faculty", image: `${base}/Romano.jpg` },
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "Graduates are engineered to lead in the global industrial landscape, mastering the transition from raw concepts to high-precision reality.",
    cards: [
      { 
        icon: "💡", 
        title: "Process Engineer", 
        text: "Design and optimize integrated systems of personnel, equipment, and energy to maximize production efficiency and minimize waste." 
      },
      { 
        icon: "⚡", 
        title: "Automation Specialist", 
        text: "Lead the implementation of Industry 4.0 technologies, including robotics, AI-driven workflows, and smart manufacturing systems." 
      },
      { 
        icon: "⭐", 
        title: "Quality Manager", 
        text: "Oversee high-standard compliance and precision control, ensuring every product meets rigorous international engineering benchmarks." 
      },
    ],
  },
};
