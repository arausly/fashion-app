import React from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import { Box, Text } from "../../components/theme";
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";

import DrawerItem, { DrawerItemInterface } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width;
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const items: DrawerItemInterface[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "FavoriteOutfits",
    screen: "FavoritesOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "NotificationsSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          backgroundColor="secondary"
          borderBottomRightRadius="xl"
        ></Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary"></Box>
        <Box flex={1} backgroundColor="primary"></Box>
        <Box
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              position: "absolute",
              top: -75,
              left: "55%",
              transform: [
                {
                  translateX: -50,
                },
              ],
            }}
            backgroundColor="primaryLight"
          ></Box>
          <Box marginVertical="l">
            <Text variant="title1" textAlign="center">
              Arausi Daniel
            </Text>
            <Text variant="content" textAlign="center">
              arausid@yahoo.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        overflow="hidden"
        borderTopLeftRadius="xl"
        width={DRAWER_WIDTH}
        height={height * 0.4}
      >
        <Image
          source={require("../../components/assets/pattern1.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: "auto",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default DrawerContent;
