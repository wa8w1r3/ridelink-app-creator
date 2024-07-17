import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
