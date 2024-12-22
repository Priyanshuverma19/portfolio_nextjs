import pizzaImg from "@/public/pizza.png";
import courseImg from "@/public/course.png";
import chatImg from "@/public/chat.png";
import pkstorageImg from "@/public/pkstorage.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Pk storage",
    description:
      "Createing a storatge application using nextjs like a google drive clone where user store document image vedio and mp3",
    tags: ["React", "Next.js", "appwrite", "Tailwind","react-dropzone","Zod","recharts","input-otp"],
    imageUrl: pkstorageImg,
  },
  {
    title: "My Pizza Ecommers",
    description:
      " simple pizza delivery application built using React and Node.js. This project includes features such as user authentication, order management,and real-time order tracking.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "aws","next-auth","stripe"],
    imageUrl: pizzaImg,
  },
  {
    title: "Subscription Based Plateform",
    description:
      "  Course subscription website is your Video Subscription Platform. Add unlimited videos, posts, and pages to your subscription site.",
    tags: ["React", "chakra ui", "Redux","Cloudinary","framer-motion","chart-js","razorpay"],
    imageUrl: courseImg,
  },
  {
    title: "Real Time Chat App",
    description:
      "create a chat app using Socket io and React based modern messaging app where users can sign up and log in to chat with their friends, family, colleagues among groups with enriched User-Experience.",
    tags: ["React", "Socit.io", "firebase"],
    imageUrl: chatImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "Python",
  "Framer Motion",
] as const;
