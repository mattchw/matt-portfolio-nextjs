import { Container, Grid, Text } from "@mantine/core";
import Image from "next/image";
import styles from "./Project.module.css";
import { Project as ProjectType } from "../../interfaces";

export interface Props {
  projects: ProjectType[];
}

const Project: React.FC<Props> = ({ projects }) => {
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Grid.Col span={4} key={project.name} style={{ padding: 10 }}>
          <div className={styles.container}>
            <a href={project.url} title={project.name}>
              <Image
                src={"/projects/" + project.image}
                alt={project.name}
                width={250}
                height={250}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  <h3 className="content-title">{project.name}</h3>
                  <hr />
                  <p className="content-text">{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        </Grid.Col>
      );
    });
  };
  return (
    <Container className={styles.project}>
      <Grid justify="center" align="center" className={styles.aboutContainer}>
        <Grid className={styles.projectsTitle}>
          <h2>Some of my Works</h2>
        </Grid>
      </Grid>
      <Grid>{renderProjects()}</Grid>
    </Container>
  );
};

export default Project;
