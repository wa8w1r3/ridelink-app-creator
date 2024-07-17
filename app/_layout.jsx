import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { primaryColor } from "../constants";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="forgot-password"
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: "Forgot Password",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: primaryColor,
            },
            headerTintColor: "#fff",
            headerBackTitle:"Back"
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
