const projs = [
  {
    id: 1,
    name: 'DevPoint Labs',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "A website for the DevPoint Labs Coding school for their information, contact and to accept applications. This site gets updated for each cohort where the dates are changes and the launch day for the class is created. I created all of the features, every page and the application process based off of the designs given...",
    shortDesc: "Coding School Landing Page",
    github: "",
    liveSite: "https://www.devpointlabs.com/",
    stack: [
      "Ruby on Rails",
      "React JS",
      "PostgreSQL",
      "Heroku", 
      "Google API",
      "Slack API",
      "SendGrid",
      "Bootstrap 4",
      "React Router",
    ]
  },
  {
    id: 2,
    name: 'Jr Devs',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "This was a 2015 final group project for the Full-Stack Web Devlopment full time course at DevPoint Labs. The project is learn-to-code application with tutorials and exercises to bridge the gap of boring hard code to easy, fun way of learning the basics of programming and some ruby language. I have worked on the prototype for the site to test out the concepts and lesson on actual students ages 10+ doing a beta program. Then on the project itself, I have worked on many pages, mailers, features and lessons planned for the content.",
    shortDesc: "A Coding Learning Site",
    github: "https://github.com/henry-doan/jrdev_app",
    liveSite: "http://www.jr-devs.com/splash",
    stack: [
      "Ruby on Rails",
      "React JS",
      "PostgreSQL",
      "Heroku", 
      "Redux",
      "SendGrid",
      "Devise",
      "Webpack",
      "React Router",
    ]
  },
  {
    id: 3,
    name: 'Grad Cap',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "This is a freelance job that was complete from the small upcomming company of Grad Cap LLC. A resume consultation company to help individuals with their resumes and tips on landing a long comming career. This project I worked hand and hand with the client to create the dream site and tools they would need to run the company. ...",
    shortDesc: "Resume Consultation",
    github: "",
    liveSite: "www.grad-cap.com",
    stack: [
      "Ruby on Rails",
      "React JS",
      "PostgreSQL",
      "Heroku", 
      "Redux",
      "Devise",
      "React Router",
    ]
  },
  {
    id: 4,
    name: 'Potluck Planner',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "This was a final project for CS... course at Weber State University and combines all the topics we learned into a live enviroment. This application makes planning for a potluck easy. Where users can collaborate on a event to sign up for what to bring for the event and able to create the event and all of it's details. This solo project got me to design the whole site, logos, and layouts and then later implement the designs into development then finally production with in a two month time frame.",
    shortDesc: "Planner for Potluck",
    github: "https://github.com/henry-doan/django-potluck-planner",
    liveSite: "https://doan-django-potluck-planner.herokuapp.com/",
    stack: [
      "Django",
      "Python",
      "Sqlite3",
      "Heroku"
    ]
  },
  {
    id: 5,
    name: 'DPL Sheets',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "",
    shortDesc: "",
    github: "",
    liveSite: "https://dpl-sheets.netlify.app/debug",
    stack: [
      "",
      "",
      "",
    ]
  },
  {
    id: 6,
    name: 'HD Blog',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "",
    shortDesc: "",
    github: "",
    liveSite: "https://hd-blog-henry-doan.vercel.app/",
    stack: [
      "ReactJS",
      "NextJS",
      "Vercel",
    ]
  },
  {
    id: 7,
    name: 'Little Leaf',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "",
    shortDesc: "Plant Maintence Mobile App",
    github: "",
    liveSite: "",
    stack: [
      "React Native",
      "",
      "",
    ]
  },
  {
    id: 8,
    name: 'Habitat AMS',
    img: "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    desc: "",
    shortDesc: "Animal management system",
    github: "",
    liveSite: "https://www.habitatams.com/",
    stack: [
      "",
      "",
      "",
    ]
  },
]

export default projs;