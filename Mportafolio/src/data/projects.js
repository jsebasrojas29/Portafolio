// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "VueJs MiniBiz Platform",
    category: "Web Application",
    imgPath: "Dg001.jpg",
    img: "../../src/assets/Imagenes/Miniatura1.png",
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
    future: [
      {
        id: 1,
        details:
          "At present, the software is being utilized within a local environment as it is still under observation. This implies that there is a possibility for previously unnoticed errors to emerge, ones that might not have surfaced during unit testing. Consequently, during its deployment in this local setting, any identified errors will be duly noted for prompt rectification and update.",
      },
      {
        id: 2,
        details:
          "Furthermore, this application is hosted on GitHub, thereby offering interested parties the chance to contribute to the advancement of this project. As for its availability, the software presently exists in the form of a web version",
      },
      {
        id: 3,
        details:
          "However, due to privacy considerations, public access to this service is not yet accessible. This situation is slated to change in the near future, once a more stable and dependable version has been achieved.",
      },
      {
        id: 4,
        details:
          "Keep an eye on the progression of this exciting project, and contemplate joining us on GitHub to take part in its evolution and ongoing enhancement.",
      },
    ],
  },
  {
    id: 2,
    title: "Digitacion 001",
    category: "Web Game",
    img: "../../src/assets/Imagenes/Miniatura2.png",
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
          "Due to various circumstances throughout the semester, the  project was not fully completed, specifically lacking the musical component intended to provide closure to the application. Nevertheless, the video game encompasses all the expected aspects envisioned during its development.",
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
    img: "../../src/assets/Imagenes/Miniatura3.png",
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
    title: "Turn Around",
    category: "Mobile Game",
    img: "../../src/assets/Imagenes/Miniatura4.png",
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
    road: { name: "Project4" },
    aboutCliente: {
      Name: "Freelance",
      Services: "Full stack developer",
      Website: "----",
      Phone: "----",
    },
    Objective:
      "Developing a mobile video game with 'speed run' characteristics.",
    ToolsTechnologies: "Unity & Procreate",

    Challenge: [
      {
        id: 1,
        details:
          "The following game was conceived with the intention of being my first mobile video game, as a fundamental exercise in Unity. I took the initiative to create a SpeedRun; however, I wasn't satisfied with the final outcome. For this reason, I decided to implement new functionalities to change the gameplay style. As a result, the following features were incorporated: instead of the player jumping over obstacles, they now destroy them using skills. Additionally, instead of having just one character, the game features three distinct characters. A system for unlocking images as rewards to incentivize participation was also introduced, and rather than having only one life, the player now has three before losing the game.",
      },
      {
        id: 2,
        details:
          "The game's storyline immerses us in the lives of three motorcyclists aspiring to participate in the 'La Vuelta' event, a competition set in the fictional City of Azzip. The goal of the event is to complete a full lap around the city within a set time, requiring the racers to speed through the track.",
      }
    ],
    future: [
      {
        id: 1,
        details:
          "The game is currently in a testing phase where significant improvements can be made. Planned enhancements include a 2vs2 mode, the addition of different worlds, customizable appearances, and unlockable motorcycles. If you're interested in this project, we invite you to get in touch with us.",
      },
    ],
  },
  {
    id: 5,
    title: "VueJs Participatee Platform",
    category: "Web Application",
    img: "../../src/assets/Imagenes/Miniatura5.png",
    road: { name: "Project5" },
    aboutCliente: {
      Name: "Freelance",
      Services: "Full stack developer",
      Website: "https://zingy-pothos-897009.netlify.app/",
      Phone: "----",
    },
    Objective:
      "Encourage code reuse and promote the adoption of best development practices.",
    ToolsTechnologies: "HTML, CSS, JavaScript, Vue.js, TailwindCSS",

    Challenge: [
      {
        id: 1,
        details:
          "During my training in Vue.js, I undertook a practice exercise that involved implementing forms and other functions. Upon completing the exercise, a web application for managing sick pets is generated. ",
      },
      {
        id: 2,
        details:
          "However, in order to enhance my skills, I decided to shift the purpose of the web application. It now serves as a platform where users can create registrations for events or courses. Furthermore, the administrator has the capability to generate a participant's certificate along with a QR code.",
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
    id: 6,
    title: "Card game",
    category: "cross platform game",
    img: "../../src/assets/Imagenes/Miniatura6.jpg",
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
    road: { name: "Project6" },
    aboutCliente: {
      Name: "Freelance",
      Services: "Full stack developer",
      Website: "----",
      Phone: "----",
    },
    Objective:
      "Developing a  video game with 'RogueLike' characteristics.",
    ToolsTechnologies: "Unity & Procreate",

    Challenge: [
      {
        id: 1,
        details:
          "Currently, I am immersed in the development of an exciting cross-platform card game inspired by the roguelike style. In this game, players will take on the role of brave champions who will venture through the levels of a gigantic tower. However, the task won't be easy, as the tower is filled with formidable monsters that become more dangerous as you ascend.",
      },
      {
        id: 2,
        details:
          "For this first version of the game, I have designed three different champions: the warrior, the mage, and the summoner. Each of them possesses a unique set of abilities and the possibility to enhance them through special cards. Additionally, players will also have the opportunity to discover valuable support items, such as potions, during their thrilling adventure.",
      }
    ],
    future: [
      {
        id: 1,
        details:
          "Currently, the game is in an early development stage; nevertheless, the core mechanics have already been implemented. I invite you to take a look at the gameplay video below for a preview of the gameplay.",
      },
      {
        id: 2,
        details:
          "As for our expectations, we intend to create an immersive narrative for each of the champions exploring the tower, giving them prominence beyond their unique abilities. Furthermore, we are planning to introduce more champions in future game updates.",
      },
    ],
  },


];

export default projects;
