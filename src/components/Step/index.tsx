import { StyleProp, Text, View, ViewStyle } from "react-native"

import { styles } from "./styles"

type Props = {
  step: number
  description: string
  containerStyle?: StyleProp<ViewStyle>
}

export function Step({ step, description, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.step}>{step}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  )
}
