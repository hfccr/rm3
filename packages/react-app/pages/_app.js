import "../styles/index.css";
import "antd/dist/antd.css";
import React, { useEffect, useRef } from "react";
import { Web3Provider } from "../helpers/Web3Context";
import { DevUI, NetworkDisplay, ThemeSwitch } from "../components";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Head from "next/head";
import { brandingDarkTheme } from "./../themes/mui-theme";
import { ThemeProvider } from "@mui/material/styles";
import { HeaderContainer } from "../components";
import { AssetsContextProvider } from "./../components/Contexts/AssetsContextProvider";
import { MessagingContextProvider } from "../components/Contexts/MessagingContextProvider";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { GridChartsModule } from "@ag-grid-enterprise/charts";
import { Provider } from "@self.id/framework";

ModuleRegistry.registerModules([ClientSideRowModelModule, GridChartsModule]);

function MyApp({ Component, pageProps }) {
  const prevTheme = useRef("light");

  const themes = {
    dark: `/css/dark-theme.css`,
    light: `/css/light-theme.css`,
  };

  useEffect(() => {
    prevTheme.current = window.localStorage.getItem("theme");
  }, []);
  const getLayout = Component.getLayout || (page => page);
  return (
    <Web3Provider network="localhost">
      <ThemeProvider theme={brandingDarkTheme}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme.current}>
          <AssetsContextProvider>
            <MessagingContextProvider>
              <Provider client={{ ceramic: "testnet-clay" }}>
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
                  {/* Page Header start */}
                  <HeaderContainer {...pageProps} />
                  {/* Page Header end */}
                  {getLayout(<Component {...pageProps} />)}
                </>
              </Provider>
            </MessagingContextProvider>
          </AssetsContextProvider>
        </ThemeSwitcherProvider>
      </ThemeProvider>
    </Web3Provider>
  );
}

export default MyApp;
