const React = require("react-native");
const { StyleSheet, Dimensions, Platform } = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const textFontSize = deviceWidth * 0.026;

export default {
    Header: {
      backgroundColor: Platform.OS === "android" ? "#009be8" : "#009be8"
    },
    logoImage: {
      width: 100,
      height: 25
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
    },
};