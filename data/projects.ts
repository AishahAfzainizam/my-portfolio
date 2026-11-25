export type Project = {
  title: string;
  year: string;
  description: string;
  tech: string[];
  //link: string;
};

export const projects: Project[] = [
  {
    title: "Website Development & UI/UX",
    year: "2026",
    description:
      "Building and improving website using WordPress. Redesigning a site, added interactive elements in pages, improving loading speed and more",
    tech: ["WordPress", "JavaScript", "HTML", "CSS", "PHP"],
    //link: "https://github.com/your-username/,
  },
  {
    title: "Test Automation",
    year: "2025",
    description:
      "Built automated regression scripts in UFT One that reduced a 3-hour manual testing task to 55 seconds, working in an Agile team with JIRA and GitLab.",
    tech: ["UFT One", "JIRA", "GitLab"],
    //link: "https://github.com/your-username/",
  },
  {
    title: "eCare - Cloud Based Healthcare Record System (Final Year Project)",
    year: "2024",
    description:
      "A secure patient record platform deployed on Google Cloud, with user authentication and role-based access control, so each user sees only what they should.",
    tech: ["PHP", "JavaScript", "Google Cloud SQL"],
    //link: "https://github.com/your-username/rainchecker",
  },
  {
    title: "ASH Donut Shop",
    year: "2024",
    description:
      "A food ordering app with product browsing, cart management, and order placement. Focusing on a clean, intuitive interface and tested every user flow before finishing.",
    tech: ["Java", "Android Studio", "Google Maps API"],
    //link: "https://github.com/your-username/kedai-ledger",
  },
  
];
