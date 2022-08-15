import { Container } from "@mantine/core";
import { createGetInitialProps } from "@mantine/next";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";

const getInitialProps = createGetInitialProps();

const Home: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className={styles.heading}>
        <h1 className={styles.headingText}>Matt Wong</h1>
        <h2 className={styles.headingCaption}>
          I code and explore new technologies, and I love what I do.
        </h2>
      </div>
    </>
  );

  return (
    <>
      <section className={styles.parallax}>
        <div
          className={styles.parallaxBackground}
          style={{
            transform: `translateY(-${offsetY}px)`,
          }}
        />

        <div
          className={styles.parallaxObject}
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        >
          <Image src={require("../public/header-object.svg")} alt="" />
        </div>
        <div className={styles.content}>{renderContent()}</div>
      </section>
      <section className={aboutStyles.about}>
        <Container>About</Container>
      </section>
    </>
  );
};

export default Home;
