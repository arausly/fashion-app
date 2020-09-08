import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

//components
import { Container, Button, VARIANT_COLOR } from '../../components'
import { SocialLogin } from '../components'
import { Box, Text } from '../../components/theme'
import { TextInput, Checkbox } from '../components/Form'

interface LoginProps {}

const LoginSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'To short').required('Required'),
  })

const Footer = () => {
  return (
    <>
      <SocialLogin />
      <Box flex={1} alignItems="center" marginBottom="l">
        <Button
          variant={VARIANT_COLOR.transparent}
          onPress={() => alert('Successful sign up')}
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
  )
}

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
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          onSubmit={(values) => console.log({ values })}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            isSubmitting,
            values,
            handleSubmit,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="l">
                <TextInput
                  icon="mail"
                  placeholder="Enter your email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errors={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Enter your password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errors={errors.password}
                touched={touched.password}
                secureTextEntry
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
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
                <Button variant={VARIANT_COLOR.transparent} onPress={() => {}}>
                  <Text color="primary">Forgot password</Text>
                </Button>
              </Box>
              <Box justifyContent="center" alignItems="center" marginTop="l">
                <Button
                  variant={VARIANT_COLOR.primary}
                  label="Login to your account"
                  onPress={handleSubmit}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  )
}

export default Login
