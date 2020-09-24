import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

//components
import { Container, Button, VARIANT_COLOR } from "../components";
import { Box, Text } from "../components/theme";
import Footer from "./components/Footer";
import { AuthNavigationProps } from "../components/Navigation";
import { Checkbox, TextInput } from "../components/Form";
import { BorderlessButton } from "react-native-gesture-handler";

const LoginSchema = () =>
  Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "To short").required("Required"),
  });

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: (values) => navigation.navigate("Home"),
    validationSchema: LoginSchema,
  });

  const passwordRef = useRef<RNTextInput>(null);
  return (
    <Container
      pattern={0}
      footer={
        <Footer
          title="Don't have an account?"
          action="Sign up here"
          onPress={() => navigation.navigate("SignUp")}
        />
      }
    >
      <Box padding="xl" flex={1} justifyContent="center">
        <Text variant="title1" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="content" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box>
          <Box marginBottom="l">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              errors={formik.errors.email}
              touched={formik.touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>
          <TextInput
            ref={passwordRef}
            icon="lock"
            placeholder="Enter your password"
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            errors={formik.errors.password}
            touched={formik.touched.password}
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="email"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => formik.handleSubmit()}
          />
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            style={{ marginLeft: -8 }}
            marginTop="l"
          >
            <Checkbox
              label="Remember me"
              checked={formik.values.remember}
              onChange={() =>
                formik.setFieldValue("remember", !formik.values.remember)
              }
            />
            <BorderlessButton
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text color="primary">Forgot password</Text>
            </BorderlessButton>
          </Box>
          <Box justifyContent="center" alignItems="center" marginTop="l">
            <Button
              variant={VARIANT_COLOR.primary}
              label="Login to your account"
              onPress={formik.handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
