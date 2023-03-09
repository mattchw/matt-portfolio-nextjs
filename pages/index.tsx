import {
  Center,
  Text,
  ActionIcon,
  useMantineColorScheme,
  createStyles,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { ParallaxBanner } from "react-scroll-parallax";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import { TypeAnimation } from "react-type-animation";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const useStyles = createStyles((theme) => ({
    headlineFont: {
      fontWeight: 300,
      fontSize: 60,
      lineHeight: 0.5,

      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        fontSize: 50,
      },

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        fontSize: 40,
      },

      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: 30,
      },
    },
    subHeadlineFont: {
      fontSize: 16,
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        fontSize: 14,
      },

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        fontSize: 12,
      },

      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        fontSize: 8,
      },
    },
  }));

  const { classes } = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mattchw"
      )
        .then((res) => res.json())
        .then((data) => {
          const res = data.items;
          const posts = res.filter(
            (item: { categories: string | any[] }) => item.categories.length > 0
          );
          setData(posts);
        });
    };

    fetchData();
  }, []);

  const background: BannerLayer = {
    image: "header-background.png",
    translateY: [0, 50],
    opacity: [0.9, 0.6],
    scale: [1.15, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 0],
    scale: [1, 1.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Center className={styles.content}>
        <TypeAnimation
          sequence={[
            "Hi, I'm Matt Wong",
            4000,
            "Hi, I'm a Software Engineer",
            4000,
          ]}
          wrapper="h1"
          speed={30}
          repeat={Infinity}
          className={classes.headlineFont}
        />
        <Text className={classes.subHeadlineFont}>
          I code and explore new technologies, and I love what I do.
        </Text>
      </Center>
    ),
  };

  const foreground: BannerLayer = {
    image: "/banner-foreground.png",
    translateY: [-10, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const overlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        }}
      />
    ),
  };

  return (
    <>
      <ActionIcon
        variant="light"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        className="themeButton"
      >
        {dark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
      </ActionIcon>
      <ParallaxBanner
        layers={[background, foreground, headline, overlay]}
        style={{
          height: "150vh",
          width: "100%",
        }}
      />
      <About
        data={{
          title: "Software Engineer 🧑‍💻",
          location: "United Kingdom 🇬🇧 / Hong Kong 🇭🇰",
          description:
            "Having worked at both frontend and backend positions for 2+ years, I am a self-driven fast learner with in-depth skills and expertise in designing, planning, developing and maintenance of software.",
          skills: [
            "Html",
            "Css",
            "Javascript",
            "Typescript",
            "Nodejs",
            "Python",
            "Golang",
            "Ruby",
          ],
          hobbies: ["Drawing 🎨", "Guitar 🎸", "Reading 📚", "Gaming 🎮"],
        }}
      />
      <Resume
        data={{
          work: [
            {
              company: "SHOPLINE",
              image: "/resume/work/shopline.jpeg",
              positions: [
                {
                  title: "Software Engineer",
                  startDate: "June 2022",
                  endDate: "Janurary 2023",
                  description: [
                    "Implemented cart microservice using Go and gRPC focusing on filtering and applying merchants' promotions with Hong Kong and Taiwan teams",
                    "Boosted the speed and performance of retrieving and filtering promotions of merchants by 90%, from 11s to 1s, and rolled out filtering feature to over 5,000 merchants",
                    "Wrote implementation plans and flowcharts on filtering and applying different types of bundle promotions",
                    "Wrote unit tests and designed integration tests on applying promotions and achieved over 70% code coverage with Go Testify",
                    "Assisted on updating existing Helm deployment files and deployed using development features to AWS EKS cluster",
                    "Monitored development and production logs and tracked issues using NewRelic and AWS CloudWatch",
                  ],
                },
              ],
            },
            {
              company: "AppicIDEA IT Solutions Limited",
              image: "/resume/work/appicidea.jpeg",
              positions: [
                {
                  title: "Software Engineer",
                  startDate: "June 2021",
                  endDate: "June 2022",
                  description: [
                    "Architected and designed highly available and scalable solutions using AWS including EC2, VPC, S3, RDS for clients",
                    "Collaborated with frontend developers and provided assistance and guidance on the integration of server-side APIs",
                    "Developed 5 server-side applications using Ts.ED, Node.js framework with Typescript, integrating with MySQL, PostgreSQL, Redis, RabbitMQ and Elasticsearch",
                    "Assisted on frequent code merges, builds, deployments with CI/CD pipeline using Jenkins, Docker and Kubernetes and setting up of the deployment environments including internal UAT and production on AWS",
                    "Maintained and monitored production applications with Kibana APM system on Elastic Cloud and provided technical support to clients",
                  ],
                },
                {
                  title: "Frontend Developer",
                  startDate: "December 2020",
                  endDate: "June 2021",
                  description: [
                    "Designed and documented common practices to standardize coding and git commit styles for internal developers",
                    "Developed and implemented 4 mobile applications with React Native, Redux, Typescript",
                    "Integrated mobile applications with internal Node.js REST API applications and Firebase",
                    "Configured CI/CD pipelines for mobile applications with App Center to increase delivery speed to clients for UAT and production purposes by 30%",
                  ],
                },
              ],
            },
            {
              company: "Zensis Limited",
              image: "/resume/work/zensis.png",
              positions: [
                {
                  title: "Backend Developer",
                  startDate: "June 2020",
                  endDate: "September 2020",
                  description: [
                    "Rebuilt the brokerage management system for one of the largest, listed real estate broker in Hong Kong by Node.js, Oracle Database, Redis",
                    "Performed load testing to improve and increase frequently used APIs' performance by 50%",
                    "Maintained and supported daily issues of SMPP applications",
                  ],
                },
              ],
            },
          ],
          education: [
            {
              school: "The Chinese University of Hong Kong",
              image: "/resume/education/cuhk.png",
              degree: "B.Sc. in Computer Science",
              startDate: "September 2015",
              endDate: "July 2019",
              description: [
                "Specialized in cloud, networks, database, web and mobile applications development",
                "Developed a set of 2 educational applications for assignment marking and grade analysis in final year project with Spring.io, Swift, React Native, Javascript",
              ],
            },
          ],
        }}
      />
      <Project
        projects={[
          {
            name: "Smart Bank",
            description: "Backend web service for banking system using Go",
            url: "",
            github: "https://github.com/mattchw/smart-bank",
            image: "SmartBank.png",
            tags: [
              {
                name: "Go",
                color: "blue",
              },
              {
                name: "PostgreSQL",
                color: "blue",
              },
            ],
          },
          {
            name: "UKChat",
            description:
              "Slack-like React application with Firebase for Hongkongers to talk about UK topics in an organized way",
            image: "UKChat.png",
            url: "https://uk-chatroom.web.app/",
            github: "https://github.com/mattchw/UKChat",
            tags: [
              {
                name: "React",
                color: "blue",
              },
              {
                name: "Firebase",
                color: "orange",
              },
            ],
          },
          {
            name: "Killer Queue",
            description:
              "MERN stack application for shop/restaurant to organise queueing effectively",
            image: "KillerQueue.png",
            github: "https://github.com/mattchw/Killer-Queue",
            tags: [
              {
                name: "React",
                color: "blue",
              },
              {
                name: "MongoDB",
                color: "teal",
              },
            ],
          },
          {
            name: "Polipedia",
            description:
              "React/Redux web application with Spring Boot server showing political stances and background of celebrities in HK and US",
            image: "Polipedia.png",
            github: "https://github.com/mattchw/Polipedia",
            tags: [
              {
                name: "React",
                color: "blue",
              },
              {
                name: "Spring",
                color: "green",
              },
              {
                name: "PostgreSQL",
                color: "blue",
              },
            ],
          },
          {
            name: "Buy2Play",
            description:
              "Nodejs with Express.js Web app for second-hand game trading",
            image: "Buy2Play.png",
            github: "https://github.com/mattchw/buy2play",
            tags: [
              {
                name: "Express",
                color: "blue",
              },
              {
                name: "MySQL",
                color: "blue",
              },
            ],
          },
        ]}
      />
      <Blog posts={data} />
      <Contact
        info={{
          name: "Matt Wong",
          location: "United Kingdom",
          image: "/profilepic-about.svg",
          email: "matthew.chohin@gmail.com",
        }}
        socials={[
          {
            name: "GitHub",
            url: "https://github.com/mattchw",
          },
          {
            name: "LinkedIn",
            url: "https://linkedin.com/in/mattchw",
          },
        ]}
      />
    </>
  );
};

export default Home;
