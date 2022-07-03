import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import MealsItem from "./MealsItem";

const MealsList = ({ items }) => {
  const navigation = useNavigation();

  function renderMealCards(itemData) {
    function moveDetailsScreen() {
      navigation.navigate("Details", {
        id: itemData.item.id,
      });
    }
    return <MealsItem itemCard={itemData} onPress={moveDetailsScreen} />;
  }

  return (
    <View style={{ flex: 1, paddingVertical: 14 }}>
      <FlatList
        data={items}
        keyExtractor={(meals) => meals.id}
        renderItem={renderMealCards}
      />
    </View>
  );
};

export default MealsList;
