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
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigatorStack, homeAssets } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";

const assets = [...authenticationAssets, ...homeAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets fonts={fonts} assets={assets}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationStack}
            ></AppStack.Screen>
            <AppStack.Screen
              name="Home"
              component={HomeNavigatorStack}
            ></AppStack.Screen>
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
