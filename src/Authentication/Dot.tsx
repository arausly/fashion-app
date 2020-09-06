import React from 'react'
import { View } from 'react-native'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated'

interface DotProps {
  index: number
  activeIndex: Animated.Node<number>
}

const Dot = ({ index, activeIndex }: DotProps) => {
  const opacity = interpolate(activeIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  })

  const scale = interpolate(activeIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  })

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            scale,
          },
        ],
        backgroundColor: '#2cb9b0',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
      }}
    ></Animated.View>
  )
}

export default Dot
