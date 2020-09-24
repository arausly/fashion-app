import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash";
import { Box } from "../../components/theme";

interface CardProps {
  position: Animated.Adaptable<number>;
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);

const Card: React.FC<CardProps> = ({ position }) => {
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateY = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  return (
    <Box
      style={{ ...StyleSheet.absoluteFillObject }}
      justifyContent="center"
      alignItems="center"
    >
      <Animated.View
        style={{
          borderRadius: 24,
          backgroundColor,
          width,
          height,
          transform: [
            {
              translateY,
            },
            { scale },
          ],
        }}
      />
    </Box>
  );
};

export default Card;
