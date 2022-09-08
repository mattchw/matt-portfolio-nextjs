import {
  Button,
  Container,
  Grid,
  Paper,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import Image from "next/image";
import styles from "./Project.module.css";
import { Project as ProjectType } from "../../interfaces";
import { Carousel } from "@mantine/carousel";

export interface Props {
  projects: ProjectType[];
}

const Project: React.FC<Props> = ({ projects }) => {
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Grid.Col span={4} key={project.name} style={{ padding: 10 }}>
          <div className={styles.container}>
            <a href={project.url} title={project.name}>
              <Image
                src={"/projects/" + project.image}
                alt={project.name}
                width={600}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  <h3 className="content-title">{project.name}</h3>
                  <hr />
                  <p className="content-text">{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        </Grid.Col>
      );
    });
  };

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Best forests to visit in North America",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Hawaii beaches review: better than you think",
      category: "beach",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Mountains at night: 12 best locations to enjoy the view",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Aurora in Norway: when to visit for best experience",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Best places to visit this winter",
      category: "tourism",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Active volcanos reviews: travel at your own risk",
      category: "nature",
    },
  ];

  interface CardProps {
    image: string;
    title: string;
    category: string;
  }

  const useStyles = createStyles((theme) => ({
    card: {
      height: 440,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
  }));

  function Card({ image, name, description }: ProjectType) {
    const { classes } = useStyles();

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

  const slides = projects.map((item) => (
    <Carousel.Slide key={item.name}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="xl" px="xs" className={styles.project}>
      <Grid justify="center" align="center">
        <Grid className={styles.projectsTitle}>
          <h2>Some of my Works</h2>
        </Grid>
      </Grid>
      <Carousel
        slideSize="33.333333%"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "500%", slideGap: 0 },
        ]}
        slideGap="sm"
        align="start"
        slidesToScroll={1}
        withIndicators
      >
        {slides}
      </Carousel>
    </Container>
  );
};

export default Project;
