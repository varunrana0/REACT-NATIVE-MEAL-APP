import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useEffect } from "react";
import { Meals } from "../data/dummy-data";

const MealsScreen = ({ route, navigation }) => {
  const { title, id } = route.params;

  const displayedMeal = Meals.filter((item) => {
    return item.categoryIds.indexOf(id) >= 0;
  });

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  function renderMealCards(itemCard) {
    return (
      <View style={[styles.cards]}>
        <Pressable
          android_ripple={{ color: "#eee" }}
          style={({ pressed }) => [
            styles.pressable,
            pressed && styles.pressedButton,
          ]}>
          <Image
            style={{ height: 250 }}
            source={{ uri: itemCard.item.imageUrl }}
            resizeMode="cover"
          />
          <View style={{ padding: 10 }}>
            <Text style={[styles.text]}>{title}</Text>
            <View style={{ marginTop: 10 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Duration:</Text>{" "}
                {itemCard.item.duration} min.
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>isGlutenFree:</Text>{" "}
                {itemCard.item.isGlutenFree}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(meals) => meals.id}
        renderItem={renderMealCards}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    margin: 14,
    height: 350,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 10,
  },
  pressable: {
    borderRadius: 10,
    height: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "capitalize",
    color: "#333",
  },
});
