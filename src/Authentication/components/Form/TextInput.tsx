import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme } from "../../../components/theme";
import { useTheme } from "@shopify/restyle";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  errors?: string;
  touched?: boolean;
}

const TextInput = ({
  icon,
  placeholder,
  errors,
  touched,
  ...props
}: TextInputProps) => {
  const theme = useTheme<Theme>();
  const SIZE = theme.borderRadii.m * 2;
  const themeColor = !touched ? "text-content" : errors ? "danger" : "primary";
  const color = theme.colors[themeColor];

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={themeColor}
      padding="s"
    >
      <Box padding="m">
        <Icon name={icon} size={16} color={color} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor="#151624"
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          backgroundColor={themeColor}
          alignItems="center"
          justifyContent="center"
        >
          <Icon name={errors ? "x" : "check"} color="#ffffff" size={14} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
