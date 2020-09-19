import * as React from "react";
import { ThemeProvider, useTheme } from "@shopify/restyle";

//components
import LoadAssets from "./src/components/LoadAssets";
import {
  authenticationAssets,
  AuthenticationStack,
} from "./src/Authentication";

import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./src/components/theme";
const assets = [...authenticationAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets fonts={fonts} assets={assets}>
        <SafeAreaProvider>
          <AuthenticationStack />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
