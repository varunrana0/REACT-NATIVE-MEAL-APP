import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsCategories from "./screens/MealsCategories";
import MealsScreen from "./screens/MealsScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            statusBarStyle: "dark",
            animation: "slide_from_right",
            headerShadowVisible: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}>
          <Stack.Screen name="MealsCategories" component={MealsCategories} />
          <Stack.Screen name="Meals" component={MealsScreen} />
          <Stack.Screen name="Details" component={MealsDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
