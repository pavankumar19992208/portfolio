// Portfolio Data
const portfolioData = {
  personalInfo: {
    name: "JAGARAPU PAVANKUMAR",
    title: "Specialist Programmer | Full Stack Developer | AI Engineer",
    location: "Hyderabad, Telangana",
    phone: "+91-9182442102",
    email: "pavankumar19992208@gmail.com",
    summary:
      "Results-driven Full Stack Developer with 1+ years of experience in cloud engineering, CI/CD automation, and agentic AI development. Proven expertise in React, React Native, Node.js, AWS cloud services, and modern development practices. Currently building innovative AI-powered applications and automation solutions.",
  },
  experience: [
    {
      title: "Software Development Engineer",
      company: "Potlam Retail Concepts Private Limited",
      duration: "Nov 2024 - Present",
      responsibilities: [
        "Developed and maintained full-stack applications using React, React Native, and Express.js serving 10,000+ users",
        "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%",
        "Managed AWS cloud infrastructure including EC2, RDS, S3, and Nginx server configurations",
        "Built secure authentication systems using JWT across web and mobile applications",
        "Integrated Firebase services for real-time push messaging and cloud storage solutions",
        "Collaborated with cross-functional teams to deliver features on time and within budget",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company: "Jama Wealth",
      duration: "Apr 2024 - Jul 2024",
      responsibilities: [
        "Fixed critical bugs in React Native mobile application improving app stability and user experience",
        "Worked on Django backend systems to enhance portfolio analysis features for stock advisory platform",
        "Implemented client requirement changes in single codebase architecture",
        "Delivered bug-free code following industry best practices and coding standards",
      ],
    },
    {
      title: "Software Development Engineer Freelancer",
      company: "Airforce Academy",
      duration: "Feb 2024 - Mar 2024",
      responsibilities: [
        "Developed Flask applications for video processing and audio extraction with profanity detection",
        "Built face recognition system with OpenCV for attendance tracking and CSV export functionality",
        "Implemented Python-based solutions for multimedia processing and data analysis",
      ],
    },
  ],
  projects: [
    {
      title: "NeuraLife AI Market - Agentic AI Marketplace",
      duration: "Sep 2025 - Present",
      description:
        "Developing a comprehensive AI marketplace for students and businesses, featuring a monetization system, an incubation framework, and B2B custom agent development.",
      features: [
        "Monetization system with Google AdSense for AI agents.",
        "Incubation framework to turn academic projects into startups.",
        "B2B custom AI agent development services.",
        "Scalable architecture for multiple AI agent categories.",
      ],
      techStack: [
        "Full Stack Development",
        "AI/ML",
        "Cloud Architecture",
        "Monetization APIs",
      ],
      category: "Web Platform",
      status: "BUILT MVP",
      github:
        "https://github.com/pavankumar19992208/personalprojects/tree/main/frontend/neuralife-ai-market",
      live: "https://pavankumar19992208.github.io/personalprojects/neuralife-ai-market/",
      images: [],
      videos: [],
    },
    {
      title: "Personal Projects Showcase",
      duration: "Ongoing",
      description:
        "A centralized hub hosted on GitHub Pages that lists and provides access to various personal projects and experiments.",
      features: [
        "Central directory for live project demos.",
        "Hosted via GitHub Pages for easy access.",
        "Demonstrates deployment and CI/CD practices.",
      ],
      techStack: ["GitHub Pages", "HTML", "CI/CD"],
      category: "Web Platform",
      status: "Completed",
      github: "https://github.com/pavankumar19992208/personalprojects",
      live: "https://pavankumar19992208.github.io/personalprojects/",
      images: [],
      videos: [],
    },
    {
      title: "Code Version Upgrade Assistant",
      duration: "Aug 2025 - Sep 2025",
      description:
        "Developing an AI-powered tool for automated React application upgrades, integrating with npm registries and using LLMs for intelligent code refactoring and migration.",
      features: [
        "npm registry integration for dependency version checking.",
        "LLMs (Gemini/OpenAI) for intelligent code refactoring.",
        "Automated testing validation for upgrade verification.",
        "n8n workflow orchestration for end-to-end automation.",
      ],
      techStack: ["React", "n8n", "LLMs", "npm APIs", "Automated Testing"],
      category: "Developer Tool",
      status: "BUILT MVP",
      github:
        "https://github.com/pavankumar19992208/personalprojects/tree/main/frontend/upgrade-agent",
      live: null,
      architecture:
        "https://upgradeagent.s3.amazonaws.com/upgradeagent_arch.svg",
      images: [
        "https://upgradeagent.s3.amazonaws.com/version_upgrade1.png",
        "https://upgradeagent.s3.amazonaws.com/version_upgrade2.png",
        "https://upgradeagent.s3.amazonaws.com/version_upgrade3.png",
        "https://upgradeagent.s3.amazonaws.com/version_upgrade4.png",
      ],
      videos: ["https://upgradeagent.s3.amazonaws.com/version_upgrade_vid.mp4"],
    },
    {
      title: "AI NFT Minter on Cardano",
      duration: "Oct 2025",
      description:
        "A DApp that empowers anyone to create unique, AI-generated NFTs on the Cardano blockchain by simply describing an idea in plain language.",
      features: [
        "AI art generation from text prompts via Replicate API (Stable Diffusion).",
        "Direct NFT minting to the user's Cardano wallet (Lace, Nami, etc.).",
        "Seamless Web3 transaction building and signing with MeshJS.",
        "On-chain metadata storage for image URLs and AI prompts.",
      ],
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Cardano",
        "MeshJS",
        "Replicate API",
        "Blockfrost",
      ],
      category: "Web3 DApp",
      status: "Completed",
      github: "https://github.com/pavankumar19992208/ai-nft-minter-cardano",
      live: null,
      images: [],
      videos: ["https://upgradeagent.s3.amazonaws.com/nftmint_vid.mp4"],
    },
    {
      title: "AI Tutor Agent - Educational Platform",
      duration: "Jul 2025 - Aug 2025",
      description:
        "Built a multi-agent AI tutoring system using Vertex AI and Gemini LLMs, featuring RAG for context injection and personalized learning paths.",
      features: [
        "RAG (Retrieval Augmented Generation) with ChromaDB.",
        "React frontend with a FastAPI backend for a seamless UX.",
        "Personalized learning paths based on student grade.",
        "Deployed with a full CI/CD pipeline on cloud platforms.",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "React",
        "Vertex AI",
        "ChromaDB",
        "Gemini",
      ],
      category: "AI Platform",
      status: "Completed",
      github: "https://github.com/your-username/ai-tutor",
      live: null,
      images: [],
      videos: ["https://upgradeagent.s3.amazonaws.com/aitutor_vid.mp4"],
    },
    {
      title: "Kitchen App - Smart Cooking Assistant",
      duration: "[developmentpahse]",
      description:
        "Building an AI-powered cooking assistant with image recognition for ingredient identification, festival-aware recipe recommendations, and voice-guided cooking.",
      features: [
        "React Native frontend with a FastAPI Python backend.",
        "Festival-aware recipe recommendations using cultural APIs.",
        "Voice-guided cooking assistance with text-to-speech.",
        "Planned quick-commerce integration for ingredient ordering.",
      ],
      techStack: [
        "React Native",
        "FastAPI",
        "Computer Vision",
        "AI/ML",
        "MongoDB",
      ],
      category: "Mobile App",
      status: "In Development",
      github: "https://github.com/your-username/kitchen-app",
      live: null, // No live link yet
      images: [],
      videos: [],
    },
  ],
  problemSolvingSkills: [
    {
      level: "Advanced",
      color: "var(--color-error)",
      skills: [
        { name: "Dynamic Programming", count: 13 },
        { name: "Divide and Conquer", count: 6 },
        { name: "Trie", count: 4 },
        { name: "Rolling Hash", count: 1 },
        { name: "Quickselect", count: 1 },
        { name: "Binary Indexed Tree", count: 1 },
        { name: "Segment Tree", count: 1 },
        { name: "Monotonic Stack", count: 1 },
      ],
    },
    {
      level: "Intermediate",
      color: "var(--color-warning)",
      skills: [
        { name: "Hash Table", count: 28 },
        { name: "Math", count: 25 },
        { name: "Database", count: 13 },
        { name: "Greedy", count: 10 },
        { name: "Binary Search", count: 9 },
        { name: "Bit Manipulation", count: 9 },
        { name: "Sliding Window", count: 8 },
        { name: "Recursion", count: 3 },
      ],
    },
    {
      level: "Fundamental",
      color: "var(--color-success)",
      skills: [
        { name: "Array", count: 63 },
        { name: "String", count: 34 },
        { name: "Two Pointers", count: 20 },
        { name: "Sorting", count: 16 },
        { name: "Linked List", count: 9 },
        { name: "Stack", count: 4 },
        { name: "Simulation", count: 3 },
        { name: "Matrix", count: 2 },
      ],
    },
  ],
  achievements: [
    "GATE CS Qualified - 2023, 2024",
    "Smart India Hackathon (SIH) Finalist - 2022",
    "Golden Badge - HackerRank Programming",
    "Solved 300+ Data Structures & Algorithms problems on LeetCode, HackerRank, GeeksforGeeks",
    "Gold Medal - College Level Code-a-thon Competition",
    "AIR 4010 - Coding Ninjas CodeKaze Competition",
  ],
};

export default portfolioData;
