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
import { useInView } from "../../hooks/useInView";

import VsDark from "prism-react-renderer/themes/vsDark";
import VsLight from "prism-react-renderer/themes/vsLight";
import React from "react";

export interface Props {
  id: string;
  data: {
    title: string;
    location: string;
    description: string;
    skills: string[];
    hobbies: string[];
  };
  addSectionRef: (id: string, ref: React.MutableRefObject<any>) => void;
  onVisibilityChange: (id: string, visible: boolean) => void;
}

const About: React.FC<Props> = ({
  id,
  data: { title, location, description, skills, hobbies },
  addSectionRef,
  onVisibilityChange,
}) => {
  const theme = useMantineTheme();
  const { ref, visible } = useInView();

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

  useEffect(() => {
    if (ref.current) {
      addSectionRef(id, ref);
    }
  }, [ref, addSectionRef, id]);

  useEffect(() => {
    onVisibilityChange(id, visible);
  }, [visible, onVisibilityChange, id]);

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
    <Container size="xl" px="xs" className={styles.about} ref={ref}>
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
            getPrismTheme={(_theme, _colorScheme) =>
              theme.colorScheme === "dark" ? VsDark : VsLight
            }
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
