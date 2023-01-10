import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillHtml5,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import HeroImage from "./../public/home-right.png";
import AboutMe from "./../public/about-us.png";
import DesignImage from "./../public/s2.png";
import Image from "next/image";
import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Divider from "../components/Divider";
import { useState } from "react";
import IsotopeGrid from "react-isotope";
import filtersDefault from "../data/filters";
import portfolioCards, { PortfolioCard } from "../data/portfolioCards";
import Highlight from "../components/Highlight";
import Bullet from "./../public/s4.png";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [filters, updateFilters] = useState(filtersDefault);
  const onFilter = (e: any | Event) => {
    console.log("filter");
    const {
      target: { value, checked },
    } = e;

    let newFilters = [];
    filters.forEach((filter) => {
      if (filter.label === value) {
        filter.isChecked = true;
      } else {
        filter.isChecked = false;
      }
      newFilters.push(filter);
    });
    updateFilters(newFilters);
  };
  return (
    <>
      <Head>
        <title>Kingsley Ihemelandu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={darkMode ? "dark" : null}>
        <header className="sticky top-0 shadow-xl bg-gray-200 max-h-72 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <nav className="py-10 flex justify-between">
            <h1 className="text-3xl font-burtons dark:text-white">Kingsley</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </li>
              <li>
                <Link
                  className="bg-crimson text-white px-4 py-2 rounded-md ml-8 uppercase"
                  href={"#"}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="">
          <section className="hero_section text-center p-10 bg-crimson">
            <Container>
              <div className="md:flex md:justify-between md:items-center md:gap-6">
                <div>
                  <h2 className="text-3xl text-gray-400">I Am</h2>
                  <h1 className="text-5xl py-2  font-medium md:text-6xl text-white">
                    Kingsley Ihemelandu
                  </h1>
                  <TypeAnimation
                    sequence={["Fullstack Engineer", 2000, "Freelancer", 2000]}
                    cursor={true}
                    repeat={Infinity}
                    wrapper={"h3"}
                    className={"text-4xl py-2 leading-8 text-gray-200"}
                  />
                  <div className="buttons"></div>
                  <div className="text-5xl flex justify-center gap-16 py-3 text-gray-200">
                    <Link href="https://twitter.com/kcihemelandu">
                      <AiFillTwitterCircle className="hover:text-white hover:text-6xl cursor-pointer" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kcihemelandu/">
                      <AiFillLinkedin className="hover:text-white cursor-pointer hover:text-6xl" />
                    </Link>
                    <Link href="https://github.com/OfficialKingsley">
                      <AiFillGithub className="hover:text-white cursor-pointer hover:text-6xl" />
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block lg:relative lg:mx-auto lg:bg-gray-900 lg:rounded-full lg:w-80 lg:h-80 lg:mt-20 lg:overflow-hidden">
                  <Image
                    src={HeroImage}
                    alt="Hero Image"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </Container>
          </section>

          {/* About Me */}

          <Section type={"dark"}>
            <Container>
              <SectionHeader>About Me</SectionHeader>
              <Divider />
              <div className="md:flex md:justify-between md:items-center md:gap-6">
                <div className="hidden lg:block lg:relative lg:mx-auto lg:bg-crimson lg:rounded-full lg:w-80 lg:h-80 lg:mt-20 lg:overflow-hidden">
                  <Image
                    src={AboutMe}
                    alt="About Me"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="max-w-2xl">
                  <Paragraph>
                    I am Kingsley Ihemelandu, a Fullstack Developer: experienced
                    in technologies like &nbsp;
                    <Highlight>React.js</Highlight>,&nbsp;
                    <Highlight>Node.js</Highlight> and &nbsp;
                    <Highlight>Django</Highlight>.
                  </Paragraph>

                  <Paragraph>
                    I seek challenging opportunities where I can fully use my
                    skills for the success of the organization.
                    <br />I seek to learn as much as I can and to improve myself
                    in any little way I can.
                    <br />I am also ready and willing to work in teams to bring
                    out the best in any project or company I work on/with. I
                    look to work in an environment which encourages me to
                    succeed and grow professionally where I can utilize my
                    skills and knowledge appropriately.
                  </Paragraph>

                  <Paragraph>
                    I am currently studying Systems Engineering in the
                    University of Lagos, Nigeria. I am currently a year one
                    student.
                  </Paragraph>
                </div>
              </div>
            </Container>
          </Section>

          {/* Skills */}

          <Section type={"red"}>
            <Container>
              <SectionHeader type={"red"}>Skills</SectionHeader>
              <Divider type={"red"} />
              <div className="">
                <div className="">
                  <Paragraph type={"red"}>
                    I am skilled in different frontend and backend technologies
                  </Paragraph>
                  <ul className="flex flex-wrap justify-center gap-3 py-2">
                    <li className="text-white border w-80 grow rounded-xl bg-gray-900 px-4 py-2 max-w-lg">
                      <h3 className="text-3xl text-white text-center">
                        Frontend
                      </h3>
                      <Divider />
                      <ul>
                        <li>
                          <AiFillHtml5 />
                          HTML:
                          <ProgressBar percent={80} />
                        </li>
                        <li>
                          CSS:
                          <ProgressBar percent={80} />
                        </li>

                        <li>
                          JavaScript:
                          <ProgressBar percent={80} />
                        </li>
                        <li>
                          React:
                          <ProgressBar percent={80} />
                        </li>
                        <li>
                          Bootstrap:
                          <ProgressBar percent={60} />
                        </li>
                        <li>
                          Tailwind:
                          <ProgressBar percent={60} />
                        </li>
                      </ul>
                    </li>
                    <li className="text-white w-80 border grow rounded-xl bg-gray-900 px-4 py-2 max-w-lg">
                      <h3 className="text-3xl text-white text-center">
                        Backend
                      </h3>
                      <Divider />
                      <ul>
                        <li>
                          Nodejs :
                          <ProgressBar percent={80} />
                        </li>
                        <li>
                          Express js :
                          <ProgressBar percent={80} />
                        </li>
                        <li>
                          Django/Python :
                          <ProgressBar percent={80} />
                        </li>
                      </ul>
                    </li>
                    <li className="text-white  w-80 border grow rounded-xl bg-gray-900 px-4 py-2 max-w-lg">
                      <h3 className="text-3xl text-white text-center">
                        Others
                      </h3>
                      <Divider />
                      <ul>
                        <li>
                          Working with git :
                          <ProgressBar percent={70} />
                        </li>
                        <li>
                          Using basic bash scripting :
                          <ProgressBar percent={50} />
                        </li>
                        <li>
                          Basic containerization with Docker :
                          <ProgressBar percent={50} />
                        </li>
                        <li>
                          Basic CI/CD Knowledge with Jenkins and GitLab :
                          <ProgressBar percent={50} />
                        </li>
                      </ul>
                    </li>

                    <li className="text-white  w-80 border grow rounded-xl bg-gray-900 px-4 py-2 max-w-lg">
                      <h3 className="text-3xl text-white text-center">
                        Management
                      </h3>
                      <Divider />
                      <ul>
                        <li>Time Management</li>
                        <li>Team Work</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </Container>
          </Section>

          {/* Experience */}

          <Section type={"dark"}>
            <Container>
              <SectionHeader>Experience</SectionHeader>
              <Divider />
              <Paragraph>
                I have worked in a few places as listed below
              </Paragraph>
              <div>
                <ul>
                  <li className="relative pl-10">
                    <Image
                      src={Bullet}
                      alt={"Bullet"}
                      className={"absolute left-0 w-7 top-2"}
                    />
                    <div>
                      <h3 className="text-2xl">Intern - ECCLES IT LTD.</h3>
                      <Paragraph>July, 2022 - September, 2022</Paragraph>
                      <Paragraph>
                        I worked as a fullstack python web developer in ECCLES
                        IT LTD. It was a nice experience as I was able to learn
                        of technologies like DJango, Bootstrap, Git, GitLab and
                        bash scripting.
                      </Paragraph>
                      <Paragraph>
                        One of the most important skills I gained was the skill
                        of communication. I had to communicate with my team
                        members, hold meetings and give reports of the progress
                        of development.
                      </Paragraph>
                    </div>
                  </li>
                </ul>
              </div>
            </Container>
          </Section>

          {/* Services */}

          <Section type={"red"}>
            <Container>
              <div className="">
                <SectionHeader type={"red"}>Services I Offer</SectionHeader>
                <Divider type={"red"} />
                <Paragraph type={"red"}>
                  Since the beginning of my journey as a freelance web
                  developer, I've done remote work for{" "}
                  <Highlight>agencies</Highlight> consulted for{" "}
                  <Highlight>startups</Highlight> and collaborated with talented
                  people to create digital products for both business and
                  consumer use
                </Paragraph>

                <Paragraph type={"red"}>
                  I offer a wide range of services, including programming and
                  teaching
                </Paragraph>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <ServiceCard
                  image={DesignImage}
                  title={"Beautiful Designs"}
                  text={"Creating elegant designs suited or your needs"}
                />

                <ServiceCard
                  image={DesignImage}
                  title={"Low fees"}
                  text={
                    "My cost is at low rates and are done within the time frame established"
                  }
                />
                <ServiceCard
                  image={DesignImage}
                  title={"Good Communication"}
                  text={
                    "I make sure to always communicate with my clients and managers when necessary; in order to inform them of the current situation of the project"
                  }
                />
                <ServiceCard
                  image={DesignImage}
                  title={"Team Work"}
                  text={
                    "I have learned over the years to work in teams and produce good results"
                  }
                />
              </div>
            </Container>
          </Section>

          {/* Portfolio */}

          <Section type={"dark"}>
            <Container>
              <div>
                <SectionHeader>Portfolio</SectionHeader>
                <Divider />
                <Paragraph>
                  Since the beginning of my journey as a freelance web
                  developer, I've done remote work for{" "}
                  <Highlight>agencies</Highlight> consulted for{" "}
                  <Highlight>startups</Highlight> and collaborated with talented
                  people to create digital products for both business and
                  consumer use
                </Paragraph>
                <Paragraph>
                  I offer a wide range of services, including programming and
                  teaching
                </Paragraph>
              </div>

              <div
                className="filter-container bg-white rounded-3xl px-2
              "
              >
                {filters.map((filter) => (
                  <div
                    className={`filter inline-block mx-2 my-1 w-24 text-center rounded-3xl cursor-pointer  hover:bg-gray-900 hover:text-white  dark:hover:text-white dark:hover:bg-crimson ${
                      filter.isChecked &&
                      "bg-gray-900 text-white dark:bg-crimson dark:text-white"
                    } ${!filter.isChecked && "dark:text-gray-900"}`}
                    key={`${filter.label}_key`}
                  >
                    <input
                      type="checkbox"
                      id={filter.label}
                      value={filter.label}
                      checked={filter.isChecked}
                      onChange={onFilter}
                      className="hidden"
                    />
                    <label
                      htmlFor={filter.label}
                      className={"capitalize cursor-pointer"}
                    >
                      {filter.label}
                    </label>
                  </div>
                ))}
              </div>

              <div className="container">
                <IsotopeGrid
                  filters={filters}
                  gridLayout={portfolioCards}
                  unitWidth={400}
                  unitHeight={400}
                  noOfCols={1}
                >
                  {portfolioCards.map((card: PortfolioCard) => (
                    <figure
                      key={card.id}
                      className={`${card.filter[0]} text-center hover:bg-gray-800 p-10 rounded-2xl my-10 grow bg-gray-800`}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        className={"w-full rounded-xl"}
                      />
                      <figcaption>
                        <h3 className="text-white text-3xl my-2">
                          {card.title}
                        </h3>
                        <Divider />
                        <Paragraph type={"red"}>{card.description}</Paragraph>
                        <Link
                          className="bg-crimson text-white px-4 py-2 rounded-md ml-8 uppercase block cursor-pointer"
                          href={"#"}
                        >
                          Check It Out
                        </Link>
                      </figcaption>
                    </figure>
                  ))}
                </IsotopeGrid>
              </div>
            </Container>
          </Section>

          {/* Contact Section */}

          <Section type="red">
            <Container>
              <SectionHeader type={"red"}>Contact Me</SectionHeader>
              <Divider type={"red"} />
              <div className="flex justify-center">
                <form
                  action=""
                  className="bg-gray-900 rounded-2xl p-4 max-w-2xl w-full font-burtons"
                  data-netlify="true"
                  name="Contact Form"
                  method="POST"
                >
                  <div className="m-2">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Full Name"
                      className="rounded p-2 outline-none w-full placeholder:text-gray-700"
                    />
                  </div>
                  <div className="m-2">
                    <input
                      type="email"
                      name="Email"
                      id="email"
                      placeholder="Email"
                      className="rounded p-2 outline-none w-full placeholder:text-gray-700"
                    />
                  </div>
                  <div className="m-2">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="rounded p-2 outline-none w-full placeholder:text-gray-700"
                      name="Phone Number"
                    />
                  </div>
                  <div className="m-2">
                    <input
                      type="text"
                      placeholder="Title"
                      className="rounded p-2 outline-none w-full placeholder:text-gray-700"
                      name="Message Title"
                    />
                  </div>
                  <div className="m-2">
                    <textarea
                      name="Message Body"
                      id=""
                      cols={30}
                      rows={10}
                      className="rounded p-2 outline-none w-full resize-y placeholder:text-gray-700"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="block bg-crimson text-white uppercase w-full p-2 rounded"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-3xl flex justify-center gap-16 py-3 text-gray-200">
                <Link href="https://twitter.com/kcihemelandu">
                  <AiFillTwitterCircle className="hover:text-white hover:text-4xl cursor-pointer" />
                </Link>
                <Link href="https://linkedin.com/in/kcihemelandu">
                  <AiFillLinkedin className="hover:text-white cursor-pointer hover:text-4xl" />
                </Link>
                <Link href="https://github.com/OfficialKingsley">
                  <AiFillGithub className="hover:text-white cursor-pointer hover:text-4xl" />
                </Link>
                <Link href="https://gitlab.com/OfficialKingsley">
                  <AiFillGitlab className="hover:text-white cursor-pointer hover:text-4xl" />
                </Link>
              </div>
            </Container>
          </Section>
        </main>
        <footer className="sticky top-0 shadow-xl bg-gray-200 max-h-72 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <Paragraph>
            Copyright &copy; This site was designed and coded by Kingsley
            Ihemelandu
          </Paragraph>
          <div>
            <h3 className="text-2xl dark:text-white ">You can contact me.</h3>
            <ul>
              <li className="inline-block mx-2">
                <Paragraph>
                  Phone:{" "}
                  <Link href={"tel:+2349035810428"}>
                    {" "}
                    <Highlight>+234 903 581 0428</Highlight>{" "}
                  </Link>
                </Paragraph>
              </li>
              <li className="inline-block mx-2">
                <Paragraph>
                  Email:{" "}
                  <Link href={"mailto:kingiheme2005@gmail.com"}>
                    <Highlight>kingiheme2005@gmail.com</Highlight>
                  </Link>
                </Paragraph>
              </li>
              <li></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
