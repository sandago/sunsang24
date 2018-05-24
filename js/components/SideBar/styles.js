const React = require("react-native");
const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  sidebar: {
    flex: 1,
    backgroundColor: "#fff"
  },
  drawerBanner: {
    alignSelf: "stretch",
    height: 65,
    position: "relative",
    marginBottom: 10
  },
  drawerUserIcon: {
    position: "absolute",
    width: 55,
    height: 55,
    resizeMode: "cover",
    marginTop: 20,
    marginLeft: 20
  },
  textLogin: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 13,
    marginLeft: 88,
    marginTop: 20,
    color: "gray"
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: Platform.OS === "android" ? 7 : 5
  },
  sidebarIcon: {
    fontSize: 21,
    color: "#fff",
    lineHeight: Platform.OS === "android" ? 21 : 25,
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 7
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  versionBadge: {
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: 'gray'
  },
  copyrightText: {
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 10
  }
};