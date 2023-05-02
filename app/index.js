// import { StyleSheet, Text, View, Button, Image } from "react-native"

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Image
//         source={require("./image/logo.png")}
//         style={{ width: 250, height: 150 }}
//       /> */}
//       <Text style={{ fontSize: 30 }}> Go to the fucking Gym</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// })

import { AppRegistry } from "react-native/types"
import App from "./login"
import { name as appName } from "app.json"

AppRegistry.registerComponent(appName, () => App)
