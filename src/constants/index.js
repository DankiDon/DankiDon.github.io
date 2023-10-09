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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    nus,
    factorem,
    autodeskfusion360,
    hyperganic,
    carrent,
    jobit,
    tripguide,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mechanical Design",
      icon: web,
    },
    {
      title: "Deep Learning/ AI",
      icon: mobile,
    },
    {
      title: "Data Analytics",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fusion360 Student Catalyst",
      company_name: "Autodesk",
      company_weblink: "https://www.autodesk.com.sg/products/fusion-360/overview",
      icon: autodeskfusion360,
      iconBg: "#383E56",
      date: "Feb 2021 - Feb 2022",
      points: [
        "Taught over 300 students for a wide range of topics across 45 hours",
        "Designed and prepared materials to teach Fusion360, Design for manufacturing and 3D printing crash course",
      ],
    },
    {
      title: "Manufacturing Engineer Intern",
      company_name: "Factorem",
      company_weblink: "https://factorem.co/",
      icon: factorem,
      iconBg: "#E6DEDD",
      date: "May 2021 - Sept 2021",
      points: [
        "Developed a 3D printed calibration cube for QA/QC, enabling the company to onboard quality 3D printing manufacturers",
        "Performed designed for manufacturing checks on 380 parts (CNC, 3DP, laser cutting)",
        "Created a partner ranking system by analysing quantitative and qualitative data from the server using python and google sheets",
      ],
    },
    {
      title: "Mechanical Engineer",
      company_name: "NUS (Project Ugo)",
      company_weblink: "https://nus.edu.sg/",
      icon: nus,
      iconBg: "#383E56",
      date: "Oct 2021 - Aug 2022",
      points: [
        "Designed and deployed a container detection model using Tensorflow lite and Opencv on the raspberry pi (MobileNet)",
        "Lead a cross-functional team of 9 to develop a reusable container returns system",
        "Developed a reverse vending machine using CNC, sheet metal 316L, reducing the price by 70%",
        "Initiated a project to automate and enable the returning of reusable packaging in NUS to reduce packaging waste in canteens to 0%",
        "Pitched and awarded S$10,000 to carry out trials in NUS"
      ],
    },
    {
      title: "Algorithmic Engineer Intern",
      company_name: "Hyperganic",
      company_weblink: "https://www.hyperganic.com/",
      icon: hyperganic,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - July 2022",
      points: [
        "Created custom applications in C# and XML to generate performance based lattice objects for customers",
        "Designed and prototyped 3D printed bicycle, orthopedic and medical parts for testing using SLA and FDM",
        "Implemented 2D pressure maps to modulate thickness of lattice structures to improve weight and performance",
      ],
    },
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };