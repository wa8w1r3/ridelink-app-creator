import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "green",
          paddingHorizontal: 20,
          paddingVertical: 30,
          borderRadius: 50,
        }}
      >
        <Text>Home</Text>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
