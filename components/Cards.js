import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";

import {
  borderRadius,
  Colors,
  fonts,
  fontWeights,
  letterSpacing,
  margin,
} from "../assets/utilities";

const Cards = ({ imageUrl, onPress, title }) => {
  return (
    <View style={[styles.cards]}>
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        imageStyle={{
          borderRadius: borderRadius.large,
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}>
        <Pressable
          onPress={onPress}
          android_ripple={{ color: Colors.Ripple300 }}
          style={({ pressed }) => [
            styles.pressable,
            pressed && styles.pressedButton,
          ]}>
          <Text style={[styles.text]}>{title}</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    margin: margin.large,
    height: 220,
    overflow: "hidden",
    backgroundColor: Colors.light,
    shadowColor: "black",
    elevation: 1,
    borderRadius: borderRadius.large,
  },
  pressable: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark,
    opacity: 0.7,
  },
  text: {
    fontSize: fonts.large,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
    color: Colors.light,
  },
});
