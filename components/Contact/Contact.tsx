import { Button, Container, Grid, Text, TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Contact.module.css";

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
      <Grid justify="center" align="center" className={styles.contactHeader}>
        <h2>Contact</h2>
      </Grid>
      <Grid>
        <div className="card">
          <Grid className="additional" style={{ margin: "auto 0" }}>
            <Grid style={{ margin: "auto", padding: 10 }}>
              {/* <img src={logo} alt="logo" style={{ width: 30 }} /> */}
              <div style={{ margin: "auto" }} className="circle">
                {/* <img src={profilepic} alt={name} /> */}
              </div>

              <div className="cardName">
                <span>Hi</span>
              </div>
            </Grid>
          </Grid>
          <Grid className="general">
            <Grid style={{ fontSize: 13 }}>
              <p className="address" style={{ color: "#525252" }}>
                <span>ewfewfewf</span>
                <br />
                <Link href="/hello" passHref>
                  <Button style={{ fontSize: 13 }}>ewfewfewfwfwe</Button>
                </Link>
              </p>
              <ul className="social-links more">{networks}</ul>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid style={{ paddingTop: 20, width: "75%" }}>
        <h4>Have a question or want to work together?</h4>
        <form>
          <div>
            <TextInput
              required
              variant="filled"
              label="Name"
              value={values.name}
              style={{
                margin: "10px auto",
                backgroundColor: "#e2e2e2",
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div>
            <TextInput
              required
              variant="filled"
              label="Email"
              value={values.email}
              style={{
                margin: "10px auto",
                backgroundColor: "#e2e2e2",
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div>
            <TextInput
              label="Message"
              variant="filled"
              value={values.message}
              style={{
                margin: "10px auto",
                backgroundColor: "#e2e2e2",
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <Button
            type="submit"
            style={{ color: "#e2e2e2", fontWeight: "bold" }}
          >
            Send
          </Button>
        </form>
      </Grid>

      <Grid style={{ paddingTop: 20 }}>
        <hr />
        <ul className="copyright" style={{ paddingTop: 20 }}>
          <li>Copyright &copy; Matthew Wong {new Date().getFullYear()}</li>
        </ul>
      </Grid>
    </Container>
  );
};

export default Contact;
