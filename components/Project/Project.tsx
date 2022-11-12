import {
  Button,
  Container,
  Grid,
  Paper,
  Title,
  Card,
  Text,
  Image,
  Badge,
  createStyles,
  Avatar,
  Group,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Project.module.css";
import { Project as ProjectType } from "../../interfaces";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import { IconBrandGithub } from "@tabler/icons";
import Link from "next/link";

export interface Props {
  projects: ProjectType[];
}

const Project: React.FC<Props> = ({ projects }) => {
  const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
      height: 500,
    },

    controls: {
      ref: getRef("controls"),
      transition: "opacity 150ms ease",
      opacity: 0.3,
    },

    control: {
      width: 40,
      height: 40,
      opacity: 1,
    },

    slide: {
      height: 540,
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

  const renderProjects = () => {
    return projects.map((item) => (
      <Carousel.Slide key={item.name}>
        <ProjectCard {...item} />
      </Carousel.Slide>
    ));
  };

  const ProjectCard = ({
    image,
    name,
    url,
    github,
    description,
    tags,
  }: ProjectType) => {
    return (
      <Card
        shadow="sm"
        p="xl"
        component="a"
        target="_blank"
        className={classes.card}
        href={url ? url : undefined}
      >
        <Card.Section>
          <Image src={`/projects/${image}`} height={350} alt={name} />
        </Card.Section>

        <Group position="apart" mt="sm" mb="xs">
          <Text weight={500}>{name}</Text>
          <Group>
            {tags.map((tag) => (
              <Badge key={tag.name} color={tag.color} size="xs">
                {tag.name}
              </Badge>
            ))}
          </Group>
        </Group>

        <Text mt="xs" color="dimmed" size="sm" lineClamp={1}>
          {description}
        </Text>

        <Group position="apart" mt="md" mb="xs">
          <Link href={github}>
            <Button variant="light" leftIcon={<IconBrandGithub size={14} />}>
              Github
            </Button>
          </Link>
        </Group>
      </Card>
    );
  };

  return (
    <Container size="xl" px="xs" className={styles.project}>
      <Grid justify="center" align="center">
        <Grid className={styles.projectHeading}>
          <h2>Some of My Works</h2>
        </Grid>
      </Grid>
      <Carousel
        slideSize="60%"
        breakpoints={[
          { maxWidth: "md", slideSize: "80%" },
          { maxWidth: "sm", slideSize: "100%" },
        ]}
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
