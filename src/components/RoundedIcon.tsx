import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  backgroundColor: string;
  color: keyof Theme["colors"];
  iconRatio?: number;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  name,
  size,
  backgroundColor,
  color,
  iconRatio = 0.7,
}) => {
  const IconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      style={{ borderRadius: size }}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
    >
      <Text color={color} style={{ height: IconSize, width: IconSize }}>
        <Icon
          {...{ name, color }}
          size={IconSize}
          style={{ textAlign: "center" }}
        />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
