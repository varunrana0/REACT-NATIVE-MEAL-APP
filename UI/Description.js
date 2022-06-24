import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, fonts, fontWeights, letterSpacing } from "../assets/utilities";

const Description = ({ item }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  box: {
    padding: 10,
  },
  text: {
    fontSize: fonts.small,
    color: Colors.Gray700,
    letterSpacing: letterSpacing.medium,
    textAlign: "justify",
    lineHeight: 20,
  },
});
