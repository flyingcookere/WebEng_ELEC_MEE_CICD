const base = "/departments/MEE";

export const MEE = {
  code: "MEE",
  title: "MECHATRONICS ENGINEERING",
  subtitle: "Bachelor of Science in Mechatronics Engineering",


  theme: { accentHex: "#06b6d4" },

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
    text:
      "Mechatronics Engineering integrates mechanical systems, electronics, control systems, and computing to design and develop intelligent machines and automated systems.",
    stats: {
      nonTeaching: 14,
      faculty: 9,
      students: 500,
    },
  },

  peo: {
    title: "Program Educational Objectives",
    subtitle:
      "Graduates are expected to achieve the following objectives a few years after graduation:",
    bullets: [
      "Practice mechatronics engineering professionally in industry, government, or entrepreneurship.",
      "Demonstrate leadership, teamwork, and ethical responsibility in multidisciplinary environments.",
      "Engage in lifelong learning through advanced studies, training, certifications, and professional development.",
    ],
  },

  so: {
    title: "Student Outcomes",
    subtitle:
      "By the time of graduation, students are expected to attain the following outcomes:",
    outcomes: [
      {
        title: "Engineering Knowledge",
        text:
          "Apply knowledge of mathematics, science, engineering fundamentals, and specialization to solve complex engineering problems.",
      },
      {
        title: "Problem Analysis",
        text:
          "Identify, formulate, research literature, and analyze complex engineering problems to reach substantiated conclusions.",
      },
      {
        title: "Design / Development",
        text:
          "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for health, safety, culture, society, and environment.",
      },
    ],
  },

  curriculum: {
    title: "Curriculum Overview",
    text:
      "The curriculum develops strong foundations in mathematics and engineering sciences, then advances to automation, robotics, embedded systems, control engineering, and intelligent machine design.",
    bullets: [
      "Strong math and engineering science foundation",
      "Core mechatronics: sensors, actuators, control systems, embedded systems",
      "Integration of robotics, automation, and intelligent machines",
    ],
  },

  laboratories: {
    title: "Laboratories",
    items: [
      "Robotics and Automation Laboratory",
      "Control Systems Laboratory",
      "Embedded Systems and IoT Laboratory",
      "Electronics and Instrumentation Laboratory",
    ],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Engr. Sample Faculty 1", role: "Department Chair" },
      { name: "Engr. Sample Faculty 2", role: "Faculty Member" },
      { name: "Engr. Sample Faculty 3", role: "Faculty Member" },
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle:
      "Graduates may pursue roles in automation, robotics, manufacturing, and embedded systems development.",
    cards: [
      {
        icon: "🤖",
        title: "Robotics Engineer",
        text:
          "Design and develop robotic systems, motion control, and automation solutions.",
      },
      {
        icon: "⚙️",
        title: "Automation / Controls Engineer",
        text:
          "Implement PLC/SCADA systems, control strategies, instrumentation, and industrial automation.",
      },
      {
        icon: "🧠",
        title: "Embedded Systems Engineer",
        text:
          "Develop firmware and hardware integrations using sensors, microcontrollers, and IoT technologies.",
      },
    ],
  },
};