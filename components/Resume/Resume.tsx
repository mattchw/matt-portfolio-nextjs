import {
  Accordion,
  Container,
  Grid,
  Text,
  List,
  Timeline,
  Avatar,
  Group,
} from "@mantine/core";
import { Work, Education } from "../../interfaces";
import styles from "./Resume.module.css";
import { IconBriefcase, IconSchool } from "@tabler/icons";

export interface Props {
  data: {
    work: Work[];
    education: Education[];
  };
}

const Resume: React.FC<Props> = ({ data: { work, education } }) => {
  const renderWork = () => {
    return (
      <Accordion variant="contained" defaultValue="work">
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
      <Accordion variant="contained" defaultValue="education">
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
        <Grid.Col span={3}>
          <Grid className={styles.resumeLeftTitle}>
            <IconBriefcase size={24} className="icon" />
            <span>Work</span>
          </Grid>
        </Grid.Col>
        <Grid.Col span={9}>{renderWork()}</Grid.Col>
      </Grid>
      <Grid justify="center" className={styles.resumeContainer}>
        <Grid.Col span={3}>
          <Grid className={styles.resumeLeftTitle}>
            <IconSchool size={24} className="icon" />
            <span>Education</span>
          </Grid>
        </Grid.Col>
        <Grid.Col span={9}>{renderEducation()}</Grid.Col>
      </Grid>
    </Container>
  );
};

export default Resume;
