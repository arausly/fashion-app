import React, { useRef } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

//components
import { Container, Button, VARIANT_COLOR } from "../../components";
import { SocialLogin } from "../components";
import { Box, Text } from "../../components/theme";
import { TextInput, Checkbox } from "../components/Form";
import Footer from "../components/Footer";

interface LoginProps {}

const LoginSchema = () =>
  Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "To short").required("Required"),
  });

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    validationSchema: LoginSchema,
  });

  const passwordRef = useRef<RNTextInput>(null);
  return (
    <Container
      footer={
        <Footer
          title="Don't have an account?"
          action="Sign up here"
          onPress={() => alert("SignUp successful")}
        />
      }
    >
      <Box padding="xl">
        <Text variant="title1" marginBottom="l">
          Welcome Back
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
            justifyContent="center"
            marginLeft="xl"
            marginTop="l"
          >
            <Checkbox
              label="Remember me"
              checked={formik.values.remember}
              onChange={() =>
                formik.setFieldValue("remember", !formik.values.remember)
              }
            />
            <Button variant={VARIANT_COLOR.transparent} onPress={() => {}}>
              <Text color="primary">Forgot password</Text>
            </Button>
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
