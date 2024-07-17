import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function HeaderTitle({ title }) {
  return (
    <View style={styles.container}>
      {title ? (
        <Text style={{ color: "white", fontSize: 20,fontWeight:"bold" }}>{title}</Text>
      ) : (
        <Image
          source={require("../assets/images/Logo-11.png")}
          style={styles.logo}
          contentFit="contain"
          transition={1000}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 50,
  },
});
