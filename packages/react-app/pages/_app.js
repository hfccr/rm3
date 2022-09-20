import "../styles/index.css";
import "antd/dist/antd.css";
import React, { useEffect, useRef } from "react";
import { Web3Provider } from "../helpers/Web3Context";
import { DevUI, NetworkDisplay, ThemeSwitch } from "../components";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Head from "next/head";
import { brandingDarkTheme } from "./../themes/mui-theme";
import { ThemeProvider } from "@mui/material/styles";
import { Header } from "../components";

function MyApp({ Component, pageProps }) {
  const prevTheme = useRef("light");

  const themes = {
    dark: `/css/dark-theme.css`,
    light: `/css/light-theme.css`,
  };

  useEffect(() => {
    prevTheme.current = window.localStorage.getItem("theme");
  }, []);

  return (
    <Web3Provider network="localhost">
      <ThemeProvider theme={brandingDarkTheme}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme.current}>
          <>
            <Head>
              <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏗</text></svg>"
              />
            </Head>
            <NetworkDisplay />
            <DevUI />
            <ThemeSwitch />
            <Component {...pageProps} />
          </>
        </ThemeSwitcherProvider>
      </ThemeProvider>
    </Web3Provider>
  );
}

export default MyApp;
