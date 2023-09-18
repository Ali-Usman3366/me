import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

export const cardData = [
  {
    cardImg: "./Images/js.png",
    cardClass: "js img-fluid",
    progressBar: "",
    skill: "MongoDB",
  },
  {
    cardImg: "./Images/mongodb.png",
    cardClass: "mongo img-fluid",
    progressBar: "",
    skill: "MongoDB",
  },
  {
    cardImg: "./Images/node.png",
    cardClass: "node img-fluid",
    progressBar: "",
    skill: "Node + Express JS",
  },
  {
    cardImg: "./Images/sqlserver.png",
    cardClass: "sql img-fluid",
    progressBar: "",
    skill: "MS SQL Server",
  },
  {
    cardImg: "./Images/react.png",
    cardClass: "react img-fluid",
    progressBar: "",
    skill: "React Js",
  },
];

export const Testimonial = [
  {
    msg: "Please make sure you thank everyone at Ali Usman for all the work they have done, we are very pleased with everything and will recommend your services to anyone who will listen. Please pass it on.",
    ClientName: "John Budreau",
    Company: "ITI Lasers",
    rating: [1, 2, 3],
  },
  {
    msg: "We just finished our new website with Ali Usman and we are so excited to launch it!! It's so professionally done and charming, not to mention how great it looks and works with mobile devices. We tested it on iPhone and Droid and it worked great on both! We love how easy it is to make changes ourselves (after some training from Ali Usman) but know we have support when we need it. ",
    ClientName: "Gina O.",
    Company: "Terry Overac. plumbing and Discover Anoka",
    rating: [1, 2, 3, 4],
  },
  {
    msg: "Ali Usman is the best - so prompt and timely to get back to me if I have questions or need to make changes. I love his design sense and his willingness to dig deep to understand my business and what is important to me and the people I need to reach. I am so grateful to have found Ali Usman! ",
    ClientName: "Judy J.",
    Company: "Collaborative Practice Attorney",
    rating: [1, 2, 3, 4],
  },
];

export const TypingText = [
  "Ali Usman",
  "React Js Developer",
  "Node Js Developer",
  "Mern Stack Developer",
];

export const socialLinks = [
  {
    icon: <BsFacebook />,
    link: "https://www.facebook.com/profile.php?id=100009128975407",
  },
  {
    icon: <GrInstagram />,
    link: "https://www.instagram.com/aliusman.04/?next=%2F",
  },
  {
    icon: <GrLinkedin />,
    link: "https://linkedin.com/in/ali-usman-281188195",
  },
  {
    icon: <GrGithub />,
    link: "https://github.com/Ali-Usman3366",
  },
];

export const buttonLinks = [
  {
    ref: "https://www.fiverr.com/aliusman3366/create-web-application-using-react-js-mongodb-or-sql-and-express-js?gig_id=252502492&utm_campaign=base_gig_create_share&utm_content=&utm_medium=shared&utm_source=get_url&utm_term=&view=gig",
    classes: "hire_btn btn me-4",
    title: "Hire me",
    rel: "norefer",
    target: "_blank",
  },
  {
    ref: "./Resume/AliUsman.pdf",
    classes: "cv_btn btn",
    title: "Get CV",
  },
];

export const serviceData = [
  {
    icon: "./Images/web-design.jpg",
    title: "Web Application",
    detail:
      "Design is the main part of the website. So I focus on creative design to make the visitor's smooth interaction and feel comfortable while using website.",
  },
  {
    icon: "./Images/web-development.jpg",
    title: "Mobile Application",
    detail:
      "Data is so essential to a person or an organization. Functions like data storage, retrieval, update, deletion and many more are key. Development is also an essential part of websites. So I also have the ability to handle complex data operations.",
  },
  {
    icon: "./Images/responsive.png",
    title: "Desktop Application",
    detail:
      "Responsiveness means automatically adapting a website to different device screens. a responsive website is considered a complete website, so I had responsiveness in mind during the website design phase.",
  },
];

export const portfolioData = [
  {
    icon: "./Images/Boostup.svg",
    title: "Boostup",
    data: [
      "./Images/boostup/0.png",
      "./Images/boostup/1.png",
      "./Images/boostup/2.png",
      "./Images/boostup/3.png",
      "./Images/boostup/4.png",
      "./Images/boostup/5.png",
    ],
  },
  {
    icon: "./Images/paysol.svg",
    title: "PaySol",
    data: [
      "./Images/paysol/6.png",
      "./Images/paysol/7.png",
      "./Images/paysol/8.png",
      "./Images/paysol/9.png",
      "./Images/paysol/10.png",
      "./Images/paysol/11.png",
      "./Images/paysol/12.png",
      "./Images/paysol/13.png",
      "./Images/paysol/14.png",
      "./Images/paysol/15.png",
      "./Images/paysol/16.png",
      "./Images/paysol/17.png",
      "./Images/paysol/18.png",
      "./Images/paysol/19.png",
      "./Images/paysol/20.png",
      "./Images/paysol/21.png",
      "./Images/paysol/22.png",
      "./Images/paysol/23.png",
      "./Images/paysol/24.png",
      "./Images/paysol/25.png",
      "./Images/paysol/26.png",
    ],
  },
  {
    icon: "./Images/propertyhunt.svg",
    title: "Property Hunt",
    data: [
      "./Images/Propertyhunt/0.png",
      "./Images/Propertyhunt/1.png",
      "./Images/Propertyhunt/2.png",
      "./Images/Propertyhunt/3.png",
      "./Images/Propertyhunt/4.png",
      "./Images/Propertyhunt/5.png",
      "./Images/Propertyhunt/6.png",
      "./Images/Propertyhunt/7.png",
      "./Images/Propertyhunt/8.png",
    ],
  },
  {
    icon: "./Images/logo-blue.svg",
    title: "Hayley.Ai",
    data: [],
  },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const servicesData = [
  {
    title: "Web Application Development",
    icon: "./Images/web.png",
    description:
      "As a MERN (MongoDB, Express.js, React, Node.js) Stack application service, I am your one-stop solution for all your web development needs. With my expertise in the MERN stack, I can create dynamic and responsive web applications that cater to your specific requirements. Whether you're an individual entrepreneur looking to launch a personal project, a startup seeking to build an MVP, or simply someone with a brilliant idea in need of a digital presence, I've got you covered",
  },
  {
    title: "Mobile Application Development",
    icon: "./Images/mobile.png",
    description:
      "As a seasoned mobile application developer specializing in React Native, I am dedicated to crafting high-quality, cross-platform solutions tailored to your unique needs. With a passion for creating seamless user experiences, I leverage the power of React Native to build apps that not only look stunning but also perform flawlessly across both iOS and Android devices. ",
  },
  {
    title: "Desktop Application Development",
    icon: "./Images/desktop.png",
    description:
      "As a dedicated individual offering desktop application development services using Electron.js, I am your go-to expert for crafting cross-platform applications that seamlessly blend the power of web technologies with the robustness of native desktop software. With a keen eye for detail and a passion for delivering intuitive user experiences, I take pride in creating versatile applications that cater to your unique needs.",
  },
];
export const NavLinks = [
  { name: "Home", link: "#home" },
  { name: "About Me", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Services", link: "#services" },
  { name: "Contact Me", link: "#contact" },
];
