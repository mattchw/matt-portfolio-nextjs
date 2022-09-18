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
    return posts.slice(0, 6).map((post) => {
      return (
        <Grid.Col span={4} key={post.title} style={{ padding: 10 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section component="a" href={post.link} target="_blank">
              <Image src={post.thumbnail} height={160} alt={post.title} />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text lineClamp={1} weight={500}>
                {post.title}
              </Text>
            </Group>
            {post.categories.slice(0, 2).map((category, index) => (
              <Badge key={index} color="pink" size="sm">
                {category}
              </Badge>
            ))}

            <Text size="sm" color="dimmed"></Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              {post.pubDate.slice(0, 10)}
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
