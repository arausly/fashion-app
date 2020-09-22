import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./theme";

interface RoundedIconProps {
  name: string;
  size: number;
  backgroundColor: string;
  color: keyof Theme["colors"];
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  name,
  size,
  backgroundColor,
  color,
}) => {
  const IconSize = size * 0.7;
  return (
    <Box
      height={size}
      width={size}
      borderRadius="m"
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
    >
      <Text color={color} style={{ height: IconSize, width: IconSize }}>
        <Icon name={name} size={IconSize} style={{ textAlign: "center" }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
