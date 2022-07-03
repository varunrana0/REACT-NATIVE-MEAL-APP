import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsCategories from "../screens/MealsCategories";
import Favourites from "../screens/Favourites";
import { Colors, fontWeights, letterSpacing } from "../assets/utilities";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStatusBarHeight: 10,
        headerTitleAlign: "center",
        headerShadowVisible: true,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: fontWeights.bold,
          letterSpacing: letterSpacing.medium,
          color: Colors.Gray700,
          textTransform: "capitalize",
        },
        headerTitleAllowFontScaling: true,
        drawerAllowFontScaling: true,
        drawerActiveBackgroundColor: Colors.dark,
        drawerActiveTintColor: Colors.blue400,
        drawerContentStyle: {
          backgroundColor: Colors.blue400,
          paddingVertical: 20,
        },
        drawerLabelStyle: {
          fontWeight: fontWeights.bold,
          letterSpacing: letterSpacing.medium,
          fontSize: 15,
        },
        drawerType: "back",
      }}>
      <Drawer.Screen
        name="Categories"
        component={MealsCategories}
        options={{
          drawerLabel: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="fast-food-sharp" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
