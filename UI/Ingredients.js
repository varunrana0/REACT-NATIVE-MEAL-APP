import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  borderRadius,
  Colors,
  fonts,
  fontWeights,
  letterSpacing,
  margin,
} from "../assets/utilities";

const Ingredients = ({ items }) => {
  const [readMore, setReadMore] = useState(false);
  const [list, setList] = useState(items.ingredients.slice(0, 5));

  function compareReadMore() {
    if (!readMore) {
      setList(items.ingredients);
      setReadMore(true);
    } else {
      setList(items.ingredients.slice(0, 5));
      setReadMore(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ingredients</Text>
      <View style={{ marginTop: 20 }}>
        {list &&
          list.map((item, index) => (
            <View key={index} style={styles.box}>
              <Text style={styles.ingredientsText}>‣ &nbsp; {item}</Text>
            </View>
          ))}
        <Text style={styles.readMoreText} onPress={compareReadMore}>
          {readMore ? "...show less" : "...read more"}
        </Text>
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: margin.xlarge,
    paddingVertical: margin.xxxlarge,
    borderRadius: borderRadius.large,
    elevation: 1,
    shadowColor: "black",
    backgroundColor: Colors.light,
  },
  text: {
    fontSize: fonts.large,
    textTransform: "uppercase",
    letterSpacing: letterSpacing.medium,
    fontWeight: fontWeights.bold,
  },
  box: {
    paddingVertical: 4,
  },
  readMoreText: {
    textAlign: "right",
    color: Colors.Gray700,
    textTransform: "capitalize",
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.medium,
  },
  ingredientsText: {
    fontWeight: fontWeights.medium,
    textTransform: "capitalize",
    letterSpacing: letterSpacing.medium,
    lineHeight: 20,
    textAlign: "justify",
  },
});
