import React, { ReactNode } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "@shopify/restyle";
import { Box, Theme } from "./theme";
import Constants from "expo-constants";

export const assets = [
  require("./assets/pattern1.png"),
  require("./assets/pattern2.png"),
  require("./assets/pattern3.png"),
] as const;

const { width, height: bHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          bHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        flex={1}
        backgroundColor="secondary"
      >
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
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
            source={asset}
            style={{ width, height, top: -height * 0.61 }}
          />
          <Box
            style={{ ...StyleSheet.absoluteFillObject }}
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
          >
            {children}
          </Box>
        </Box>
        <Box style={{ paddingBottom: insets.bottom }} paddingTop="m">
          {footer}
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
