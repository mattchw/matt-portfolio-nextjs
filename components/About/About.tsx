import { Container, Grid } from "@mantine/core";

export interface Props {
  data: {
    title: string;
    description: string;
  };
}

const About: React.FC<Props> = () => {
  return (
    <Container>
      <Grid>
        <Grid.Col span={12}>
          <h1>About</h1>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default About;
