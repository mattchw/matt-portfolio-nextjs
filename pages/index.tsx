import { Center, Grid, Title, Text, Divider, Container } from "@mantine/core";
import { createGetInitialProps } from "@mantine/next";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { ParallaxBanner } from "react-scroll-parallax";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";

const Home: NextPage = () => {
  const background: BannerLayer = {
    image: "header-background.svg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 20],
    scale: [1, 1.2, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Center className={styles.content}>
        <Title order={1}>{"Hi, I'm Matt Wong"}</Title>
        <Divider my="sm" />
        <Text size="md">
          I code and explore new technologies, and I love what I do.
        </Text>
      </Center>
    ),
  };

  const astronaut: BannerLayer = {
    translateY: [0, 10],
    scale: [1, 0.8, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <Grid justify="flex-end" style={{ height: "100%" }}>
        <Grid.Col span={4}>
          <Container
            style={{ height: "100%", display: "flex", paddingBottom: "50%" }}
          >
            <Image
              src="/header-object.svg"
              alt="Astronaut"
              width={250}
              height={250}
            />
          </Container>
        </Grid.Col>
      </Grid>
    ),
  };

  return (
    <>
      <ParallaxBanner
        layers={[background, astronaut, headline]}
        style={{
          height: "200vh",
          width: "100vw",
        }}
      />
      <About
        data={{
          title: "About",
          description: "I'm a software engineer",
          skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
        }}
      />
      <Resume
        data={{
          work: [
            {
              company: "AppicIDEA IT Solutions Limited",
              positions: [
                {
                  title: "Software Engineer",
                  startDate: "June 2021",
                  endDate: "Present",
                  description: [
                    "Architect and design highly available and scalable solutions using AWS including EC2, VPC, S3, RDS for clients",
                    "Collaborate with frontend developers and provide assistance and guidance on the integration of server-side APIs",
                    "Develop and implement 5 server-side applications using Ts.ED (Node.js framework with Typescript) integrating with MySQL, PostgreSQL, Redis, RabbitMQ and Elasticsearch",
                    "Write unit tests, end-to-end tests and integration tests and achieve over 70% code coverage with Jest and Supertest",
                    "Asist on frequent code merges, builds, deployments with CI/CD pipeline using Jenkins, Docker and Kubernetes and setting up of the deployment environments including internal UAT and production on AWS",
                    "Maintain and monitor production applications with Kibana APM system on Elastic Cloud and provide technical support to clients",
                  ],
                },
                {
                  title: "Frontend Developer",
                  startDate: "December 2020",
                  endDate: "June 2021",
                  description: [
                    "Designed and documented common practices to standardise coding and git commit styles for internal developers",
                    "Developed and implemented 4 mobile applications with React Native, Redux, Typescript in a mobile team of 5",
                    "Integrated mobile applications with internal Node.js REST API applications and Firebase",
                    "Configured CI/CD pipelines for mobile apps with App Center to increase delivery speed to clients for UAT and production purposes by 30%",
                  ],
                },
              ],
            },
            {
              company: "Zensis Limited",
              positions: [
                {
                  title: "Backend Developer",
                  startDate: "June 2020",
                  endDate: "September 2020",
                  description: [
                    "Rebuild the real estate and property system with Nodejs, Redis, Oracle Database, ElasticSearch and deploy it on AWS EC2",
                    "Performed load testing to improve and increase frequently used APIs’ performance by 50%",
                    "Maintained and supported daily issues of SMPP applications",
                  ],
                },
              ],
            },
            ,
          ],
          education: [
            "University of California, Berkeley",
            "University of California, Berkeley",
            "University of California, Berkeley",
          ],
        }}
      />
    </>
  );
};

export default Home;
