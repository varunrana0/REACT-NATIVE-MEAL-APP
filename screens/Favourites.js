import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/mealsList/MealsList";
import { Meals } from "../data/dummy-data";
import { FavouriteContext } from "../store/favouriteContext";

const Favourites = () => {
  const favouriteContextIds = useContext(FavouriteContext);

  const Favourites = Meals.filter((meal) =>
    favouriteContextIds.ids.includes(meal.id)
  );

  return <MealsList items={Favourites} />;
};

export default Favourites;

const styles = StyleSheet.create({});
