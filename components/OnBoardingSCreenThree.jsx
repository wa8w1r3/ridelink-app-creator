import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import RidelinkButton from "./RidelinkButton";
import { router } from "expo-router";

export default function OnBoardingScreenThree() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/undraw_delivery_truck_vt6p.svg")}
          style={styles.logo}
          contentFit="contain"
          transition={1000}
          blurRadius={20}
        />
        <Text style={styles.title}>Reliable Service</Text>
        <Text style={styles.subTitle}>
          We partner with trusted and experienced truck operators to ensure your
          cargo is handled with care and delivered on time, every time.
        </Text>
      </View>

      <RidelinkButton
        title="Get Started"
        onPress={() => {
          router.push("login");
        }}
        style={{ marginBottom: 50 }}
      />
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
