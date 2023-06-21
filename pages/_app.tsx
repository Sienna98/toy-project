import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { CountProvider } from "@/contexts/count";
import CommonStyle from "@/styles/common";
import GlobalStyle from "@/styles/global-style";
import { theme } from "../src/styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CountProvider>
      <CommonStyle>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CommonStyle>
    </CountProvider>
  );
};

export default MyApp;
