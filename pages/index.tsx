import { Center, Container, Title, Text, Divider } from "@mantine/core";
import { createGetInitialProps } from "@mantine/next";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { ParallaxBanner } from "react-scroll-parallax";

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
        <Text size="sm">
          I code and explore new technologies, and I love what I do.
        </Text>
      </Center>
    ),
  };

  const foreground: BannerLayer = {
    image: "banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };
  return (
    <>
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        style={{
          height: "200vh",
          width: "100vw",
        }}
      />
    </>
  );
};

export default Home;
