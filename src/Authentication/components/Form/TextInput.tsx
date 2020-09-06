import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import theme, { Box } from "../../../components/theme";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  validator: (value: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
enum INPUT_STATE {
  valid = "valid",
  invalid = "invalid",
  pristine = "pristine",
}

const inputIsValid = (validity: INPUT_STATE): boolean =>
  validity === INPUT_STATE.valid;

const inputIsNotValid = (validity: INPUT_STATE): boolean =>
  validity === INPUT_STATE.invalid;

const inputIsPristine = (validity: INPUT_STATE) =>
  validity === INPUT_STATE.pristine;

const TextInput = ({
  icon,
  placeholder,
  validator,
  ...props
}: TextInputProps) => {
  const [input, setInput] = useState("");
  const [validity, setValidity] = useState<INPUT_STATE>(INPUT_STATE.pristine);
  const themeColor: keyof typeof theme.colors = inputIsPristine(validity)
    ? "text-content"
    : inputIsValid(validity)
    ? "primary"
    : "danger";
  const color = theme.colors[themeColor];

  const validate = () => {
    const verdict = validator(input);
    verdict ? setValidity(INPUT_STATE.valid) : setValidity(INPUT_STATE.invalid);
  };

  const handleTextChange = (text: string) => {
    setInput(text);
    validate();
  };

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
          onBlur={validate}
          onChangeText={handleTextChange}
          {...props}
        />
      </Box>
      {(inputIsValid(validity) || inputIsNotValid(validity)) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          backgroundColor={themeColor}
          alignItems="center"
          justifyContent="center"
        >
          <Icon
            name={inputIsValid(validity) ? "check" : "x"}
            color="#ffffff"
            size={14}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
