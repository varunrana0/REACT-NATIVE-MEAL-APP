import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { Meals } from "../data/dummy-data";
import Description from "../UI/Description";
import Ingredients from "../UI/Ingredients";
import Infos from "../UI/Infos";
import { Colors, fonts, fontWeights, letterSpacing } from "../assets/utilities";
import Steps from "../UI/Steps";

const MealsDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const mealTitle = Meals.find((meal) => meal.id === id).title;
  const singleMeal = Meals.find((meal) => meal.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
    });
  }, [navigation]);

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
