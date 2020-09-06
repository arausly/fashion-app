import React, { useState } from "react";
import theme, { Box, Text } from "../../../components/theme";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

interface CheckboxProps {
  label: string;
}

const CheckBox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const themeColor: keyof typeof theme.colors = checked ? "primary" : "white";
  const color = theme.colors[themeColor];
  return (
    <RectButton onPress={() => setChecked((c) => !c)}>
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
    </RectButton>
  );
};

export default CheckBox;
