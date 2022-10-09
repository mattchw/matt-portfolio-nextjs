import {
  Accordion,
  Container,
  Grid,
  Text,
  List,
  Timeline,
  Avatar,
  Group,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Work, Education } from "../../interfaces";
import styles from "./Resume.module.css";
import { IconBriefcase, IconSchool } from "@tabler/icons";

export interface Props {
  data: {
    work: Work[];
    education: Education[];
  };
}

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: "1px solid transparent",
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",

    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },
}));

const Resume: React.FC<Props> = ({ data: { work, education } }) => {
  const { classes } = useStyles();
  const smMedia = useMediaQuery(
    `(min-width: ${useMantineTheme().breakpoints.sm}px)`
  );
  const renderWork = () => {
    return (
      <Accordion variant="contained" defaultValue="work" classNames={classes}>
        {work.map((item, index) => (
          <Accordion.Item key={index} value={item.company}>
            <Accordion.Control>
              <Group noWrap>
                <Avatar src={item.image} radius="xl" size="lg" />
                <Text>{item.company}</Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Timeline
                active={item.positions.length}
                bulletSize={16}
                lineWidth={2}
              >
                {item.positions.map((position, index) => (
                  <Timeline.Item
                    key={index}
                    title={position.title}
                    lineVariant="dashed"
                  >
                    <Text size="xs" mt={4}>
                      {position.startDate} - {position.endDate}
                    </Text>
                    <List size="sm" withPadding>
                      {position.description.map((description, index) => (
                        <List.Item key={index}>{description}</List.Item>
                      ))}
                    </List>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  };
  const renderEducation = () => {
    return (
      <Accordion
        variant="contained"
        defaultValue="education"
        classNames={classes}
      >
        {education.map((item, index) => (
          <Accordion.Item key={index} value={item.school}>
            <Accordion.Control>
              <Group noWrap>
                <Avatar src={item.image} radius="xl" size="lg" />
                <Text>{item.school}</Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm" mt={4}>
                {item.degree}
              </Text>
              <Text size="xs" mt={4}>
                {item.startDate} - {item.endDate}
              </Text>
              <List size="sm" withPadding>
                {item.description.map((description, index) => (
                  <List.Item key={index}>{description}</List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  };
  return (
    <Container size="lg" px="xs" className={styles.about}>
      <Grid justify="center" className={styles.resumeContainer}>
        <Grid.Col xs={12} sm={3}>
          <Grid className={styles.resumeLeft}>
            <Grid
              className={
                smMedia ? styles.resumeLeftTitle : styles.resumeLeftTitleSM
              }
            >
              <IconBriefcase size={24} className="headingIcon" />
              <span>Work</span>
            </Grid>
          </Grid>
        </Grid.Col>
        <Grid.Col xs={12} sm={9}>
          {renderWork()}
        </Grid.Col>
      </Grid>
      <Grid justify="center" className={styles.resumeContainer}>
        <Grid.Col xs={12} sm={3}>
          <Grid className={styles.resumeLeft}>
            <Grid
              className={
                smMedia ? styles.resumeLeftTitle : styles.resumeLeftTitleSM
              }
            >
              <IconSchool size={24} className="headingIcon" />
              <span>Education</span>
            </Grid>
          </Grid>
        </Grid.Col>
        <Grid.Col xs={12} sm={9}>
          {renderEducation()}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Resume;
