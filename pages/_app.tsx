import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";
import { useState } from "react";

import ReactGA from "react-ga";
ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID || "");
ReactGA.pageview(window.location.pathname);

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Matt Wong</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:url" content="mattwong.info" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matt Wong" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Matthew Wong Personal Website"
        />
        <meta property="og:image" content={"/logo192.png"} />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
          }}
        >
          <NotificationsProvider>
            <ParallaxProvider>
              <Component {...pageProps} />
            </ParallaxProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
