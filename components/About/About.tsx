import { Container, Grid, Text } from "@mantine/core";
import Image from "next/image";
import styles from "./About.module.css";

export interface Props {
  data: {
    title: string;
    description: string;
    skills: string[];
  };
}

const About: React.FC<Props> = ({ data: { title, description, skills } }) => {
  const renderSkills = () => {
    return skills.map((skill, index) => (
      <Grid.Col key={index} span={4}>
        <Text size="lg" color="gray">
          {skill}
        </Text>
      </Grid.Col>
    ));
  };
  return (
    <Container className={styles.about}>
      <Grid justify="center" align="center" className={styles.aboutContainer}>
        <Grid.Col span={5}>
          <div className={styles.aboutImgCircle}>
            <Image
              src="/profilepic-about.svg"
              alt="Profile pic"
              width={250}
              height={250}
              className="about-img"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={7}>
          <Grid>
            <h2>About Me</h2>
          </Grid>
          <Grid>
            <Text size="sm">{description}</Text>
          </Grid>
          <Grid>
            <h4 className="about-skills-text">
              <span>Code Skills</span>
            </h4>
          </Grid>
          <Grid>{renderSkills()}</Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default About;
