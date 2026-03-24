export const landingPageData = {
  hero: {
    eyebrow: "LANDING PAGE • HERO SECTION",
    title: "Bulacan State University\nCollege of Engineering",
    primaryButtonLabel: "Enter Department Pages",
    primaryButtonHref: "/departments",
  },
  sections: {
    missionVision: {
      id: "mission-vision",
      title: "Mission & Vision",
      assignedGroup: "Roxas, Aiam Airron L",
      statusLabel: "RESERVED SECTION",
      missionText: "Placeholder mission statement.",
      visionText: "Placeholder vision statement.",
    },
    departmentGrid: {
      id: "department-grid",
      title: "Department Grid",
      assignedGroup: "Pagdanganan, Arviella S",
      statusLabel: "RESERVED SECTION",
      introText: "Placeholder description for department grid section.",
    },
    news: {
      id: "news",
      title: "News",
      assignedGroup: "Dela Cruz, Richter Vhon C",
      statusLabel: "RESERVED SECTION",
      items: [
        { title: "Placeholder News 1", date: "2026-03-05" },
        { title: "Placeholder News 2", date: "2026-03-05" },
      ],
    },
    facilities: {
      id: "facilities",
      title: "Facilities",
      assignedGroup: "Jones, Colleen Iris P",
      statusLabel: "RESERVED SECTION",
      highlights: ["Placeholder Facility 1", "Placeholder Facility 2"],
    },
    statistics: {
      id: "statistics",
      title: "Statistics",
      assignedGroup: "Pascual, Alyssa S.",
      statusLabel: "RESERVED SECTION",
      stats: [
        { label: "Programs", value: "8" },
        { label: "Students", value: "0" },
      ],
    },
    contact: {
      id: "contact",
      title: "Contact",
      assignedGroup: "Pagayunan, Lhara Mei R",
      statusLabel: "RESERVED SECTION",
      email: "coe@example.edu",
      phone: "+63 000 000 0000",
      address: "Bulacan State University",
    },
    footer: {
      id: "footer",
      title: "Footer",
      assignedGroup: "Villareal, Trisha Mae",
      statusLabel: "RESERVED SECTION",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
      phone: "(044) 919 7800",
      email: "engineering@bulsu.edu.ph",
      address: "Bulacan State University, Engineering Building, Malolos City",
      slogan: "Leading the way in engineering excellence and innovation for a better tomorrow.",
      socialLinks: [
        { label: "Facebook", href: "https://facebook.com/bulsu.coe", icon: "facebook" },
      ],
      quickLinks: [
        { label: "Site Map", href: "/sitemap" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Terms of Service", href: "/terms" },
      ],
      copyrightText: "© 2026 Bulacan State University College of Engineering. All rights reserved.",
      operatingHours: "Monday - Friday: 8:00 AM - 5:00 PM",
      contactHeader: "Contact",
      linkPreviews: {
        quickNav: [
          { label: "Department", preview: "Browse all engineering departments and programs" },
          { label: "Facilities", preview: "Explore our state-of-the-art engineering labs and facilities" },
          { label: "News", preview: "Latest news and updates from the College of Engineering" },
        ],
        departments: [
          { label: "Civil", preview: "Civil Engineering • 780 Students", logo: "/departments/CE/logo.png" },
          { label: "Computer", preview: "Computer Engineering • 733 Students", logo: "/departments/CPE/logo.png" },
          { label: "Mechanical", preview: "Mechanical Engineering • 512 Students", logo: "/departments/ME/logo.png" },
          { label: "Industrial", preview: "Industrial Engineering • 567 Students", logo: "/departments/IE/logo.png" },
          { label: "Electrical", preview: "Electrical Engineering • 555 Students", logo: "/departments/EE/logo.png" },
          { label: "Electronics", preview: "Electronics Engineering • 462 Students", logo: "/departments/ECE/logo.png" },
          { label: "Mechatronics", preview: "Mechatronics Engineering • 361 Students", logo: "/departments/MEE/logo.png" },
          { label: "Manufacturing", preview: "Manufacturing Engineering • 330 Students", logo: "/departments/MFE/logo.png" },
        ],
        footerLinks: [
          { label: "Site Map", preview: "Navigate all pages and sections of the website" },
          { label: "Accessibility", preview: "Accessibility features and compliance information" },
          { label: "Terms of Service", preview: "Read our terms and conditions" },
        ],
      },
      animations: {
        linkHover: {
          type: "scale-shadow",
          scale: 1.05,
          duration: 200,
          shadowColor: "rgba(153, 27, 27, 0.15)",
        },
        socialIconHover: {
          type: "rotate-scale",
          rotate: 10,
          scale: 1.15,
          duration: 250,
        },
        sectionFadeIn: {
          type: "stagger-fade",
          duration: 600,
          staggerDelay: 100,
        },
        colorTransition: {
          hoverColor: "text-yellow-400",
          duration: 300,
          accentColor: "#FBBF24",
        },
      },
      backToTop: {
        enabled: true,
        label: "Back to Top",
        scrollSpeed: 300,
      },
    },
  },
};

export type LandingPageData = typeof landingPageData;
