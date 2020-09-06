import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { InitialState, NavigationContainer } from '@react-navigation/native'
import Constants from 'expo-constants'

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`

export type FontSource = Parameters<typeof Font.loadAsync>[0]

const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
  useEffect(() => {
    ;(async () => {
      await Promise.all(promises)
      cb()
    })()
  })

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false)
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
    () => setReady(true),
  )
  return ready
}

interface LoadAssetsProps {
  fonts?: FontSource
  assets?: number[]
  children: ReactElement | ReactElement[]
}

/**
 *
 * 1. Load Assets imports all assets both fonts and static assets and return a boolean
 * 2. checks the environment using __DEV__ aka process.env.NODE_ENV
 * 3. if it's environment development get the last navigation entry  if it exists.
 * 4. set the navigation entry as the new initial state when the application loads. so basically redirect me to were I was last before restarting application
 */

const LoadAssets = ({ assets = [], fonts = {}, children }: LoadAssetsProps) => {
  const [initialState, setInitialState] = useState<InitialState | undefined>()
  const ready = useLoadAssets(assets, fonts)
  const isDevEnvironment = __DEV__
  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY,
        )
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined
        setInitialState(state)
      } catch (err) {
        console.error(err)
      }
    }

    if (isDevEnvironment) {
      restoreState()
    }
  }, [])

  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    [],
  )

  if (!ready) {
    return <AppLoading />
  }
  return (
    <NavigationContainer {...{ onStateChange, initialState }}>
      {children}
    </NavigationContainer>
  )
}

export default LoadAssets
