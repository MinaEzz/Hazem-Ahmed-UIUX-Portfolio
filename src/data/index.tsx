import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaDribbble, FaBehance } from "react-icons/fa6";
import { RiGroupLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export const NAVIGATION_LINKS = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "About Me",
    href: "#about",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Contact Me",
    href: "#contact",
  },
];

export const SOCIAL_MEDIA = [
  {
    title: "Instagram",
    icon: <FaInstagram />,
    href: "",
  },
  {
    title: "Dribbble",
    icon: <FaDribbble />,
    href: "",
  },
  {
    title: "Linkedin",
    icon: <CiLinkedin />,
    href: "",
  },
  {
    title: "Behance",
    icon: <FaBehance />,
    href: "",
  },
];

export const COUNTS = [
  {
    count: 5,
    title: "Years of experience",
  },
  {
    count: 20,
    title: "Projects completed",
  },
  {
    count: 5,
    title: "Satisfied clients",
  },
];

export const SERVICES = [
  {
    icon: <RiGroupLine />,
    title: "App Design",
    desc: "Mobile app design demands a keen focus on UX/UI principles. Prioritizing user experience (UX) ensures intuitive navigation and ease of use.",
  },
  {
    icon: <RiGroupLine />,
    title: "Web Design",
    desc: "i focuses on the holistic experience a user has while interacting with a website. It encompasses aspects like usability, accessibility, and overall satisfaction",
  },
  {
    icon: <RiGroupLine />,
    title: "SaaS Design",
    desc: "SaaS design isn’t just about making an app look nice — it’s about creating a product that users can understand quickly, trust immediately, and use effortlessly.",
  },
  {
    icon: <RiGroupLine />,
    title: "CRM Design",
    desc: "CRM system means balancing data density with usability — you’re showing a lot of information (contacts, deals, pipelines) without overwhelming the user.",
  },
  {
    icon: <RiGroupLine />,
    title: "Control Panel Design",
    desc: "A control panel design is all about clarity, quick access, and feedback — whether it’s for SaaS admin dashboards, IoT devices, or system monitoring.",
  },
  {
    icon: <RiGroupLine />,
    title: "Desktop app Design",
    desc: "desktop app is different from web or mobile because users often expect powerful features, multi-window workflows, and rich interactions — but also clarity and efficiency.",
  },
];

export const CONTACT = [
  {
    icon: <FaRegEnvelope />,
    title: "Email",
    desc: "Hazemasaidui@gmail.com",
    href: "mailto:hazemasaidui@gmail.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    desc: "+0201092190750",
    href: "tel:+0201092190750",
  },
];
