import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Text,
  Image,
} from "@mantine/core";
import BlogPost from "../../interfaces/blogPost";
import styles from "./Blog.module.css";

export interface Props {
  posts: BlogPost[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  const renderPosts = () => {
    return posts.slice(0, 8).map((post) => {
      return (
        <Grid.Col span={3} key={post.title} style={{ padding: 10 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section component="a" href="https://mantine.dev/">
              <Image src={post.thumbnail} height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
      );
    });
  };
  return (
    <Container size="xl" px="xs" className={styles.about}>
      <Grid justify="center" align="center" className={styles.blogTitle}>
        <h2>My Latest Blogs</h2>
      </Grid>
      <Grid>{renderPosts()}</Grid>
    </Container>
  );
};

export default Blog;
