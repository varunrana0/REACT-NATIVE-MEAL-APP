import { StyleSheet, FlatList, TextInput, Text } from "react-native";
import React, { useEffect } from "react";
import { Category } from "../data/dummy-data";
import CategoryCards from "../components/Cards";

const MealsCategories = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Meals Categories",
    });
  }, [navigation]);

  const categoryCardItems = (itemData) => {
    const item = itemData.item;

    function moveNextScreen() {
      navigation.navigate("Meals", {
        id: itemData.item.id,
        title: item.title,
      });
    }
    const cardProps = {
      title: item.title,
      imageUrl: item.imageURL,
    };
    return <CategoryCards {...cardProps} onPress={moveNextScreen} />;
  };

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={Category}
      keyExtractor={(item) => item.id}
      renderItem={categoryCardItems}
      numColumns={"2"}
    />
  );
};

export default MealsCategories;
