import React from "react";
import { Box, Text, Theme } from "../theme";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";

interface CheckboxProps {
  label: string;
  onChange: () => void;
  checked: boolean;
}

const CheckBox = ({ label, checked, onChange }: CheckboxProps) => {
  const theme = useTheme<Theme>();
  const themeColor: keyof typeof theme.colors = checked ? "primary" : "white";
  const color = theme.colors[themeColor];
  return (
    <BorderlessButton onPress={onChange}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        marginLeft="m"
      >
        <Box
          height={20}
          width={20}
          borderColor="primary"
          alignItems="center"
          justifyContent="center"
          borderWidth={StyleSheet.hairlineWidth}
          borderRadius="s"
          marginRight="m"
          backgroundColor={themeColor}
        >
          <Icon name="check" color="#ffffff" size={16} />
        </Box>
        <Text>{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default CheckBox;
