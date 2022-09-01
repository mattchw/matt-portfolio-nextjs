import { Accordion, Container, Grid, Text } from "@mantine/core";
import Image from "next/image";
import styles from "./Resume.module.css";

export interface Props {
  data: {
    work: string[];
    education: string[];
  };
}

const Resume: React.FC<Props> = ({ data: { work, education } }) => {
  const renderWork = () => {
    return (
      <Accordion variant="filled" defaultValue="work">
        {work.map((item, index) => (
          <Accordion.Item key={index} value={item}>
            <Accordion.Control>{item}</Accordion.Control>
            <Accordion.Panel>
              Colors, fonts, shadows and many other parts are customizable to
              fit your design needs
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
