import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    iiitsports,
    ssoc,
    aicursor,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/ UX Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Development",
      company_name: "Indian Institute Of Information Technology, Dharwad",
      icon: mongodb,
      iconBg: "#383E56",
      date: "February 2023 - Present",
      points: [
        "Developing and maintaining a Sports web application using Express.js, Node.js, CSS, JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality website.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
      title: "Web Development",
      company_name: "Sukoon - Social Summer of Code",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "August 2022 - October 2022",
      points: [
        "Developing web applications using HTML, CSS, JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Fitnezz - Social Summer of Code",
      icon: css,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing web applications using HTML, CSS, JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
      }
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SSOC Web Development",
      description:
        "As an HTML, CSS, and JS web developer, I contributed to the development of websites for Sukoon and Fitnezz organizations during my work in Social Summer of Code.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: ssoc,
      source_code_link: "https://github.com/Susmita-Dey/Sukoon",
    },
    {
      name: "IIIT Dharwad Sports Website",
      description:
        "The IIIT DWD sports website is a hub for all sports enthusiasts, providing information on various sports events, teams, schedules, and updates. It serves as a one-stop platform for the IIIT DWD community to stay connected and engaged in sports activities on campus.",
      tags: [
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: iiitsports,
      source_code_link: "https://github.com/Ashxsh1/IIIT-DWD-Sports-Website",
    },

    {
      name: "AI Virtual Mouse",
      description:
        "AI Virtual Mouse is a computer vision project that utilizes your device's camera to detect and track your hand movements, allowing you to use your hand as a virtual mouse.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "pyautogui",
          color: "pink-text-gradient",
        },
      ],
      image: aicursor,
      source_code_link: "https://github.com/Ashxsh1/AI-Virtual-Mouse",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };