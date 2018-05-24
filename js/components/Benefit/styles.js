const React = require("react-native");

const { StyleSheet, Platform, Dimensions } = React;

export default {
    Header: {
      backgroundColor: Platform.OS === "android" ? "#009be8" : null
    }
};