import {
  Button,
  Container,
  Grid,
  Card,
  Text,
  Image,
  Badge,
  createStyles,
  Group,
  rem,
  getStylesRef,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Project.module.css";
import { Project as ProjectType } from "../../interfaces";
import { Carousel } from "@mantine/carousel";
import { useEffect, useRef } from "react";
import { IconBrandGithub } from "@tabler/icons";
import Link from "next/link";

import { useInView } from "../../hooks/useInView";
import { motion, useAnimation } from "framer-motion";

export interface Props {
  id: string;
  projects: ProjectType[];
  addSectionRef: (id: string, ref: React.MutableRefObject<any>) => void;
  onVisibilityChange: (id: string, visible: boolean) => void;
}

const Project: React.FC<Props> = ({
  id,
  projects,
  addSectionRef,
  onVisibilityChange,
}) => {
  const { ref, visible } = useInView();
  const animation = useAnimation();
  const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
      height: rem(500),
    },

    controls: {
      ref: getStylesRef("controls"),
      transition: "opacity 150ms ease",
      opacity: 0.3,
    },

    control: {
      width: 40,
      height: 40,
      opacity: 1,
    },

    slide: {
      height: rem(540),
    },

    root: {
      "&:hover": {
        [`& .${getStylesRef("controls")}`]: {
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

  useEffect(() => {
    if (ref.current) {
      addSectionRef(id, ref);
    }
  }, [ref, addSectionRef, id]);

  useEffect(() => {
    onVisibilityChange(id, visible);
  }, [visible, onVisibilityChange, id]);

  useEffect(() => {
    if (visible) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    } else {
      animation.start({ scale: 0.8, opacity: 0 });
    }
  }, [visible, animation]);

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
    <Container size="xl" px="lg" className={styles.project} ref={ref}>
      <Grid justify="center" align="center">
        <Grid className={styles.projectHeading}>
          <h2>My Works</h2>
        </Grid>
      </Grid>
      <motion.div ref={ref} animate={animation}>
        <Carousel
          slideSize="80%"
          breakpoints={[
            { maxWidth: "xl", slideSize: "80%" },
            { maxWidth: "lg", slideSize: "80%" },
            { maxWidth: "md", slideSize: "80%" },
            { maxWidth: "sm", slideSize: "90%" },
            { maxWidth: "xs", slideSize: "100%" },
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
      </motion.div>
    </Container>
  );
};

export default Project;
