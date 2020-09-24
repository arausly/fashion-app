import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { OutfitIdeas } from "./OutfitIdeas";
import { HomeRoutes } from "../components/Navigation";

import { DrawerContent, DRAWER_WIDTH } from "./Drawer/index";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigatorStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      drawerStyle={{
        width: DRAWER_WIDTH,
      }}
    >
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  );
};