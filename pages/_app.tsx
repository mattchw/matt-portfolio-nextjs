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
import { useEffect, useState } from "react";

import ReactGA from "react-ga";
import Script from "next/script";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    ReactGA.initialize(
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID || ""
    );
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS4_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS4_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1140,
                    xl: 1320,
                  },
                },
              },
            },
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
