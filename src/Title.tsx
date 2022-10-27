import {View, Text, StyleSheet} from 'react-native'

interface Props {
  title: string
}

export default function Title({title}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexGrow: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
})
