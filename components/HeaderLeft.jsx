import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Pressable } from "react-native";

export default function HeaderLeft({ color }) {
  const navigation = useNavigation();

  function openDrawer() {
    navigation.openDrawer();
  }

  return (
    <Pressable
      onPress={openDrawer}
      style={{
        padding: 10,
      }}
    >
      <MaterialIcons name="menu" size={30} color={color} />
    </Pressable>
  );
}
