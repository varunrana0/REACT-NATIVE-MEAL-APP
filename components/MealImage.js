import { Image, StyleSheet, View } from "react-native";
import React from "react";

const MealImage = ({ item }) => {
  return (
    <View style={{ height: 200, overflow: "hidden" }}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
    </View>
  );
};

export default MealImage;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
