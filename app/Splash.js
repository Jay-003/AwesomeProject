import React, { component } from "react"
import { View, ImageBackground, Image } from "react-native/types"
import { Component } from "react/cjs/react.production.min"

var splashScreen = require("../assets/splashScreen.jpeg")

export default class Splash extends Component {
  constructor(props) {
    super(props)
    setTimeout(() => {
      this.props.navigation.navigate("Login")
    }, 1000)
  }
  render() {
    return (
      <ImageBackground
        source={splashScreen}
        style={{ height: "100%", width: "100%" }}
      ></ImageBackground>
    )
  }
}
