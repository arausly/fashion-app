import React, { useRef } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import Animated, { interpolate } from "react-native-reanimated";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";

//components
import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

import { AuthNavigationProps } from "../components/Navigation";
import { makeStyles, Theme } from "../components/theme";
import { useTheme } from "@shopify/restyle";

const { width } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "#26de81",
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    alignItems: "center",
    overflow: "hidden",
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    height: theme.borderRadii.xl,
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const slides = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    picture: {
      src: require("./assets/1.png"),
      width: 2513,
      height: 3583,
    },
    footer: {
      title: "find your outfits",
      description:
        "Confused about your outfit? Don't worry! Find the best outfit here!",
    },
  },
  {
    label: "Playful",
    color: "#BEECC4",
    picture: {
      src: require("./assets/2.png"),
      width: 2791,
      height: 3744,
    },
    footer: {
      title: "hear it first, wear it first",
      description:
        "Hating the clothes in your wardrobe?Explore hundred of outfit ideas",
    },
  },
  {
    label: "Excentric",
    color: "#FFE4D9",
    picture: {
      src: require("./assets/3.png"),
      width: 2738,
      height: 3244,
    },
    footer: {
      title: "your style, your way",
      description:
        "Create your individual & unique style and look amazing everyday",
    },
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    picture: {
      src: require("./assets/4.png"),
      width: 1757,
      height: 2551,
    },
    footer: {
      title: "Look Good, Feel Good",
      description:
        "Discover the latest trends in fashion and explore your personality",
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const OnBoarding = ({ navigation }: AuthNavigationProps<"OnBoarding">) => {
  const styles = useStyles();
  const theme = useTheme<Theme>();
  const scrollRef = useRef<Animated.ScrollView>(null);
  const xOffset = useValue(0); //Animated.Value(0)
  const onScroll = onScrollEvent({ x: xOffset }); // returns a func that uses animated event to set the xOffset animated value
  const backgroundColor = interpolateColor(xOffset, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(({ color }) => color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(xOffset, {
            inputRange: [
              (index - 0.4) * width,
              index * width,
              (index + 0.4) * width,
            ],
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={[
                  {
                    width: width - theme.borderRadii.xl,
                    height:
                      ((width - theme.borderRadii.xl) * picture.height) /
                      picture.width,
                  },
                ]}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...{ onScroll }}
        >
          {slides.map(({ label, picture }, i) => (
            <Slide key={i} label={label} right={!!(i % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, i) => (
              <Dot
                key={i}
                index={i}
                activeIndex={Animated.divide(xOffset, width)}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: Animated.multiply(xOffset, -1) }],
            }}
          >
            {slides.map(({ footer }, index) => {
              const last = index === slides.length - 1;

              return (
                <SubSlide
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scrollRef.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  key={index}
                  {...{ ...footer, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
