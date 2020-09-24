import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import { Box, Text, Theme } from "../components/theme";
import { Button, VARIANT_COLOR } from "../components";
import { AuthNavigationProps } from "../components/Navigation";
import { useTheme } from "@shopify/restyle";
import { BorderlessButton } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const picture = {
  src: require("./assets/5.png"),
  width: 3383,
  height: 5074,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme<Theme>();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={picture.src}
          style={[
            {
              width: width - theme.borderRadii.xl,
              height:
                ((width - theme.borderRadii.xl) * picture.height) /
                picture.width,
            },
          ]}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="grey"
        ></Box>
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get Started</Text>
          <Text variant="content" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant={VARIANT_COLOR.primary}
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Join us, it's Free"
            onPress={() => navigation.navigate("SignUp")}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text>Forgot password?</Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
