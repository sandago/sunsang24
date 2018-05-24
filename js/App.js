import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "react-navigation";

import Drawer from "./Drawer";

import Home from "./components/Home/";
import Benefit from "./components/Benefit";

const AppNavigator = createStackNavigator({
        Drawer: { screen: Drawer },
        Home: { screen: Home},
        Benefit: { screen: Benefit }
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
<Root>
    <AppNavigator />
</Root>;