// import { StyleSheet, Text, View, Button, Image } from "react-native"

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("./image/logo.png")}
//         style={{ width: 250, height: 150 }}
//       />
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

import { createStackNavigator, createAppContainer } from "react-navigation"

import Splash from "./app/Splash"
import login from "./app/login"

const App = createStackNavigator({
  Splash: { screen: Splash, navigationOption: { header: null } },
  login: { screen: login, navigationOption: { header: null } },
})

export default createAppContainer(App)
