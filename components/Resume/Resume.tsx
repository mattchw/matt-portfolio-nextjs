import {
  Accordion,
  Container,
  Grid,
  Text,
  List,
  Timeline,
} from "@mantine/core";
import Image from "next/image";
import { Work, Education } from "../../interfaces";
import styles from "./Resume.module.css";

export interface Props {
  data: {
    work: Work[];
    education: Education[];
  };
}

const Resume: React.FC<Props> = ({ data: { work, education } }) => {
  const renderWork = () => {
    return (
      <Accordion variant="filled" defaultValue="work">
        {work.map((item, index) => (
          <Accordion.Item key={index} value={item.company}>
            <Accordion.Control>{item.company}</Accordion.Control>
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
      <Accordion variant="filled" defaultValue="education">
        {education.map((item, index) => (
          <Accordion.Item key={index} value={item.school}>
            <Accordion.Control>{item.school}</Accordion.Control>
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
    <Container className={styles.about}>
      <Grid justify="center" align="center" className={styles.resumeContainer}>
        <Grid.Col span={3}>
          <h3 className={styles.resumeLeftTitle}>
            <span>Work</span>
          </h3>
        </Grid.Col>
        <Grid.Col span={9}>{renderWork()}</Grid.Col>
      </Grid>
      <Grid justify="center" align="center" className={styles.resumeContainer}>
        <Grid.Col span={3}>
          <h3 className={styles.resumeLeftTitle}>
            <span>Education</span>
          </h3>
        </Grid.Col>
        <Grid.Col span={9}>{renderEducation()}</Grid.Col>
      </Grid>
    </Container>
  );
};

export default Resume;
