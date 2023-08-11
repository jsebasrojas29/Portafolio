// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "VueJs MiniBiz Platform",
    category: "Web Application",
    imgPath: "Dg001.jpg",
    img: "../../src/assets/Imagenes/Dg001.jpg",
    imgRelacionadas: [
      {
        id: 1,
        img: "../../src/assets/Imagenes/Dg001.jpg",
      },
      {
        id: 2,
        img: "../../src/assets/Imagenes/Dg001.jpg",
      },
      {
        id: 3,
        img: "../../src/assets/Imagenes/Dg001.jpg",
      },
    ],
    road: { name: "Project1" },
    aboutCliente: {
      Name: "Porvenir Mini Market",
      Services: "UI Design, Frontend & Backend Development",
      Website: "---",
      Phone: "+57 3107971825",
    },
    Objective:
      "Develop a web application to optimize and automate the process of registering, tracking, and controlling supplies in a retail establishment, such as a mini-market or convenience store.",
    ToolsTechnologies: "HTML, CSS, JavaScript, Vue.js, buefy, figma",

    Challenge: [
      {
        id: 1,
        details:
          'The mini market "Porvenir" used to be managed through manual processes recorded in notebooks and sheets, which revealed shortcomings when it came to generating invoices and carrying out other processes such as restocking. With the aim of enhancing and streamlining the procedures in the business, a comprehensive system was developed.',
      },
      {
        id: 2,
        details:
          "Its important to highlight that this system originated from a CRUD system developed using Vue.js 2.x, with the purpose of expediting the creation process. Among the achieved improvements, the following can be highlighted: implementation of an account management system with restrictions and roles, thorough real-time inventory control, an interface displaying average consumption and profit margins, updates in various views, incorporation of a system to remove supplies from orders, and query optimization.",
      },
      {
        id: 3,
        details:
          "Currently, the shift scheduling module is under development, designed to manage multiple employees during a workday, along with the corresponding testing phases.",
      },
    ],
  },
  {
    id: 2,
    title: "Digitacion001",
    category: "Web Game",
    img: "../../src/assets/Imagenes/Dg001.jpg",
    imgRelacionadas: [
      {
        id: 1,
        img: "../../src/assets/Imagenes/Dg001.jpg",
      },
      {
        id: 2,
        img: "../../src/assets/Imagenes/Dg001.jpg",
      },
      {
        id: 3,
        img: "../../src/assets/Imagenes/Dg001.jpg",
      },
      {
        id: 4,
        img: "../../src/assets/Imagenes/Dg001.jpg",
      },
    ],
    road: { name: "Project2" },
    aboutCliente: {
      Name: "Freelance",
      Services: "Full stack developer",
      Website: "https://delfo31.itch.io/digitacin-001",
      Phone: "----",
    },
    Objective:
      "Develop an educational video game aimed at enhancing typing skills.",
    ToolsTechnologies: "Unity & Procreate",

    Challenge: [
      {
        id: 1,
        details:
          "During my experience as a computer science educator, I had the opportunity to engage students in touch typing exercises. Seeking a departure from traditional practices, I embarked on the development of a web-based video game aimed at enhancing typing skills for students at Liceo Superior Educational Institution. The exercise proved to be a resounding success, with noticeable improvements in keyboard positioning and typing speed.",
      },
      {
        id: 2,
        details:
          "Due to various circumstances throughout the semester, the video project was not fully completed, specifically lacking the musical component intended to provide closure to the application. Nevertheless, the video game encompasses all the expected aspects envisioned during its development.",
      },
      {
        id: 3,
        details:
          "The game revolves around a system wherein words descend from the upper portion of the screen, requiring students to type them accurately. This action causes the words to disappear, and should any word reach the bottom of the screen, the game concludes. Depending on the difficulty level, the words undergo changes in both their content and structure. For instance, words might include capitalization or accents, and in the advanced levels, symbols come into play.",
      },
    ],
    future: [
      {
        id: 1,
        details:
          "Story: The storyline envisioned for integration into the video game revolved around Mari, a girl who forgot to complete her homework and is rushing to finish it as quickly as possible before the deadline. Additionally, it was intended for this situation to recur throughout the characters journey, adding a comedic touch to the narrative.",
      },
      {
        id: 2,
        details:
          "On the other hand, as part of an update planned for the next year, duels between students were expected to be introduced to generate competitiveness. Joel would be introduced as the second character and Mari's rival. However, this process is still pending due to various factors.",
      },
    ],
  },
  {
    id: 3,
    title: "VueJs My Whiskey Platform",
    category: "Web Application",
    img: "../../src/assets/Imagenes/Dg001.jpg",
    road: { name: "Project3" },
    aboutCliente: {
      Name: "Freelance",
      Services: "Full stack developer",
      Website: "https://timely-heliotrope-4621ef.netlify.app/",
      Phone: "----",
    },
    Objective:
      "Design and develop a sophisticated and functional web platform aimed at marketing a wide variety of whiskies.",
    ToolsTechnologies: "HTML, CSS, JavaScript, Vue.js, TailwindCSS, figma",

    Challenge: [
      {
        id: 1,
        details:
          "During the development of the MiniBiz software, I became interested in getting to know Vue.js version 3. As a result, I began studying through courses and other multimedia resources, leading to the practice of creating a website. My main objective was to become acquainted with the syntax used in Vue.js with the Composition API.",
      },
      {
        id: 2,
        details:
          "The website is a recreation of an online portal for purchasing whisky. Within it, various products can be discovered and added to a shopping cart to facilitate the sales process. In this case, I utilized JavaScript file resources for inputs and employed Local Storage for shopping cart persistence.",
      },
    ],
    future: [
      {
        id: 1,
        details: "a",
      },
      {
        id: 2,
        details: "a",
      },
    ],
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: "../../src/assets/Imagenes/Dg001.jpg",
    road: { name: "About" },
    aboutCliente: {
      Name: "company Ltd",
      Services: "UI Design & Frontend Development",
      Website: "https://company.com",
      Phone: "555 8888 888",
    },
    Objective: "lorem",
    ToolsTechnologies: "HTML, CSS, JavaScript, Vue.js, TailwindCSS, AdobeXD",
    Challenge: "Lorem",
  },
  {
    id: 5,
    title: "React Social App",
    category: "Mobile Application",
    img: "../../src/assets/Imagenes/Dg001.jpg",
    road: { name: "About" },
    aboutCliente: {
      Name: "company Ltd",
      Services: "UI Design & Frontend Development",
      Website: "https://company.com",
      Phone: "555 8888 888",
    },
    Objective: "lorem",
    ToolsTechnologies: "HTML, CSS, JavaScript, Vue.js, TailwindCSS, AdobeXD",
    Challenge: "Lorem",
  },
  {
    id: 6,
    title: "Apple Design System",
    category: "Web Application",
    img: "../../src/assets/Imagenes/Dg001.jpg",
    road: { name: "About" },
    aboutCliente: {
      Name: "company Ltd",
      Services: "UI Design & Frontend Development",
      Website: "https://company.com",
      Phone: "555 8888 888",
    },
    Objective: "lorem",
    ToolsTechnologies: "HTML, CSS, JavaScript, Vue.js, TailwindCSS, AdobeXD",
    Challenge: "Lorem",
  },
];

export default projects;
