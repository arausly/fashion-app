import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "@shopify/restyle";
import { Box, Theme } from "./theme";

export const assets = [require("./assets/pattern1.png")];

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{ width, height, top: -height * 0.61 }}
        />
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
      </Box>
      <Box style={{ paddingBottom: insets.bottom }} paddingTop="m">
        {footer}
      </Box>
    </Box>
  );
};

export default Container;
