import React from "react";
import {
  Button,
  Container,
  RoundedIcon,
  RoundedIconButton,
  VARIANT_COLOR,
} from "../components";
import {
  AuthenticationRoutes,
  AuthNavigationProps,
} from "../components/Navigation";
import { Box, Text } from "../components/theme";
import { Feather as Icon } from "@expo/vector-icons";

interface PasswordChangedProps extends AuthNavigationProps<"PasswordChanged"> {}

const SIZE = 80;

const PasswordChanged: React.FC<PasswordChangedProps> = ({ navigation }) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            onPress={() => navigation.navigate("Login")}
            name="x"
            size={60}
            backgroundColor="white"
            color="black"
          />
        </Box>
      }
    >
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        paddingHorizontal="l"
      >
        <RoundedIcon
          backgroundColor="primaryLight"
          size={SIZE}
          color="primary"
          name="check"
        />
        <Text variant="title2" marginBottom="m" marginVertical="l">
          Your password was successfully changed
        </Text>
        <Text variant="content" textAlign="center">
          Close this window and login again
        </Text>
        <Box justifyContent="center" alignItems="center" marginTop="l">
          <Button
            variant={VARIANT_COLOR.primary}
            label="Login again"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
