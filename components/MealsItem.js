import { View, StyleSheet, Pressable } from "react-native";
import { margin } from "../assets/utilities";
import MealImage from "./MealImage";
import MealInfo from "./MealInfo";

const MealsItem = ({ itemCard, onPress }) => {
  const item = itemCard.item;
  return (
    <View style={[styles.cards]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressedButton}>
        <MealImage item={item} />
        <MealInfo item={item} />
      </Pressable>
    </View>
  );
};

export default MealsItem;

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    marginVertical: margin.xxxlarge,
    marginHorizontal: margin.large,
  },
});
