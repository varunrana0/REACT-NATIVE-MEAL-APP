import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavouriteContextProvider from "./store/favouriteContext";

import MealsScreen from "./screens/MealsScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import DrawerStack from "./Navigations/DrawerStack";

const options = {
  animation: "slide_from_right",
  statusBarStyle: "dark",
  headerShadowVisible: true,
  headerTitleAlign: "center",
  contentStyle: {
    backgroundColor: "white",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
};

const Stack = createNativeStackNavigator();

const HandleDrawerScreen = () => {
  return <DrawerStack />;
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ ...options }}>
            <Stack.Screen
              name="Drawer"
              component={HandleDrawerScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={MealsScreen} />
            <Stack.Screen name="Details" component={MealsDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}
