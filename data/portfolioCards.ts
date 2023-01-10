import { StaticImageData } from "next/image";
import { GridLayout } from "react-isotope";
import p1 from "./../public/p1.jpg";
import SocioPedia from "./../public/socio-pedia.png";
import FacebookClone from "./../public/fb-clone.png";
import Blog from "./../public/blog.jpg";
import Ecommerce from "./../public/e-commerce.png";

export interface PortfolioCard {
  id: string | number;
  title: string;
  row: number;
  col: number;
  w: number;
  h: number;
  filter: string[];
  image: StaticImageData;
  description: string;
}
const portfolioCards: GridLayout[] | PortfolioCard[] | any = [
  {
    id: "facebook_clone",
    title: "Facebook Clone",
    row: 2,
    col: 1,
    w: 1,
    h: 1,
    filter: ["all", "frontend", "fullstack"],
    image: FacebookClone,
    description:
      "This is a fullstack project where I used Next.js for the frontend and Django (Django rest framework) for the backend. It had functionalities like login, logout, liking posts, adding friends",
  },
  {
    id: "djanog_blog",
    title: "DJango Blog",
    row: 2,
    col: 1,
    w: 1,
    h: 1,
    filter: ["all", "fullstack"],
    description:
      "This is a django project done with the use of bootstrap for styling. During the process of making this, I learned both and some advance use cases of Django.",
    image: Blog,
  },
  {
    id: "django_ecommerce",
    title: "Django E-commerce store",
    row: 2,
    col: 1,
    w: 1,
    h: 1,
    filter: ["all", "fullstack"],
    description:
      "This is a django project done with the use of bootstrap for styling. ",
    image: Ecommerce,
  },
  {
    id: "social_media_app",
    title: "MERN Social Media App",
    row: 2,
    col: 1,
    w: 1,
    h: 1,
    filter: ["all", "fullstack"],
    description:
      "This is a fullstack MERN application. It made use of Mongo DB as the database. Node and Express for the API (Backend) and React.js for the frontend",
    image: SocioPedia,
  },
];

export default portfolioCards;
