import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";

const Cards = ({ imageUrl, onPress, title }) => {
  return (
    <View style={[styles.cards]}>
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        imageStyle={{
          borderRadius: 10,
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}>
        <Pressable
          onPress={onPress}
          android_ripple={{ color: "#eee" }}
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
    margin: 10,
    height: 250,
    overflow: "hidden",
    elevation: 14,
    borderRadius: 10,
  },
  pressable: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    opacity: 0.7,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "capitalize",
    color: "white",
  },
});
