import { createTheme, createText, createBox } from "@shopify/restyle";

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
export default theme;