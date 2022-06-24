import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import {
  borderRadius,
  Colors,
  fonts,
  letterSpacing,
  margin,
} from "../assets/utilities";

const MealsItem = ({ itemCard, onPress }) => {
  return (
    <View style={[styles.cards]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressedButton}>
        <View style={{ height: 200 }}>
          <Image
            style={styles.image}
            source={{ uri: itemCard.item.imageUrl }}
          />
        </View>
        <View style={{ paddingVertical: 14 }}>
          <Text style={[styles.text]}>{itemCard.item.title}</Text>
          <View style={{ marginTop: 10 }}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Duration:</Text>{" "}
              {itemCard.item.duration} min.
            </Text>
          </View>
        </View>
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
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  text: {
    fontSize: fonts.large,
    fontWeight: "bold",
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
    color: Colors.Gray700,
  },
});
