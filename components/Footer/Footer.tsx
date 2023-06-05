import { Container, Divider, Grid } from "@mantine/core";
import styles from "./Footer.module.css";
const Footer: React.FC<{}> = () => {
  return (
    <Container size="xl" px="lg" className={styles.contact}>
      <div
        style={{ paddingTop: 40, display: "flex", justifyContent: "center" }}
      >
        <Divider style={{ width: "50%" }} />
      </div>
      <Grid
        justify="center"
        align="center"
        style={{ marginTop: 40, marginBottom: 40 }}
      >
        <ul className={styles.copyright}>
          <li>Copyright &copy; Matthew Wong {new Date().getFullYear()}</li>
        </ul>
      </Grid>
    </Container>
  );
};

export default Footer;
