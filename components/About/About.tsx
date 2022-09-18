import { Container, Grid, Text, useMantineTheme } from "@mantine/core";
import { Prism } from "@mantine/prism";
import Image from "next/image";
import styles from "./About.module.css";
import Skill from "./Skill/Skill";

export interface Props {
  data: {
    title: string;
    description: string;
    skills: string[];
  };
}

const About: React.FC<Props> = ({ data: { title, description, skills } }) => {
  const theme = useMantineTheme();
  const demoCode = `
{
  "title": "${title}",
  "description": "${description}",
  "skills": [
    ${skills.map((skill) => `"${skill}"`).join(", ")}
  ],
}
  `;

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <Grid.Col key={index} span={3} style={{ textAlign: "center" }}>
        <Skill
          name={skill}
          color={theme.colorScheme === "dark" ? theme.white : theme.black}
        />
        <Text size="sm">{skill}</Text>
      </Grid.Col>
    ));
  };
  return (
    <Container size="lg" px="xs" className={styles.about}>
      <Grid justify="center" align="center" className={styles.aboutContainer}>
        <Grid.Col md={12} lg={4}>
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
        <Grid.Col md={12} lg={8}>
          <Grid>
            <h2>About Me</h2>
          </Grid>
          <Prism language="json" withLineNumbers>
            {demoCode}
          </Prism>
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
