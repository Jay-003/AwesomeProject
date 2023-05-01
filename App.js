import { StyleSheet, Text, View, Button, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./image/logo.png")}
        style={{ width: 250, height: 100 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
