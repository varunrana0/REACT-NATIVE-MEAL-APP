import { FlatList } from "react-native";
import { useEffect } from "react";
import { Category } from "../data/dummy-data";
import CategoryCards from "../components/Cards";

const MealsCategories = ({ navigation }) => {
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
      data={Category}
      keyExtractor={(item) => item.id}
      renderItem={categoryCardItems}
      numColumns={"2"}
    />
  );
};

export default MealsCategories;
