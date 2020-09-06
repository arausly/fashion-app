import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

//components
import { Text } from '../components'

const { width, height } = Dimensions.get('window')
export const SLIDE_HEIGHT = 0.61 * height
export const BORDER_RADIUS = 75

interface slideProps {
  label: string
  right?: boolean
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
})

const Slide = ({ label, right }: slideProps) => {
  const labelTransformStyles = {
    transform: [
      { translateY: (SLIDE_HEIGHT - 100) / 2 },
      /*** the axis of rotation is at the center by default so to
       * align left or right half of the width of the slider which is half of the
       * screen width should be factored plus the height of the label container */
      { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
      { rotate: '90deg' },
    ],
  }
  return (
    <View style={styles.container}>
      <View style={[styles.labelContainer, labelTransformStyles]}>
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  )
}

export default Slide
