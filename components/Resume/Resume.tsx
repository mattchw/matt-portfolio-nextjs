import {
  Accordion,
  Container,
  Grid,
  Text,
  List,
  Timeline,
} from "@mantine/core";
import Image from "next/image";
import Work from "../../interfaces/work";
import styles from "./Resume.module.css";

export interface Props {
  data: {
    work: Work[];
    education: string[];
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
                  <Timeline.Item key={index} title={position.title}>
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
        <Grid.Col span={9}>{renderWork()}</Grid.Col>
      </Grid>
    </Container>
  );
};

export default Resume;
