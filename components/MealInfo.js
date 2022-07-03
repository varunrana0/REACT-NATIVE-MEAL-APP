import { StyleSheet, Text, View } from "react-native";

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
    paddingVertical: margin.xxxlarge,
    paddingHorizontal: margin.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: fonts.large,
    fontWeight: "bold",
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
    color: Colors.Gray700,
  },
  duration: {
    marginTop: 5,
    fontWeight: fontWeights.medium,
  },
});
