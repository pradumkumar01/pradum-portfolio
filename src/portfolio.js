/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pradum Kumar's Portfolio",
  description:
    "⚡Android Developer | Open Source Enthusiast | Dart | React | MySQL⚡ Passionate about building innovative mobile and web applications.",
  og: {
    title: "Pradum Kumar Portfolio",
    type: "website",
    url: "https://pradumkumar.in/",
  },
};

//Home Page
const greeting = {
  title: "Pradum Kumar",
  logo_name: "PradumKumar",
  nickname: "",
  subTitle: "⚡Android Developer | Flutter | Dart | React | Google Admod⚡",
  resumeLink: "/cv.pdf",
  portfolio_repository: "https://github.com/pradumkumar01/pradum-portfolio",
  githubProfile: "https://github.com/pradumkumar01",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/pradumkumar01",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pradum-kumar-160538247/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:7929pradumkumar@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Mobile Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building cross-platform mobile applications using Flutter",
        "⚡ Developing native Android applications using Dart and Flutter",
        "⚡ Creating responsive and user-friendly mobile interfaces",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Fronted Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Adding Apis to connect front end to back end",
        "⚡ Building responsive front end for mobile and web applications",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
      ],
    },
    {
      title: "Database & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working with relational and non-relational databases",
        "⚡ Version control and collaborative development",
        "⚡ API development and database design",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F1502F",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing user interfaces and user experiences for mobile and web applications",
        "⚡ Creating wireframes, prototypes, and mockups using design tools",
        "⚡ Collaborating with developers to implement design specifications and ensure a seamless user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Git",
        //   fontAwesomeClassname: "simple-icons:git",
        //   style: {
        //     color: "#F1502F",
        //   },
        // },
        // {
        //   skillName: "GitHub",
        //   fontAwesomeClassname: "simple-icons:github",
        //   style: {
        //     color: "#181717",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/pradumkumar01",
    },
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/pradumkumar01",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Buddha Institute of Technology",
      subtitle: "B.Tech",
      logo_path: "iiitk_logo.png",
      alt_name: "Buddha Institute of Technology",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Pursuing B.Tech degree with focus on software development",
        "⚡ Strong foundation in programming languages and software engineering principles",
        "⚡ Active participant in coding competitions and development projects",
      ],
      website_link: "https://www.bitmeerut.ac.in",
    },
    {
      title: "Surmount International School",
      subtitle: "Intermediate",
      logo_path: "stanford_logo.png",
      alt_name: "Surmount International School",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Completed intermediate education with strong academics",
        "⚡ Developed interest in technology and programming",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Flutter Course",
      subtitle: "November 2024",
      logo_path: "flutter.png",
      certificate_link: "#",
      alt_name: "Flutter",
      color_code: "#02569B99",
    },
    {
      title: "Introduction to React Course",
      subtitle: "November 2024",
      logo_path: "react.png",
      certificate_link: "#",
      alt_name: "React",
      color_code: "#61DAFB99",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Flutter Developer with 1+ year of hands-on experience developing cross-platform mobile applications using Flutter and Dart. Skilled in building responsive, high-performance UI, managing application state, and integrating APIs. Focused on delivering scalable, user-friendly applications with clean architecture and optimized performance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Flutter Developer",
          company: "BringOn Digital",
          company_url: "#",
          logo_path: "google_logo.png",
          duration: "February 2026 - Current",
          location: "Noida",
          description:
            "Working as a Flutter Developer, building cross-platform mobile applications with focus on UI/UX and performance optimization.",
          color: "#02569B",
        },
        {
          title: "Junior Software Associate",
          company: "BrniX Media",
          company_url: "#",
          logo_path: "microsoft_logo.png",
          duration: "August 2025 - January 2026",
          location: "Gorakhpur",
          description:
            "Developed software solutions and contributed to various projects. Gained experience in full-stack development and system architecture.",
          color: "#D83B01",
        },
        {
          title: "App Developer",
          company: "DigiQuest Consultancy Services Private Limited",
          company_url: "#",
          logo_path: "digiquest.png",
          duration: "Feb 2025 - July 2025",
          location: "Gorakhpur",
          description:
            "As an App Developer, working on mobile application development using modern frameworks and best practices.",
          color: "#2A73CC",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [

    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter Intern",
          company: "SPI Pvt Ltd",
          company_url: "#",
          logo_path: "spi.png",
          duration: "July 2024 - September 2024",
          location: "Lucknow",
          description:
            "Trained in Flutter framework and Dart programming language. Developed Flutter applications with focus on mobile app development best practices and modern API integration techniques.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_pradum.png",
    description:
      "I am available on GitHub and LinkedIn. Feel free to reach out to me for collaborations or discussions about Android development, Flutter, React, or any technical topics. I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document my learning experiences and share technical knowledge through articles and blogs.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "India",
    locality: "Noida Sector 63",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 6392293279",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
