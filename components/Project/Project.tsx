import {
  Button,
  Container,
  Grid,
  Paper,
  Title,
  createStyles,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Project.module.css";
import { Project as ProjectType } from "../../interfaces";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";

export interface Props {
  projects: ProjectType[];
}

const Project: React.FC<Props> = ({ projects }) => {
  const renderProjects = () => {
    return projects.map((item) => (
      <Carousel.Slide key={item.name}>
        <Card {...item} />
      </Carousel.Slide>
    ));
  };

  const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
      height: 440,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      backgroundSize: "cover",
      backgroundPosition: "center",
      "&[data-active]": {
        height: 500,
      },
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      color: theme.white,
      lineHeight: 1.2,
      fontSize: 32,
      marginTop: theme.spacing.xs,
    },

    category: {
      color: theme.white,
      opacity: 0.7,
      fontWeight: 700,
      textTransform: "uppercase",
    },

    controls: {
      ref: getRef("controls"),
      transition: "opacity 150ms ease",
      opacity: 0,
    },

    control: {
      width: 40,
      height: 40,
      opacity: 1,
    },

    slide: {
      height: 480,
    },

    root: {
      "&:hover": {
        [`& .${getRef("controls")}`]: {
          opacity: 1,
        },
      },
    },

    indicator: {
      width: 14,
      height: 8,
      transition: "width 250ms ease",
      backgroundColor: theme.colors.gray[5],

      "&[data-active]": {
        width: 50,
      },
    },
  }));

  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  function Card({ image, name, description }: ProjectType) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(/projects/${image})` }}
        className={classes.card}
      >
        <div>
          <Title order={3} className={classes.title}>
            {name}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Github
        </Button>
      </Paper>
    );
  }

  return (
    <Container size="xl" px="xs" className={styles.project}>
      <Grid justify="center" align="center">
        <Grid className={styles.projectHeading}>
          <h2>Some of My Works</h2>
        </Grid>
      </Grid>
      <Carousel
        slideSize="33.333333%"
        breakpoints={[{ maxWidth: "md", slideSize: "50%" }]}
        slideGap="sm"
        align="center"
        slidesToScroll={1}
        withIndicators
        loop
        classNames={classes}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {renderProjects()}
      </Carousel>
    </Container>
  );
};

export default Project;
