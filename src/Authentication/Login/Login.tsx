import React from "react";

//components
import { Container, Button, VARIANT_COLOR } from "../../components";
import { SocialLogin } from "../components";
import { Box, Text } from "../../components/theme";
import { TextInput, Checkbox } from "../components/Form";

interface LoginProps {}

const emailValidator = (email: string): boolean => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const passwordValidator = (password: string): boolean => password.length >= 8;

const Footer = () => {
  return (
    <>
      <SocialLogin />
      <Box flex={1} alignItems="center" marginBottom="l">
        <Button
          variant={VARIANT_COLOR.transparent}
          onPress={() => alert("Successful sign up")}
        >
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
};

const Login = () => {
  return (
    <Container footer={<Footer />}>
      <Box padding="xl">
        <Text variant="title1" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="content" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="l">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your password"
          validator={passwordValidator}
        />
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginLeft="xl"
          marginTop="l"
        >
          <Checkbox label="Remember me" />
          <Button variant={VARIANT_COLOR.transparent} onPress={() => {}}>
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box justifyContent="center" alignItems="center" marginTop="l">
          <Button
            variant={VARIANT_COLOR.primary}
            label="Login to your account"
            onPress={() => alert("Login Successful")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
