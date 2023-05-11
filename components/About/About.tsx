import {
  Container,
  Grid,
  Text,
  useMantineTheme,
  Blockquote,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import Image from "next/image";
import styles from "./About.module.css";
import Skill from "./Skill/Skill";
import { IconCode } from "@tabler/icons";
import { quotes } from "../../constants/quotes";
import { useEffect, useState } from "react";

import VsDark from "prism-react-renderer/themes/vsDark";

export interface Props {
  data: {
    title: string;
    location: string;
    description: string;
    skills: string[];
    hobbies: string[];
  };
}

const About: React.FC<Props> = ({
  data: { title, location, description, skills, hobbies },
}) => {
  const theme = useMantineTheme();
  const demoCode = `
{
  "title": "${title}",
  "location": "${location}",
  "description": "${description}",
  "hobbies": [
    ${hobbies.map((hobby) => `"${hobby}"`).join(", ")}
  ],
}
  `;

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <Grid.Col key={index} span={4} style={{ textAlign: "center" }}>
        <Skill
          name={skill}
          color={theme.colorScheme === "dark" ? theme.white : theme.black}
        />
        <Text size="sm">{skill}</Text>
      </Grid.Col>
    ));
  };
  return (
    <Container size="xl" px="xs" className={styles.about}>
      <Grid justify="center" align="center" className={styles.aboutContainer}>
        <Grid.Col md={12} lg={4}>
          <div className={styles.aboutImgCircle}>
            <Image
              src="/profilepic.jpg"
              alt="Profile pic"
              width={250}
              height={250}
              className="about-img"
            />
          </div>
        </Grid.Col>
        <Grid.Col md={12} lg={8}>
          <Grid justify="center" align="center" className={styles.aboutHeading}>
            <h2>About Me</h2>
          </Grid>
          <Blockquote style={{ marginBottom: 20 }} cite={`- ${quote.cite}`}>
            {quote.quote}
          </Blockquote>
          <Prism
            language="json"
            withLineNumbers
            colorScheme="dark"
            getPrismTheme={(_theme, _colorScheme) => VsDark}
          >
            {demoCode}
          </Prism>
          <Grid
            justify="center"
            align="center"
            className={styles.aboutSkillsHeading}
          >
            <Grid className={styles.aboutSkillsHeadingText}>
              <IconCode size={24} className="headingIcon" />
              <span>Code Skills</span>
            </Grid>
          </Grid>
          <Grid gutter="xl">{renderSkills()}</Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default About;
