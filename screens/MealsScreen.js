import { View, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { Meals, Category } from "../data/dummy-data";
import MealsItem from "../components/MealsItem";

const MealsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const displayedMeal = Meals.filter((item) => {
    return item.categoryIds.indexOf(id) >= 0;
  });

  const CategoryTitle = Category.find((category) => category.id === id).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [navigation]);

  function renderMealCards(itemData) {
    function moveDetailsScreen() {
      navigation.navigate("Details", {
        id: itemData.item.id,
      });
    }
    return <MealsItem itemCard={itemData} onPress={moveDetailsScreen} />;
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
