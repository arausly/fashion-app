import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, makeStyles, Theme } from "../../components/theme";

interface BackgroundProps {}

const assets = [require("./assets/background.png")];
const useStyles = makeStyles((theme: Theme) =>
  StyleSheet.create({
    image: {
      ...StyleSheet.absoluteFillObject,
      width: "auto",
      height: "auto",
      borderTopLeftRadius: theme.borderRadii.xl,
      borderBottomRightRadius: theme.borderRadii.xl,
    },
  })
);

const Background = () => {
  const styles = useStyles();
  return (
    <Box flex={1}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="white"
          borderBottomRightRadius="xl"
        ></Box>
      </Box>
      <Box flex={1 / 3}>
        <Box
          flex={1}
          backgroundColor="secondary"
          borderTopLeftRadius="xl"
        ></Box>
        <Image source={assets[0]} style={styles.image} />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="secondary"
          borderTopLeftRadius="xl"
        ></Box>
      </Box>
    </Box>
  );
};

export default Background;
