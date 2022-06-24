import { View, FlatList } from "react-native";
import { useEffect } from "react";
import { Meals } from "../data/dummy-data";
import MealsItem from "../components/MealsItem";

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

  function renderMealCards(itemData) {
    function moveDetailsScreen() {
      navigation.navigate("Details", {
        id: itemData.item.id,
        title: itemData.item.title,
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
