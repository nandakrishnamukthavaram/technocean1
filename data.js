const data = [
  {
    event_name: "Tech Workshop Mobile",
    requirement:
      "Design a mobile-friendly workshop interface that accommodates various tech workshop sessions.",
    resources_used: [
      "Mobile-friendly web development tools",
      "Responsive design frameworks",
      "UI/UX design software",
    ],
    event_layout: [
      "Welcome page with event details and schedule.",
      "Navigation menu for easy access to different workshop sessions.",
      "Individual session pages with descriptions, instructors' bios, and registration options.",
      "Interactive features like live chat for Q&A during sessions.",
      "Feedback form for participants at the end of each session.",
    ],
    faculty_students_required: {
      faculty: ["Experienced instructors for each workshop session."],
      students: [
        "Student volunteers for technical support and session moderation.",
      ],
    },
    venue: "Not specified",
    event_details:
      "Tech Workshop Mobile aims to provide hands-on learning experiences in various mobile technologies, including app development, UI/UX design, and mobile optimization.",
    event_objectives: [
      "To empower participants with practical skills in mobile technology.",
      "To foster networking and collaboration among tech enthusiasts.",
      "To promote innovation and creativity in mobile app development.",
    ],
    potential_problems_loopholes: [
      "Ensuring seamless connectivity and technical support for participants joining remotely.",
      "Addressing compatibility issues across different mobile devices and platforms.",
      "Managing large attendee numbers and ensuring interactive engagement during workshop sessions.",
    ],
  },
  {
    event_name: "UI/UX Design",
    requirement:
      "Design an intuitive and visually appealing user interface for a web-based application focused on enhancing user experience.",
    resources_used: [
      "UI/UX design software",
      "Wireframing and prototyping tools",
      "User research and testing methodologies",
    ],
    event_layout: [
      "Welcome page introducing the UI/UX design challenge.",
      "Sections for wireframes, prototypes, and design iterations.",
      "User feedback mechanism for evaluating design choices.",
      "Showcase of final UI/UX design with interactive elements.",
    ],
    faculty_students_required: {
      faculty: ["Experienced UI/UX designers as judges."],
      students: [
        "Participants can be students or professionals interested in UI/UX design.",
      ],
    },
    venue: "Virtual event platform or online design collaboration tool.",
    event_details:
      "UI/UX Design event focuses on creating user-centric interfaces that prioritize usability and aesthetic appeal.",
    event_objectives: [
      "To develop skills in UI/UX design principles and methodologies.",
      "To foster creativity and innovation in user interface design.",
      "To provide constructive feedback and learning opportunities for participants.",
    ],
    potential_problems_loopholes: [
      "Ensuring clarity of design requirements and evaluation criteria.",
      "Addressing technical challenges in design software and collaboration tools.",
      "Managing time constraints for design iterations and feedback sessions.",
    ],
  },
  {
    event_name: "Tech Quiz Contest",
    requirement:
      "Develop a comprehensive set of challenging questions covering various domains of technology for a quiz contest.",
    resources_used: [
      "Knowledge of technology domains (e.g., programming languages, networking, cybersecurity)",
      "Quiz creation platforms (e.g., Kahoot, Quizizz, Google Forms)",
      "Reference materials for question verification",
    ],
    event_layout: [
      "Introduction page with event details and rules.",
      "Multiple-choice question format with time limits for each question.",
      "Leaderboard to track participants' scores in real-time.",
      "Final round with higher difficulty questions for top scorers.",
    ],
    faculty_students_required: {
      faculty: ["Quiz masters to host and moderate the contest."],
      students: ["Participants can be students or tech enthusiasts."],
    },
    venue: "Virtual event platform or online quiz platform.",
    event_details:
      "Tech Quiz Contest aims to test participants' knowledge across various technology domains through an engaging quiz format.",
    event_objectives: [
      "To assess participants' understanding of diverse technology topics.",
      "To promote learning and knowledge-sharing in the tech community.",
      "To recognize and reward participants with the highest scores.",
    ],
    potential_problems_loopholes: [
      "Ensuring fairness and accuracy in question selection and scoring mechanisms.",
      "Addressing technical issues related to online quiz platforms and connectivity.",
      "Managing participant engagement and maintaining quiz integrity throughout the event.",
    ],
  },
  {
    event_name: "Coding Contest (Code-a-thon)",
    requirement:
      "Develop a comprehensive set of challenging questions covering various domains of technology for a quiz contest.",
    resources_used: [
      "Knowledge of technology domains (e.g., programming languages, networking, cybersecurity)",
      "Quiz creation platforms (e.g., Kahoot, Quizizz, Google Forms)",
      "Reference materials for question verification",
    ],
    event_layout: [
      "Introduction page with event details and rules.",
      "Multiple-choice question format with time limits for each question.",
      "Leaderboard to track participants' scores in real-time.",
      "Final round with higher difficulty questions for top scorers.",
    ],
    faculty_students_required: {
      faculty: ["Quiz masters to host and moderate the contest."],
      students: ["Participants can be students or tech enthusiasts."],
    },
    venue: "Virtual event platform or online quiz platform.",
    event_details:
      "Tech Quiz Contest aims to test participants' knowledge across various technology domains through an engaging quiz format.",
    event_objectives: [
      "To assess participants' understanding of diverse technology topics.",
      "To promote learning and knowledge-sharing in the tech community.",
      "To recognize and reward participants with the highest scores.",
    ],
    potential_problems_loopholes: [
      "Ensuring fairness and accuracy in question selection and scoring mechanisms.",
      "Addressing technical issues related to online quiz platforms and connectivity.",
      "Managing participant engagement and maintaining quiz integrity throughout the event.",
    ],
  },
  {
    event_name: "Pi-a-thon 4.0",
    requirement:
      "Design and develop innovative projects or applications using Raspberry Pi hardware and software.",
    resources_used: [
      "Raspberry Pi boards and accessories",
      "Programming languages (Python, C/C++, etc.)",
      "Sensors, actuators, and other peripherals",
    ],
    event_layout: [
      "Introduction page with event details, rules, and theme.",
      "Project submission platform with categories for different project types.",
      "Showcase of submitted projects with descriptions and media.",
      "Judging criteria and panel of judges for evaluation.",
    ],
    faculty_students_required: {
      faculty: ["Mentors with expertise in Raspberry Pi development."],
      students: [
        "Participants can be students or hobbyists interested in IoT projects.",
      ],
    },
    venue: "Virtual event platform or online project submission platform.",
    event_details:
      "Pi-a-thon 4.0 challenges participants to unleash their creativity and technical skills by building innovative projects using Raspberry Pi.",
    event_objectives: [
      "To promote hands-on learning and experimentation with Raspberry Pi technology.",
      "To showcase the versatility and potential applications of Raspberry Pi in various domains.",
      "To recognize and reward the most creative and technically proficient projects.",
    ],
    potential_problems_loopholes: [
      "Ensuring accessibility of Raspberry Pi hardware and peripherals for all participants.",
      "Providing adequate technical support and resources for participants during project development.",
      "Managing project submissions and ensuring fair evaluation by judges.",
    ],
  },
  {
    event_name: "Robot War",
    requirement:
      "Design and build remote-controlled or autonomous robots for competitive battles in an arena.",
    resources_used: [
      "Robotics kits or custom-built robot platforms",
      "Electronic components (motors, sensors, microcontrollers)",
      "Programming skills (Arduino, Raspberry Pi, etc.)",
    ],
    event_layout: [
      "Introduction page with event rules, arena specifications, and safety guidelines.",
      "Registration platform for teams to sign up and submit robot specifications.",
      "Live streaming of robot battles in the arena.",
      "Commentary and analysis of battles by hosts or judges.",
    ],
    faculty_students_required: {
      faculty: ["Experienced robot enthusiasts as judges and referees."],
      students: [
        "Participants can be students or hobbyists interested in robotics.",
      ],
    },
    venue:
      "Physical venue with a dedicated arena for robot battles or virtual event platform with simulated battles.",
    event_details:
      "Robot War challenges participants to design, build, and battle robots in an exciting competition that tests engineering and strategic skills.",
    event_objectives: [
      "To foster creativity and innovation in robot design and construction.",
      "To provide a platform for robot enthusiasts to showcase their technical abilities.",
      "To promote teamwork and sportsmanship in competitive robotics.",
    ],
    potential_problems_loopholes: [
      "Ensuring safety measures are in place to prevent accidents during robot battles.",
      "Addressing technical issues with robot control systems and arena infrastructure.",
      "Managing event logistics and coordination between teams during battles.",
    ],
  },
  {
    event_name: "CTF (Capture the Flag)",
    requirement:
      "Create a series of cybersecurity challenges covering various domains such as cryptography, reverse engineering, web security, and network exploitation for participants to solve.",
    resources_used: [
      "Virtual machines or cloud-based platforms for hosting challenges",
      "Cybersecurity tools (Wireshark, IDA Pro, Burp Suite, etc.)",
      "Challenge creation platforms (CTFd, Hack The Box, etc.)",
    ],
    event_layout: [
      "Introduction page with event details, rules, and registration information.",
      "Platform for participants to access and solve challenges.",
      "Leaderboard displaying the rankings of participants based on solved challenges.",
      "Discussion forum for participants to share strategies and hints (optional).",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced cybersecurity professionals as challenge creators and judges.",
      ],
      students: [
        "Participants can be students or professionals interested in cybersecurity.",
      ],
    },
    venue: "Virtual event platform or online challenge hosting platform.",
    event_details:
      "CTF (Capture the Flag) is a cybersecurity competition where participants solve a series of challenges to uncover hidden flags, testing their skills in various cybersecurity domains.",
    event_objectives: [
      "To enhance participants' cybersecurity skills through hands-on challenges.",
      "To promote collaboration and knowledge-sharing within the cybersecurity community.",
      "To recognize and reward participants with the highest scores or fastest completion times.",
    ],
    potential_problems_loopholes: [
      "Ensuring the challenges are balanced in difficulty and cover a diverse range of topics.",
      "Addressing technical issues with challenge platforms and ensuring fair play among participants.",
      "Providing adequate support and guidance for participants encountering difficulties with challenges.",
    ],
  },
  {
    event_name: "Project Expo",
    requirement:
      "Organize an exhibition to showcase innovative projects developed by participants, covering a wide range of technological domains.",
    resources_used: [
      "Exhibition space or virtual exhibition platform",
      "Project display materials (posters, prototypes, demos)",
      "Judging criteria and evaluation forms",
    ],
    event_layout: [
      "Introduction page with event details, submission guidelines, and judging criteria.",
      "Virtual exhibition hall with booths for each project display.",
      "Multimedia content showcasing project details (videos, slideshows, demos).",
      "Virtual networking features for participants and judges to interact.",
    ],
    faculty_students_required: {
      faculty: ["Judges with expertise in relevant technological domains."],
      students: [
        "Participants can be students, researchers, or professionals showcasing their projects.",
      ],
    },
    venue:
      "Physical venue for in-person exhibition or virtual exhibition platform for online showcase.",
    event_details:
      "Project Expo provides a platform for participants to demonstrate their innovative projects and receive recognition for their creativity and technical prowess.",
    event_objectives: [
      "To showcase cutting-edge projects and technological innovations.",
      "To provide feedback and recognition for participants' efforts and achievements.",
      "To facilitate networking and collaboration among participants, judges, and attendees.",
    ],
    potential_problems_loopholes: [
      "Ensuring effective presentation and communication of project details in a virtual environment.",
      "Addressing technical issues related to virtual exhibition platforms and multimedia content.",
      "Managing judging processes and ensuring fair evaluation of projects.",
    ],
  },
  {
    event_name: "Pitch Idea (Startup Expo)",
    requirement:
      "Create a platform for aspiring entrepreneurs to pitch their startup ideas to a panel of judges and potential investors.",
    resources_used: [
      "Presentation software (PowerPoint, Google Slides, etc.)",
      "Pitch decks and business plans",
      "Networking opportunities with investors and industry experts",
    ],
    event_layout: [
      "Introduction page with event details, pitching guidelines, and registration information.",
      "Virtual pitching sessions with allotted time slots for each participant.",
      "Feedback and Q&A sessions with judges and investors.",
      "Networking sessions for participants to connect with investors and industry professionals.",
    ],
    faculty_students_required: {
      faculty: ["Judges with experience in entrepreneurship and investment."],
      students: [
        "Participants can be aspiring entrepreneurs or startup founders.",
      ],
    },
    venue:
      "Virtual event platform with presentation capabilities and networking features.",
    event_details:
      "Pitch Idea (Startup Expo) provides a platform for entrepreneurs to pitch their startup ideas, receive feedback, and potentially secure investments or partnerships.",
    event_objectives: [
      "To provide a platform for aspiring entrepreneurs to showcase their innovative startup ideas.",
      "To offer networking opportunities with potential investors and industry experts.",
      "To foster entrepreneurship and innovation within the tech community.",
    ],
    potential_problems_loopholes: [
      "Ensuring effective time management during pitching sessions to accommodate all participants.",
      "Addressing technical issues related to virtual presentations and networking.",
      "Ensuring fairness and transparency in the judging process and feedback provided.",
    ],
  },
  {
    event_name: "PosterFusion, Tech Canvas, Postrator (Research Presentation)",
    requirement:
      "Design and present research findings or innovative ideas related to technology through visually engaging posters or presentations.",
    resources_used: [
      "Poster design software (Adobe Illustrator, Canva, etc.)",
      "Presentation software (PowerPoint, Google Slides, etc.)",
      "Research materials and data",
    ],
    event_layout: [
      "Introduction page with event details, submission guidelines, and presentation format.",
      "Virtual poster gallery or presentation platform showcasing research projects.",
      "Q&A sessions or discussion forums for participants to interact with viewers.",
      "Evaluation criteria and feedback mechanisms for judges and attendees.",
    ],
    faculty_students_required: {
      faculty: ["Judges with expertise in relevant research areas."],
      students: [
        "Participants can be students, researchers, or professionals presenting their research projects.",
      ],
    },
    venue:
      "Virtual event platform with poster gallery and presentation capabilities.",
    event_details:
      "PosterFusion, Tech Canvas, Postrator (Research Presentation) provides a platform for researchers and innovators to present their findings and ideas in a visually compelling manner.",
    event_objectives: [
      "To showcase research projects and innovative ideas related to technology.",
      "To facilitate knowledge sharing and collaboration among researchers and innovators.",
      "To provide constructive feedback and recognition for participants' research efforts.",
    ],
    potential_problems_loopholes: [
      "Ensuring effective presentation of research findings in a virtual format.",
      "Addressing technical issues related to poster/gallery platforms and presentation software.",
      "Managing Q&A sessions and ensuring engagement with viewers.",
    ],
  },
  {
    event_name: "ALGO CHALLENGE 2k24",
    requirement:
      "Organize a programming competition focused on algorithmic problem-solving and coding challenges.",
    resources_used: [
      "Online coding platforms (HackerRank, LeetCode, etc.)",
      "Problem set creation tools",
      "Judging criteria and evaluation rubrics",
    ],
    event_layout: [
      "Introduction page with event details, registration information, and competition rules.",
      "Platform for participants to access coding challenges and submit solutions.",
      "Leaderboard displaying real-time rankings based on solved challenges and performance.",
      "Final round with advanced algorithmic problems for top participants.",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced programmers or software engineers as judges and problem setters.",
      ],
      students: ["Participants can be students or coding enthusiasts."],
    },
    venue:
      "Virtual event platform with coding challenge capabilities and leaderboard features.",
    event_details:
      "ALGO CHALLENGE 2k24 is a programming competition that challenges participants to solve algorithmic problems using their coding skills and problem-solving abilities.",
    event_objectives: [
      "To promote algorithmic thinking and problem-solving skills among participants.",
      "To provide a competitive platform for coding enthusiasts to showcase their abilities.",
      "To recognize and reward participants with the highest scores and fastest solutions.",
    ],
    potential_problems_loopholes: [
      "Ensuring fairness and integrity in the competition, including plagiarism detection.",
      "Addressing technical issues related to coding platform functionality and performance.",
      "Providing clear communication of competition rules and expectations to participants.",
    ],
  },
  {
    event_name: "CIC 4.0",
    requirement:
      "Organize a competitive event focusing on computational intelligence concepts and applications.",
    resources_used: [
      "Computational intelligence algorithms (e.g., neural networks, genetic algorithms, fuzzy logic)",
      "Simulation software or programming languages for implementation",
      "Evaluation metrics and criteria",
    ],
    event_layout: [
      "Introduction page with event details, registration information, and competition rules.",
      "Platform for participants to access competition tasks or challenges.",
      "Submission system for participants to submit their solutions or implementations.",
      "Evaluation system to assess participants' solutions based on predefined criteria.",
    ],
    faculty_students_required: {
      faculty: ["Experts in computational intelligence as judges."],
      students: [
        "Participants can be students or professionals with knowledge in the field.",
      ],
    },
    venue:
      "Virtual event platform with competition task access, submission, and evaluation capabilities.",
    event_details:
      "CIC 4.0 is a competition focused on computational intelligence, where participants demonstrate their understanding and skills in applying computational intelligence algorithms to solve real-world problems.",
    event_objectives: [
      "To encourage participants to explore and apply computational intelligence techniques.",
      "To provide a platform for showcasing innovative applications of computational intelligence.",
      "To recognize and reward participants for their proficiency in computational intelligence concepts.",
    ],
    potential_problems_loopholes: [
      "Ensuring clarity in competition tasks and evaluation criteria.",
      "Addressing technical challenges related to solution submission and evaluation.",
      "Providing adequate support and resources for participants to understand and implement computational intelligence algorithms effectively.",
    ],
  },
  {
    event_name: "Workshop on Open Source Testing Tools",
    requirement:
      "Conduct a workshop focusing on various open-source testing tools used in software development and quality assurance.",
    resources_used: [
      "Open-source testing tools (e.g., Selenium, JUnit, Appium)",
      "Presentation materials and slides",
      "Hands-on exercises and demos",
    ],
    event_layout: [
      "Introduction page with event details, workshop agenda, and registration information.",
      "Presentation sessions covering different open-source testing tools and their use cases.",
      "Hands-on workshop sessions where participants can practice using the tools.",
      "Q&A sessions for participants to ask questions and discuss best practices.",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced professionals with expertise in open-source testing tools as workshop instructors.",
      ],
      students: [
        "Participants can be students or professionals interested in software testing.",
      ],
    },
    venue:
      "Virtual event platform with presentation and workshop capabilities.",
    event_details:
      "The Workshop on Open Source Testing Tools provides participants with practical knowledge and skills in using various open-source tools for software testing and quality assurance.",
    event_objectives: [
      "To introduce participants to a variety of open-source testing tools and their features.",
      "To provide hands-on experience and practical insights into using these tools effectively.",
      "To empower participants with skills that are valuable in software development and testing careers.",
    ],
    potential_problems_loopholes: [
      "Ensuring accessibility of necessary software and tools for participants to follow along with the workshop.",
      "Addressing technical issues related to virtual workshop delivery and hands-on exercises.",
      "Providing post-workshop resources and support for participants to continue learning and applying the skills learned.",
    ],
  },
  {
    event_name: "Let's Create",
    requirement:
      "Host a creative session where participants collaborate to generate innovative ideas or solutions to specific challenges or problems.",
    resources_used: [
      "Collaboration tools (e.g., Miro, MURAL)",
      "Brainstorming techniques and methodologies",
      "Facilitation materials and prompts",
    ],
    event_layout: [
      "Introduction page with event details, theme, and guidelines for participation.",
      "Collaboration platform where participants can brainstorm ideas and collaborate on solutions.",
      "Facilitated sessions with prompts or challenges to inspire creativity.",
      "Sharing and presentation sessions where participants showcase their ideas or solutions.",
    ],
    faculty_students_required: {
      faculty: [
        "Facilitators with experience in creative thinking and collaboration techniques.",
      ],
      students: [
        "Participants can be students, professionals, or anyone interested in generating innovative ideas.",
      ],
    },
    venue:
      "Virtual event platform with collaboration and presentation capabilities.",
    event_details:
      "Let's Create is a collaborative session where participants come together to brainstorm and develop innovative ideas or solutions to challenges in a creative and supportive environment.",
    event_objectives: [
      "To foster creativity and innovation among participants through collaborative brainstorming.",
      "To encourage cross-disciplinary collaboration and idea-sharing.",
      "To inspire participants to explore new perspectives and approaches to problem-solving.",
    ],
    potential_problems_loopholes: [
      "Ensuring effective facilitation and participation in virtual brainstorming sessions.",
      "Addressing technical issues related to collaboration platforms and virtual engagement.",
      "Providing opportunities for participants to further develop and implement the ideas generated during the session.",
    ],
  },
  {
    event_name: "Tech Conclave",
    requirement:
      "Organize a conclave focusing on emerging technologies, industry trends, and discussions on the future of technology.",
    resources_used: [
      "Keynote speakers and panelists from the tech industry",
      "Presentation materials and slides",
      "Discussion moderation and facilitation",
    ],
    event_layout: [
      "Introduction page with event details, agenda, and speaker lineup.",
      "Keynote sessions by industry leaders on emerging technologies and trends.",
      "Panel discussions with experts on various tech-related topics.",
      "Q&A sessions for participants to engage with speakers and panelists.",
    ],
    faculty_students_required: {
      faculty: [
        "Keynote speakers and panelists from the tech industry",
        "Moderators for panel discussions.",
      ],
      students: [
        "Participants can be students, professionals, or anyone interested in technology.",
      ],
    },
    venue:
      "Virtual event platform with presentation and discussion capabilities.",
    event_details:
      "The Tech Conclave brings together industry leaders, experts, and enthusiasts to discuss the latest trends, innovations, and challenges in the tech industry.",
    event_objectives: [
      "To provide insights into emerging technologies and their impact on various industries.",
      "To facilitate discussions on current tech-related issues and future trends.",
      "To inspire and educate participants on the possibilities and challenges in the tech landscape.",
    ],
    potential_problems_loopholes: [
      "Ensuring smooth coordination and technical setup for virtual keynote and panel sessions.",
      "Addressing time management to allow for meaningful discussions and participant engagement.",
      "Providing opportunities for participants to network and connect with industry professionals.",
    ],
  },
  {
    event_name: "Workshop on DevOps Tools",
    requirement:
      "Conduct a workshop focusing on various DevOps tools and practices used in software development and deployment.",
    resources_used: [
      "DevOps tools (e.g., Docker, Jenkins, Kubernetes)",
      "Presentation materials and slides",
      "Hands-on exercises and demos",
    ],
    event_layout: [
      "Introduction page with event details, workshop agenda, and registration information.",
      "Presentation sessions covering different DevOps tools and their use cases in the software development lifecycle.",
      "Hands-on workshop sessions where participants can practice using the tools and workflows.",
      "Q&A sessions for participants to ask questions and discuss best practices.",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced professionals with expertise in DevOps tools and practices as workshop instructors.",
      ],
      students: [
        "Participants can be students, developers, or professionals interested in DevOps.",
      ],
    },
    venue:
      "Virtual event platform with presentation and workshop capabilities.",
    event_details:
      "The Workshop on DevOps Tools provides participants with practical knowledge and skills in using various tools and practices to streamline software development, deployment, and operations.",
    event_objectives: [
      "To introduce participants to a variety of DevOps tools and their roles in the software development lifecycle.",
      "To provide hands-on experience and practical insights into implementing DevOps practices.",
      "To empower participants with skills that are essential in modern software development and operations.",
    ],
    potential_problems_loopholes: [
      "Ensuring accessibility of necessary software and tools for participants to follow along with the workshop.",
      "Addressing technical issues related to virtual workshop delivery and hands-on exercises.",
      "Providing post-workshop resources and support for participants to continue learning and applying DevOps practices effectively.",
    ],
  },
  {
    event_name: "RPA Workshop",
    requirement:
      "Host a workshop focusing on Robotic Process Automation (RPA) tools and techniques for automating repetitive tasks.",
    resources_used: [
      "RPA tools (e.g., UiPath, Automation Anywhere, Blue Prism)",
      "Presentation materials and slides",
      "Hands-on exercises and demonstrations",
    ],
    event_layout: [
      "Introduction page with event details, workshop agenda, and registration information.",
      "Presentation sessions covering different RPA tools, use cases, and best practices.",
      "Hands-on workshop sessions where participants can learn to build and deploy RPA solutions.",
      "Q&A sessions for participants to ask questions and discuss real-world scenarios.",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced professionals with expertise in RPA tools and implementation as workshop instructors.",
      ],
      students: [
        "Participants can be students, professionals, or anyone interested in automation technologies.",
      ],
    },
    venue:
      "Virtual event platform with presentation and workshop capabilities.",
    event_details:
      "The RPA Workshop provides participants with practical knowledge and skills in leveraging RPA tools to automate repetitive tasks and streamline business processes.",
    event_objectives: [
      "To introduce participants to the concepts and benefits of Robotic Process Automation (RPA).",
      "To provide hands-on experience in building and deploying RPA solutions using industry-leading tools.",
      "To empower participants with skills that are in high demand in the automation industry.",
    ],
    potential_problems_loopholes: [
      "Ensuring participants have access to the necessary RPA tools and environments for hands-on exercises.",
      "Addressing technical issues related to virtual workshop delivery and software compatibility.",
      "Providing follow-up resources and support for participants to continue their RPA learning journey after the workshop.",
    ],
  },
  {
    event_name: "Session on Cyber Crime and Cyber Law",
    requirement:
      "Conduct an informative session focusing on cybercrime trends, cybersecurity measures, and relevant laws and regulations.",
    resources_used: [
      "Expert speakers with knowledge in cybersecurity and legal aspects",
      "Presentation materials and slides",
      "Case studies and examples",
    ],
    event_layout: [
      "Introduction page with event details, session agenda, and speaker profiles.",
      "Presentation sessions covering topics such as cyber threats, prevention measures, and legal implications.",
      "Case study discussions to illustrate real-world cybercrime scenarios and legal ramifications.",
      "Q&A sessions for participants to engage with the speakers and clarify doubts.",
    ],
    faculty_students_required: {
      faculty: [
        "Expert speakers with expertise in cybersecurity and cyber law.",
      ],
      students: [
        "Participants can be students, professionals, or anyone interested in learning about cybercrime and cybersecurity.",
      ],
    },
    venue:
      "Virtual event platform with presentation and discussion capabilities.",
    event_details:
      "The Session on Cyber Crime and Cyber Law aims to educate participants about cyber threats, cybersecurity best practices, and legal frameworks related to cybercrime and data protection.",
    event_objectives: [
      "To raise awareness about cyber threats and the importance of cybersecurity measures.",
      "To provide insights into legal aspects related to cybercrime, data protection, and privacy.",
      "To empower participants with knowledge to protect themselves and their organizations from cyber threats.",
    ],
    potential_problems_loopholes: [
      "Ensuring clear communication of complex legal concepts and technical aspects of cybersecurity.",
      "Addressing participant engagement and interaction in a virtual session format.",
      "Providing resources for further learning and guidance on cybersecurity best practices and legal compliance.",
    ],
  },
  {
    event_name: "IoT Device Development",
    requirement:
      "Conduct a workshop focused on developing Internet of Things (IoT) devices using various hardware and software platforms.",
    resources_used: [
      "IoT development kits (e.g., Arduino, Raspberry Pi, ESP8266)",
      "Programming languages (e.g., C/C++, Python) and development environments",
      "Sensors, actuators, and other electronic components",
    ],
    event_layout: [
      "Introduction page with event details, workshop agenda, and registration information.",
      "Presentation sessions covering IoT concepts, hardware platforms, and programming techniques.",
      "Hands-on workshop sessions where participants can build and program IoT devices.",
      "Project showcase and demonstration sessions for participants to present their creations.",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced professionals with expertise in IoT development as workshop instructors.",
      ],
      students: [
        "Participants can be students, hobbyists, or professionals interested in IoT.",
      ],
    },
    venue:
      "Virtual event platform with presentation and workshop capabilities.",
    event_details:
      "The IoT Device Development workshop provides participants with practical knowledge and skills in designing, building, and programming IoT devices for various applications.",
    event_objectives: [
      "To introduce participants to IoT concepts, technologies, and applications.",
      "To provide hands-on experience in developing IoT devices using popular hardware platforms and programming languages.",
      "To inspire participants to explore innovative IoT solutions and projects.",
    ],
    potential_problems_loopholes: [
      "Ensuring participants have access to the necessary hardware components and development tools for hands-on exercises.",
      "Addressing technical issues related to virtual workshop delivery and hardware/software compatibility.",
      "Providing guidance and support for participants encountering challenges during the development process.",
    ],
  },
  {
    event_name: "Web Mania 5.0",
    requirement:
      "Host a competition or workshop focused on web development technologies, frameworks, and best practices.",
    resources_used: [
      "Web development tools and frameworks (e.g., HTML/CSS, JavaScript, React, Vue.js)",
      "Presentation materials and slides",
      "Coding environments or platforms for hands-on exercises",
    ],
    event_layout: [
      "Introduction page with event details, competition/workshop agenda, and registration information.",
      "Presentation sessions covering various aspects of web development, including frontend and backend technologies, responsive design, and web performance optimization.",
      "Hands-on workshop sessions where participants can practice building websites or web applications.",
      "Competition rounds for participants to showcase their web development skills through coding challenges or project submissions.",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced web developers or instructors as workshop leaders and competition judges.",
      ],
      students: [
        "Participants can be students, developers, or anyone interested in web development.",
      ],
    },
    venue:
      "Virtual event platform with presentation, workshop, and coding capabilities.",
    event_details:
      "Web Mania 5.0 offers participants the opportunity to learn about the latest trends and technologies in web development and demonstrate their skills through workshops or competition challenges.",
    event_objectives: [
      "To educate participants about modern web development technologies, frameworks, and best practices.",
      "To provide hands-on experience in building responsive and user-friendly websites or web applications.",
      "To recognize and reward participants for their creativity and proficiency in web development.",
    ],
    potential_problems_loopholes: [
      "Ensuring accessibility of coding environments and resources for participants to practice during the workshop.",
      "Addressing technical issues related to virtual workshop delivery and participant engagement.",
      "Providing clear guidelines and evaluation criteria for competition submissions to ensure fairness and transparency.",
    ],
  },
  {
    event_name: "LAN Gaming Contest",
    requirement:
      "Organize a LAN gaming contest where participants compete in multiplayer video games.",
    resources_used: [
      "Gaming consoles or PCs with LAN capabilities",
      "Multiplayer video games (e.g., first-person shooters, real-time strategy games)",
      "Gaming peripherals (controllers, keyboards, mice)",
    ],
    event_layout: [
      "Introduction page with event details, list of games, and registration information.",
      "LAN setup with gaming stations equipped with consoles or PCs.",
      "Game selection and scheduling for tournament rounds.",
      "Live streaming or spectator area for audience engagement.",
    ],
    faculty_students_required: {
      faculty: ["Game referees or organizers to oversee tournament matches."],
      students: [
        "Participants can be gamers or enthusiasts interested in competitive gaming.",
      ],
    },
    venue:
      "Physical venue with LAN setup for gaming stations and audience space.",
    event_details:
      "The LAN Gaming Contest provides an opportunity for participants to showcase their gaming skills and compete against each other in a friendly and competitive environment.",
    event_objectives: [
      "To promote camaraderie and sportsmanship among gaming enthusiasts.",
      "To provide a platform for competitive gaming and skill development.",
      "To entertain and engage both participants and spectators through exciting gaming matches.",
    ],
    potential_problems_loopholes: [
      "Ensuring smooth LAN setup and connectivity for all gaming stations.",
      "Addressing technical issues with game installations, updates, and compatibility.",
      "Managing tournament scheduling and match coordination to ensure a fair and enjoyable gaming experience for all participants.",
    ],
  },
  {
    event_name: "Section of the Year 2k24",
    requirement:
      "Host an event to recognize and celebrate the achievements and contributions of different sections or departments within the organization or institution.",
    resources_used: [
      "Presentation materials and slides showcasing the achievements of each section",
      "Awards or certificates for winning sections",
      "Guest speakers or panelists (optional)",
    ],
    event_layout: [
      "Introduction page with event details, criteria for selection, and timeline.",
      "Presentation sessions where representatives from each section showcase their achievements, projects, and contributions.",
      "Voting or judging sessions by a panel of judges or the audience to determine the winning section.",
      "Award ceremony to announce and recognize the winning section.",
    ],
    faculty_students_required: {
      faculty: [
        "Representatives from each section to present their achievements, judges or audience members to evaluate and vote for the winning section.",
      ],
    },
    venue:
      "Physical venue or virtual event platform with presentation and voting capabilities.",
    event_details:
      "Section of the Year 2k24 is an event dedicated to recognizing and honoring the outstanding achievements and contributions of different sections or departments within the organization or institution.",
    event_objectives: [
      "To celebrate the accomplishments and hard work of various sections or departments.",
      "To foster a sense of pride, motivation, and healthy competition among sections.",
      "To encourage collaboration and sharing of best practices among sections.",
    ],
    potential_problems_loopholes: [
      "Ensuring fairness and transparency in the selection process and judging criteria.",
      "Addressing technical issues related to virtual presentations and voting mechanisms (if applicable).",
      "Managing time constraints and ensuring all sections have an equal opportunity to showcase their achievements.",
    ],
  },
  {
    event_name: "Student of the Year 2k24",
    requirement:
      "Organize an event to recognize and honor the outstanding achievements and contributions of students within the organization or institution.",
    resources_used: [
      "Presentation materials and slides showcasing the achievements of each student nominee",
      "Awards or certificates for the Student of the Year winner",
      "Guest speakers or panelists (optional)",
    ],
    event_layout: [
      "Introduction page with event details, nomination criteria, and timeline.",
      "Presentation sessions where nominees showcase their achievements, leadership roles, extracurricular activities, and community involvement.",
      "Voting or judging sessions by a panel of judges or the audience to determine the Student of the Year winner.",
      "Award ceremony to announce and recognize the Student of the Year.",
    ],
    faculty_students_required: {
      faculty: [
        "Student nominees to present their achievements, judges or audience members to evaluate and vote for the Student of the Year winner.",
      ],
    },
    venue:
      "Physical venue or virtual event platform with presentation and voting capabilities.",
    event_details:
      "Student of the Year 2k24 is an event dedicated to recognizing and celebrating the outstanding achievements, leadership, and contributions of students within the organization or institution.",
    event_objectives: [
      "To honor and celebrate the accomplishments and contributions of exceptional students.",
      "To inspire and motivate students to excel academically, socially, and personally.",
      "To foster a sense of pride and recognition within the student community.",
    ],
    potential_problems_loopholes: [
      "Ensuring fairness and transparency in the nomination and selection process.",
      "Addressing technical issues related to virtual presentations and voting mechanisms (if applicable).",
      "Providing opportunities for all deserving students to be recognized and celebrated, regardless of their field of study or extracurricular involvement.",
    ],
  },
  {
    event_name: "Automata Challenge - Let the Logic do all the Talking",
    requirement:
      "Organize a competition focused on automata theory and logic-based problem-solving.",
    resources_used: [
      "Problem set creation tools for automata theory problems",
      "Evaluation criteria and scoring rubrics",
      "Prize awards for top performers",
    ],
    event_layout: [
      "Introduction page with event details, competition rules, and registration information.",
      "Rounds of problem-solving challenges based on automata theory and logic.",
      "Submission system for participants to submit their solutions or proofs.",
      "Evaluation system to assess participants' solutions based on correctness and efficiency.",
    ],
    faculty_students_required: {
      faculty: ["Experts in automata theory and logic as judges"],
      students: [
        "Participants can be students or professionals with knowledge in the field.",
      ],
    },
    venue:
      "Virtual event platform with problem-solving and submission capabilities.",
    event_details:
      "The Automata Challenge - Let the Logic do all the Talking is a competition designed to test participants' knowledge and problem-solving skills in automata theory and logic.",
    event_objectives: [
      "To challenge participants to apply their understanding of automata theory and logic to solve complex problems.",
      "To provide a competitive platform for participants to demonstrate their problem-solving abilities.",
      "To recognize and reward participants for their proficiency in automata theory and logic-based problem-solving.",
    ],
    potential_problems_loopholes: [
      "Ensuring clarity in competition tasks and evaluation criteria.",
      "Addressing technical issues related to virtual competition delivery and solution submissions.",
      "Providing opportunities for participants to demonstrate creativity and innovation in problem-solving approaches.",
    ],
  },
  {
    event_name: "Datathon 2.0",
    requirement:
      "Host a data-centric competition where participants analyze datasets to derive insights and solutions to real-world problems.",
    resources_used: [
      "Datasets relevant to the competition theme or problem statement",
      "Data analysis tools (e.g., Python libraries such as Pandas, NumPy, scikit-learn)",
      "Presentation materials for showcasing insights and solutions",
    ],
    event_layout: [
      "Introduction page with event details, competition theme, dataset access, and registration information.",
      "Data analysis and modeling phases where participants work on the provided datasets to derive insights and develop solutions.",
      "Submission system for participants to submit their analysis reports, findings, and proposed solutions.",
      "Evaluation system to assess participants' submissions based on criteria such as creativity, accuracy, and relevance.",
    ],
    faculty_students_required: {
      faculty: [
        "Data science experts or judges with experience in data analysis and modeling",
      ],
      students: [
        "Participants can be students, data enthusiasts, or professionals with data analysis skills.",
      ],
    },
    venue:
      "Virtual event platform with dataset access, submission, and evaluation capabilities.",
    event_details:
      "Datathon 2.0 is a data-centric competition where participants analyze real-world datasets to derive insights and develop innovative solutions to specific challenges or problem statements.",
    event_objectives: [
      "To provide participants with hands-on experience in data analysis, modeling, and problem-solving.",
      "To encourage creativity and innovation in deriving insights and proposing solutions based on data.",
      "To recognize and reward participants for their analytical skills and ability to derive meaningful insights from data.",
    ],
    potential_problems_loopholes: [
      "Ensuring access to high-quality datasets and data analysis tools for all participants.",
      "Addressing technical issues related to virtual competition delivery and submission systems.",
      "Providing clear guidelines and evaluation criteria to ensure fair assessment of participants' submissions.",
    ],
  },
  {
    event_name: "Workshop on Computer Hardware and Basic Networking Skills",
    requirement:
      "Conduct a workshop focusing on fundamental concepts of computer hardware and basic networking skills.",
    resources_used: [
      "Presentation materials and slides covering computer hardware components and networking concepts",
      "Demonstration materials (e.g., computer parts, networking devices)",
      "Hands-on exercises for participants to practice basic networking configurations",
    ],
    event_layout: [
      "Introduction page with event details, workshop agenda, and registration information.",
      "Presentation sessions covering topics such as computer hardware components, networking fundamentals, IP addressing, and network configurations.",
      "Hands-on workshop sessions where participants can assemble computer hardware components and configure basic network settings.",
      "Q&A sessions for participants to ask questions and clarify concepts.",
    ],
    faculty_students_required: {
      faculty: [
        "Experienced professionals or instructors with expertise in computer hardware and networking as workshop leaders",
      ],
      students: [
        "Participants can be students or individuals interested in learning about computer hardware and networking.",
      ],
    },
    venue:
      "Physical venue with workshop setup for hardware demonstrations and networking exercises.",
    event_details:
      "The Workshop on Computer Hardware and Basic Networking Skills aims to provide participants with foundational knowledge and practical skills in understanding computer hardware components and basic networking configurations.",
    event_objectives: [
      "To familiarize participants with computer hardware components and their functions.",
      "To introduce participants to basic networking concepts such as IP addressing and network configurations.",
      "To provide hands-on experience in assembling computer hardware and configuring basic network settings.",
    ],
    potential_problems_loopholes: [
      "Ensuring availability of necessary hardware components and networking devices for hands-on exercises.",
      "Addressing technical issues related to workshop setup and demonstration materials.",
      "Providing adequate support and guidance to participants during hands-on exercises to ensure effective learning.",
    ],
  },
];

const chiefPatron = {
  name: "Chief Patron",
  img: "",
  role: "",
};

const advisory = [
  {
    name: "Chief Patron",
    img: "",
  },
  {
    name: "Chief Patron",
    img: "",
  },
  {
    name: "Chief Patron",
    img: "",
  },
  {
    name: "Chief Patron",
    img: "",
  },
];
