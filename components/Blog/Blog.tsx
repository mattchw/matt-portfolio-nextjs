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
import { useEffect, useState } from "react";
import BlogPost from "../../interfaces/blogPost";
import styles from "./Blog.module.css";

export interface Props {
  posts: BlogPost[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  const [postNum, setPostNum] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPostNum(4);
      } else {
        setPostNum(6);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const renderPosts = () => {
    return posts.slice(0, postNum).map((post) => {
      return (
        <Grid.Col sm={6} md={4} key={post.title} style={{ padding: 10 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section component="a" href={post.link} target="_blank">
              <Image src={post.thumbnail} height={160} alt={post.title} />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text lineClamp={1} weight={500}>
                {post.title}
              </Text>
            </Group>
            <Group position="left" mt="md" mb="xs">
              {post.categories.slice(0, 1).map((category, index) => (
                <Badge key={index} color="pink" size="sm">
                  {category}
                </Badge>
              ))}
              <Badge size="sm">{post.pubDate.slice(0, 10)}</Badge>
            </Group>

            <Text size="sm" color="dimmed" lineClamp={3}>
              {post.description
                .replace(/<figure>.*?<\/figure>\s?/g, "")
                .replace(/<\/?[^>]+(>|$)/g, "")
                .substring(0, 300)}
            </Text>
          </Card>
        </Grid.Col>
      );
    });
  };
  return (
    <Container size="xl" px="xs" className={styles.blog}>
      <Grid justify="center" align="center">
        <Grid className={styles.blogHeading}>
          <h2>My Latest Blogs</h2>
        </Grid>
      </Grid>
      <Grid>{renderPosts()}</Grid>
    </Container>
  );
};

export default Blog;
