import { StyleSheet } from 'react-native';

const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const textFontSize = deviceWidth * 0.026;

export default StyleSheet.create({
  Header: {
    backgroundColor: Platform.OS === "android" ? "#009be8" : null
  },
  logoImage: {
    width: 100,
    height: 25,
    tintColor: Platform.OS === "android" ? null : 'gray'
  },
  mainMenu: {
    alignSelf: "stretch",
    width: deviceWidth,
    height: 155,
    position: "relative",
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyRight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "gray",
  },
  copyRightText: {
    color: "white",
    fontSize: textFontSize,
    fontWeight: "400",
  }
})