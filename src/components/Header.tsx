import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  left,
  right,
  title,
  dark = false,
}) => {
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="l"
      style={{
        marginTop: insets.top + 10,
      }}
    >
      <RoundedIconButton
        name={left.icon}
        size={44}
        iconRatio={0.4}
        onPress={left.onPress}
        backgroundColor={backgroundColor}
        color={color}
      />
      <Text variant="header" textTransform="uppercase" color={color}>
        {title}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={44}
        iconRatio={0.4}
        onPress={right.onPress}
        backgroundColor={backgroundColor}
        color={color}
      />
    </Box>
  );
};

export default Header;
