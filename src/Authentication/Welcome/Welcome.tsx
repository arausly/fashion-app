import React from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native'
import theme, { Box, Text } from '../../components/theme'
import { Button, VARIANT_COLOR } from '../../components'
import { StackNavigationProps, Routes } from '../../components/Navigation'

const { width } = Dimensions.get('window')

interface WelcomeProps {}

const picture = {
  src: require('../assets/5.png'),
  width: 3383,
  height: 5074,
}

export const assets = [picture.src]

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={picture.src}
          style={[
            {
              width: width - theme.borderRadii.xl,
              height:
                ((width - theme.borderRadii.xl) * picture.height) /
                picture.width,
            },
          ]}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="grey"
        ></Box>
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get Started</Text>
          <Text variant="content" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant={VARIANT_COLOR.primary}
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button label="Join us, it's Free" onPress={() => {}} />
          <Button
            variant={VARIANT_COLOR.transparent}
            label="Forgot password?"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Welcome
