import { Center, Text, createStyles } from "@mantine/core";
import styles from "./Banner.module.css";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { ParallaxBanner } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

const Banner: React.FC<{}> = () => {
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
    <ParallaxBanner
      layers={[background, foreground, headline, overlay]}
      style={{
        height: "150vh",
        width: "100%",
      }}
    />
  );
};

export default Banner;
