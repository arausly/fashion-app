import React from 'react'
import Welcome, { assets as welcomeAssets } from './Welcome'
import OnBoarding, { assets as onBoardingAssets } from './Onboarding'
import Login from './Login'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from '../components/Navigation'
export { default as OnBoarding } from './Onboarding'
export { default as Welcome } from './Welcome'
export const authenticationAssets = [...welcomeAssets, ...onBoardingAssets]

const AuthStack = createStackNavigator<Routes>()

export const AuthenticationStack = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthStack.Screen name="Welcome" component={Welcome} />
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
)
