import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors, fonts, fontWeights, letterSpacing } from "../assets/utilities";
import Ingredients from "../UI/Ingredients";
import Infos from "../UI/Infos";
import Steps from "../UI/Steps";
import Description from "../UI/Description";

const MealDetails = ({ itemData }) => {
  const item = itemData.item;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
      </View>
      <Infos item={item} />
      <View style={styles.innerContainer}>
        <Description item={item} />
        <Ingredients items={item} />
        <Steps items={item} />
      </View>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  infoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    elevation: 5,
  },
  innerContainer: {
    margin: 10,
  },
  infoText: {
    color: Colors.Gray700,
    fontSize: fonts.medium,
    letterSpacing: letterSpacing.medium,
    fontWeight: fontWeights.bold,
    textTransform: "capitalize",
    paddingVertical: 4,
  },
  imageContainer: {
    height: 300,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
