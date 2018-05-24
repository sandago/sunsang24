import React from "react";
import { createDrawerNavigator } from "react-navigation";

import SideBar from "./components/SideBar";

import Home from "./components/Home/";
import Benefit from "./components/Benefit";

const Drawer = createDrawerNavigator(
    {
        Home: { screen: Home },
        Benefit: { screen: Benefit },
    },
    {
      initialRouteName: "Home",
      contentComponent: props => <SideBar {...props} />
    }
);
  
export default Drawer;

