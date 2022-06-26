import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Colors,
  fonts,
  fontWeights,
  letterSpacing,
  margin,
} from "../assets/utilities";

const MealInfo = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.text]}>{item.title}</Text>
      <Text style={styles.duration}>Duration: {item.duration} min.</Text>
    </View>
  );
};

export default MealInfo;

const styles = StyleSheet.create({
  card: {
    paddingVertical: margin.xlarge,
    paddingHorizontal: margin.medium,
  },
  text: {
    fontSize: fonts.large,
    fontWeight: "bold",
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
    color: Colors.Gray700,
  },
  duration: {
    fontWeight: fontWeights.medium,
  },
});
