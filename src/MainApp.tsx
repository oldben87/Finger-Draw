import {StatusBar} from 'expo-status-bar'
import {SafeAreaView, StyleSheet} from 'react-native'
import Sketch from './ExpoText'
import Title from './Title'

export default function MainApp() {
  console.log('stuff happens')

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Get me moving!" />
      <Sketch />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
})
