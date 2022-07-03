import { useLayoutEffect } from "react";
import { Meals, Category } from "../data/dummy-data";
import MealsList from "../components/mealsList/MealsList";

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

  return <MealsList items={displayedMeal} />;
};

export default MealsScreen;
