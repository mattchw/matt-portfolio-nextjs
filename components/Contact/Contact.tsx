import {
  Button,
  Container,
  Grid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Contact.module.css";

// componenets
import BusinessCard from "./BusinessCard/BusinessCard";

export interface Props {
  socials: {
    name: string;
    url: string;
  }[];
}

const Contact: React.FC<Props> = ({ socials }) => {
  const [values, setValues] = useState({
    "form-name": "mattwong.info",
    name: "",
    email: "",
    message: "",
  });
  const handleChange =
    (prop: string) => (event: { target: { value: string } }) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const networks = socials.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <p>{network.name}</p>
        </a>
      </li>
    );
  });
  return (
    <Container className={styles.contact}>
      <Grid justify="center" align="center">
        <h2>Contact</h2>
      </Grid>
      <Grid justify="center" align="center">
        <BusinessCard name={"Matt Wong"} image={"/profilepic-about.svg"} />
      </Grid>
      <Grid justify="center" align="center" style={{ paddingTop: 20 }}>
        <h4>Have a question or want to work together?</h4>
      </Grid>
      <form>
        <TextInput
          required
          label="Name"
          value={values.name}
          onChange={handleChange("name")}
        />
        <TextInput
          required
          label="Email"
          value={values.email}
          onChange={handleChange("email")}
        />
        <Textarea
          label="Message"
          minRows={4}
          value={values.message}
          onChange={handleChange("message")}
        />
        <Grid justify="center" align="center" style={{ paddingTop: 20 }}>
          <Button
            type="submit"
            style={{ color: "#e2e2e2", fontWeight: "bold" }}
          >
            Send
          </Button>
        </Grid>
      </form>

      <Grid justify="center" align="center" style={{ paddingTop: 50 }}>
        <Grid>
          <ul className={styles.copyright}>
            <li>Copyright &copy; Matthew Wong {new Date().getFullYear()}</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
