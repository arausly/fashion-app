import React from "react";
import { Linking } from "react-native";
import { Button, Container, VARIANT_COLOR } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";
import Footer from "./components/Footer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Box, Text } from "../components/theme";
import { TextInput } from "./components/Form";

interface ForgotPasswordProps
  extends StackNavigationProps<Routes, "ForgotPassword"> {}

const ForgotPasswordSchema = () =>
  Yup.object().shape({
    email: Yup.string().email("Invalid email").required("required"),
  });

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      navigation.navigate("PasswordChanged");
    },
    validationSchema: ForgotPasswordSchema,
  });

  return (
    <Container
      footer={
        <Footer
          title="Don't work? "
          action="Try another way"
          onPress={() => Linking.openURL("mailto:help@support.com")}
        />
      }
    >
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" marginBottom="l">
          Forgot Password?
        </Text>
        <Text variant="content" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box>
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            errors={formik.errors.email}
            touched={formik.touched.email}
            autoCapitalize="none"
            autoCompleteType="email"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => formik.handleSubmit()}
          />
        </Box>
        <Box justifyContent="center" alignItems="center" marginTop="xl">
          <Button
            variant={VARIANT_COLOR.primary}
            label="Reset password"
            onPress={formik.handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
