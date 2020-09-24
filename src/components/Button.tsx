import React, { ReactNode } from "react";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme, Text } from "./theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 245,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export enum VARIANT_COLOR {
  primary = "PRIMARY",
  default = "DEFAULT",
}

interface ButtonProps {
  label?: string;
  variant?: VARIANT_COLOR;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({
  label,
  variant = VARIANT_COLOR.default,
  onPress,
  children,
}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === VARIANT_COLOR.primary
      ? theme.colors.primary
      : theme.colors.grey;

  const color =
    variant === "PRIMARY" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      {children ? children : <Text style={{ color }}>{label}</Text>}
    </RectButton>
  );
};

export default Button;
