import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet } from "react-native"
import Title from "src/Title"

export default function MainApp() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title="Open up App.tsx to start working on your app!" />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
