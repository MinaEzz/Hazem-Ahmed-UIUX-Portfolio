import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaBehance, FaWhatsapp } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import {
  TbBrandAdobeXd,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremier,
  TbBrandCss3,
  TbBrandJavascript,
} from "react-icons/tb";
import { GrHtml5 } from "react-icons/gr";

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
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact Me",
    href: "#contact",
  },
];

export const SOCIAL_MEDIA = [
  {
    title: "Linkedin",
    icon: <CiLinkedin />,
    href: "https://www.linkedin.com/in/hazem-ahmed879",
  },
  {
    title: "Behance",
    icon: <FaBehance />,
    href: "https://www.behance.net/hazemahmed82",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/hazemahmed8384",
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/+201092190750",
  },
  // {
  //   title: "Dribble",
  //   icon: <FaDribbble />,
  //   href: "",
  // },
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
    // icon: <RiGroupLine />,
    title: "App Design",
    desc: "Mobile app design demands a keen focus on UX/UI principles. Prioritizing user experience (UX) ensures intuitive navigation and ease of use.",
  },
  {
    // icon: <RiGroupLine />,
    title: "Web Design",
    desc: "i focuses on the holistic experience a user has while interacting with a website. It encompasses aspects like usability, accessibility, and overall satisfaction",
  },
  {
    // icon: <RiGroupLine />,
    title: "SaaS Design",
    desc: "SaaS design isn’t just about making an app look nice — it’s about creating a product that users can understand quickly, trust immediately, and use effortlessly.",
  },
  {
    // icon: <RiGroupLine />,
    title: "CRM Design",
    desc: "CRM system means balancing data density with usability — you’re showing a lot of information (contacts, deals, pipelines) without overwhelming the user.",
  },
  {
    // icon: <RiGroupLine />,
    title: "Control Panel Design",
    desc: "A control panel design is all about clarity, quick access, and feedback — whether it’s for SaaS admin dashboards, IoT devices, or system monitoring.",
  },
  {
    // icon: <RiGroupLine />,
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

export const SKILLS = [
  {
    icon: <FaFigma />,
    percentage: 100,
    title: "Figma",
  },
  {
    icon: <TbBrandAdobeXd />,
    percentage: 100,
    title: "Adobe XD",
  },
  {
    icon: <TbBrandAdobePhotoshop />,
    percentage: 85,
    title: "Adobe Photoshop",
  },
  {
    icon: <TbBrandAdobeIllustrator />,
    percentage: 60,
    title: "Adobe Illustrator",
  },
  {
    icon: <TbBrandAdobePremier />,
    percentage: 70,
    title: "Adobe Premier",
  },
  {
    icon: <GrHtml5 />,
    percentage: 100,
    title: "HTML",
  },
  {
    icon: <TbBrandCss3 />,
    percentage: 100,
    title: "CSS",
  },
  {
    icon: <TbBrandJavascript />,
    percentage: 85,
    title: "Javascript",
  },
];

export const SERVICE_OPTIONS = [
  {
    label: "App Design",
    value: "App Design",
  },
  {
    label: "Web Design",
    value: "Web Design",
  },
  {
    label: "SaaS Design",
    value: "SaaS Design",
  },
  {
    label: "CRM Design",
    value: "CRM Design",
  },
  {
    label: "Control Panel Design",
    value: "Control Panel Design",
  },
];

export const PROJECTS = [
  {
    title: "Millensys Medical Solution Mobile application",
    image: "https://www2.0zz0.com/2025/09/12/09/987034779.jpg",
    link: "",
    category: "mobile-app",
  },
  {
    title: "Traviro B2B Travel Booking solution",
    image: "https://www2.0zz0.com/2025/09/12/09/987034779.jpg",
    link: "",
    category: "web-app",
  },
  {
    title: "Traviro B2B Dashboard Travel Booking solution",
    image: "https://www2.0zz0.com/2025/09/12/09/987034779.jpg",
    link: "",
    category: "control-panel",
  },
  {
    title: "Visalab Visa Booking solution",
    image: "https://www2.0zz0.com/2025/09/12/09/987034779.jpg",
    link: "",
    category: "web-app",
  },
];

export const CATEGORIES = [
  {
    label: "Web Design",
    id: "web_app",
  },
  {
    label: "Mobile App Design",
    id: "mobile_app",
  },
  {
    label: "Control Panel Design",
    id: "control_panel",
  },
  {
    label: "PACS System Design",
    id: "pacs_system",
  },
];
