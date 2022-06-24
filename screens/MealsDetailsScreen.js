import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Meals } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealsDetailsScreen = ({ route, navigation }) => {
  const [Meal, setMeal] = useState([]);
  const { title, id } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });

    const singleMeal = Meals.filter((item) => {
      return item.id === id;
    });
    setMeal(singleMeal);
  }, [navigation]);

  function renderMealDetail(itemData) {
    return <MealDetails itemData={itemData} />;
  }

  return (
    <View>
      <FlatList
        data={Meal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealDetail}
      />
    </View>
  );
};

export default MealsDetailsScreen;
