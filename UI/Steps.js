import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Colors,
  fonts,
  fontWeights,
  letterSpacing,
  margin,
} from "../assets/utilities";

const Steps = ({ items }) => {
  const [readMore, setReadMore] = useState(false);
  const [list, setList] = useState(items.steps.slice(0, 2));

  function renderSteps(itemData) {
    return (
      <View style={styles.box}>
        <Text style={styles.stepsText}>
          <Text style={styles.stepsBackground}>
            step {itemData.index + 1} ‣
          </Text>
          &nbsp; {itemData.item}
        </Text>
      </View>
    );
  }

  function compareReadMore() {
    if (!readMore) {
      setList(items.steps);
      setReadMore(true);
    } else {
      setList(items.steps.slice(0, 2));
      setReadMore(false);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>steps</Text>
      <View style={{ paddingVertical: 20 }}>
        <FlatList
          data={list}
          keyExtractor={(item) => {
            item.slice(6, 15) +
              Date.now().toLocaleString() +
              item.slice(29, 48);
          }}
          listKey={(item) => item}
          renderItem={renderSteps}
        />
        <Text style={styles.readMoreText} onPress={compareReadMore}>
          {readMore ? "...show less" : "...read more"}
        </Text>
      </View>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: margin.xlarge,
    paddingVertical: margin.xxxlarge,
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
  stepsBackground: {
    textAlign: "center",
    fontWeight: fontWeights.bold,
    backgroundColor: Colors.blue400,
  },
  stepsText: {
    fontWeight: fontWeights.medium,
    textTransform: "capitalize",
    letterSpacing: letterSpacing.medium,
    lineHeight: 20,
  },
});
