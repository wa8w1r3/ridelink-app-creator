import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { withLayoutContext } from "expo-router";
import { primaryColor } from "../../../../constants";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

export default function Layout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: primaryColor,
        tabBarAndroidRipple: true,
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: {
          backgroundColor: primaryColor,
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{
          tabBarLabel: "Petrol",
          
        }}
      />
    </MaterialTopTabs>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
});
