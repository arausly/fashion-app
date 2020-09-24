import { useTheme } from "@shopify/restyle";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { RoundedIcon } from "../../components";
import { Box, Theme, Text } from "../../components/theme";

export interface DrawerItemInterface {
  color: keyof Theme["colors"];
  screen: string;
  label: string;
  icon: string;
}

const DrawerItem: React.FC<DrawerItemInterface> = ({
  color,
  screen,
  label,
  icon,
}) => {
  const theme = useTheme<Theme>();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m, marginBottom: 20 }}>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          name={icon}
          backgroundColor={color}
          color="white"
          size={36}
          iconRatio={0.5}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
