import { View, StyleSheet, Image, Text, ScrollView, Alert } from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";

import { favourites, Meals } from "../data/dummy-data";
import Description from "../UI/Description";
import Ingredients from "../UI/Ingredients";
import Infos from "../UI/Infos";
import Steps from "../UI/Steps";
import { Colors, fonts, fontWeights, letterSpacing } from "../assets/utilities";
import Button from "../components/Button";
import { FavouriteContext } from "../store/favouriteContext";

const MealsDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const favouriteContextIds = useContext(FavouriteContext);

  // grab the title from the meal based on route
  const mealTitle = Meals.find((meal) => meal.id === id).title;
  const singleMeal = Meals.find((meal) => meal.id === id);

  const isFavourite = favouriteContextIds.ids.includes(id);

  function changeFavouriteHandler() {
    if (isFavourite) {
      favouriteContextIds.removeFavourite(id);
    } else {
      favouriteContextIds.addFavourite(id);
    }
  }

  // set title to the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,

      headerRight: () => {
        return (
          <Button
            icon={isFavourite ? "star" : "star-outline"}
            color={"red"}
            onPress={changeFavouriteHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteHandler]);

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{singleMeal.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: singleMeal.imageUrl }} />
      </View>
      <Infos item={singleMeal} />
      <View style={styles.innerContainer}>
        <Description item={singleMeal} />
        <Ingredients items={singleMeal} />
        <Steps items={singleMeal} />
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  imageContainer: {
    height: 300,
    width: "100%",
  },
  innerContainer: {
    padding: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    elevation: 5,
  },
  infoText: {
    color: Colors.Gray700,
    fontSize: fonts.medium,
    letterSpacing: letterSpacing.medium,
    fontWeight: fontWeights.bold,
    textTransform: "capitalize",
    paddingVertical: 4,
  },
});
