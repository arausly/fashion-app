import React from "react";
import { Button, CloseButton, Container, VARIANT_COLOR } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";
import { Box, Text } from "../components/theme";
import { Feather as Icon } from "@expo/vector-icons";

interface PasswordChangedProps
  extends StackNavigationProps<Routes, "PasswordChanged"> {}

const SIZE = 80;

const PasswordChanged: React.FC<PasswordChangedProps> = ({ navigation }) => {
  return (
    <Container footer={<CloseButton onPress={() => alert("Moving on 😃")} />}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE }}
          alignItems="center"
          justifyContent="center"
          backgroundColor="primaryLight"
          marginBottom="m"
        >
          <Text color="primary">
            <Icon name="check" size={40} style={{ textAlign: "center" }} />
          </Text>
        </Box>
        <Text variant="title2" marginBottom="m">
          Let's get Started
        </Text>
        <Text variant="content" textAlign="center">
          Login to your account below or signup for an amazing experience
        </Text>
        <Box justifyContent="center" alignItems="center" marginTop="l">
          <Button
            variant={VARIANT_COLOR.primary}
            label="Reset password"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
