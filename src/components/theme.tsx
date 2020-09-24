import { createTheme, createText, createBox, useTheme } from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

const theme = createTheme({
  colors: {
    primary: "#2cb9b0",
    secondary: "#0C0D34",
    "text-content": "rgba(12,13,52, 0.7)",
    white: "#ffffff",
    grey: "rgba(12,13,52, 0.05)",
    "slide.grey": "#F4F0EF",
    darkGrey: "#8A8D90",
    danger: "#FF0058",
    transparent: "transparent",
    primaryLight: "#E7F9F7",
    black: "#000",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
  },
  breakpoints: {},
  spacing: {
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-SemiBold",
      color: "secondary",
      textAlign: "center",
      textTransform: "capitalize",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-SemiBold",
      color: "secondary",
      textAlign: "center",
      textTransform: "capitalize",
    },
    content: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text-content",
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Medium",
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const makeStyles = <T extends NamedStyles<T>>(
  cb: (theme: Theme) => T
) => () => {
  const theme = useTheme<Theme>();
  return cb(theme);
};

export default theme;
