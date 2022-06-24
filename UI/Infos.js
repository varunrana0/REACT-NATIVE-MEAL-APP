import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors, fontWeights, letterSpacing } from "../assets/utilities";

const Infos = ({ item }) => {
  return (
    <View style={styles.timingInfo}>
      <Text style={styles.timingInfoText}>duration: {item.duration} min.</Text>
      <Text style={styles.timingInfoText}>
        ingredients: {item.ingredients.length}
      </Text>
      <Text style={styles.timingInfoText}> steps: {item.steps.length}</Text>
    </View>
  );
};

export default Infos;

const styles = StyleSheet.create({
  timingInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 1,
    backgroundColor: Colors.light,
  },
  timingInfoText: {
    fontSize: 12,
    textAlign: "center",
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
    fontWeight: fontWeights.bold,
    padding: 12,
  },
});
