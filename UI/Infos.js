import { View, Text, StyleSheet } from "react-native";
import { Colors, fontWeights, letterSpacing } from "../assets/utilities";

const Infos = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>duration: {item.duration} min.</Text>
      <Text style={styles.text}>ingredients: {item.ingredients.length}</Text>
      <Text style={styles.text}>steps: {item.steps.length}</Text>
    </View>
  );
};

export default Infos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 1,
    backgroundColor: Colors.light,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
    fontWeight: fontWeights.bold,
    padding: 12,
  },
});
