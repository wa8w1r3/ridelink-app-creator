import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const blurhash = `LRJ*|[^+0f9Z?wt7RPaeDiE1S#nl`;
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/undraw_welcoming_re_x0qo.svg")}
        style={styles.logo}
        contentFit="contain"
        transition={1000}
        blurRadius={20}
      />
      <Text style={styles.title}>Welcome to Ridelink</Text>
      <Text style={styles.subTitle}>
        Streamline your logistics with CargoMove. Get the right truck for your
        cargo, anytime, anywhere.
      </Text>
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
    flex: 1 / 2,
    width: 200,
  },
  title: {
    fontSize: 20,
    color: "#333",
    marginTop: 50,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
    lineHeight: 22,
  },
});
