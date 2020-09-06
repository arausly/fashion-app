import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Button, VARIANT_COLOR, Text } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  title: {
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    marginBottom: 30,
    textAlign: 'center',
  },
})

interface SubSlideProps {
  title: string
  description: string
  last: boolean
  onPress: () => void
}

const SubSlide = ({ title, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.title}>
        {title}
      </Text>
      <Text variant="content" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? 'Let get Started' : 'Next'}
        variant={last ? VARIANT_COLOR.primary : VARIANT_COLOR.default}
        {...{ onPress }}
      />
    </View>
  )
}

export default SubSlide
