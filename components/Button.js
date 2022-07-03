import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Button = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={20} color={color} />
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
