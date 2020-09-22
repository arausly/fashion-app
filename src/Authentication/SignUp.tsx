import React, { useRef } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

//components
import { Container, Button, VARIANT_COLOR } from "../components";
import { Box, Text } from "../components/theme";
import { TextInput, Checkbox } from "../components/Form";
import Footer from "./components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";

interface SignUpProps {}

const SignUpSchema = () =>
  Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "To short").required("Required"),
    confirmPassword: Yup.string()
      .equals([Yup.ref("password")], "Passwords must match")
      .required(),
  });

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      remember: false,
    },
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    validationSchema: SignUpSchema,
  });

  const passwordRef = useRef<RNTextInput>(null);
  const confirmPasswordRef = useRef<RNTextInput>(null);
  return (
    <Container
      pattern={1}
      footer={
        <Footer
          title="Already have an account? "
          action="Login here"
          onPress={() => navigation.navigate("Login")}
        />
      }
    >
      <Box padding="xl">
        <Text variant="title1" marginBottom="l">
          Create account
        </Text>
        <Text variant="content" textAlign="center" marginBottom="l">
          Let's us know your name, email and your password
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
          <Box marginBottom="l">
            <TextInput
              ref={confirmPasswordRef}
              icon="lock"
              placeholder="Enter your password"
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              errors={formik.errors.password}
              touched={formik.touched.password}
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            />
          </Box>
          <TextInput
            ref={confirmPasswordRef}
            icon="lock"
            placeholder="Confirm your password"
            onChangeText={formik.handleChange("confirmPassword")}
            onBlur={formik.handleBlur("confirmPassword")}
            errors={formik.errors.confirmPassword}
            touched={formik.touched.confirmPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="email"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => formik.handleSubmit()}
          />
          <Box justifyContent="center" alignItems="center" marginTop="xl">
            <Button
              variant={VARIANT_COLOR.primary}
              label="Sign up to create account"
              onPress={formik.handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
