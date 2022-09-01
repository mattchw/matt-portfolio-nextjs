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
            "Software Engineer at Amazon",
            "Software Engineer at Microsoft",
            "Software Engineer at Google",
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
