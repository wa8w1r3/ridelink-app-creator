import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function OnBoardingScreenOne() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/undraw_my_location_re_r52x.svg")}
        style={styles.logo}
        contentFit="contain"
        transition={1000}
        blurRadius={20}
      />
      <Text style={styles.title}>Easy Booking</Text>
      <Text style={styles.subTitle}>
        Simply enter your cargo details, and we'll match you with the best
        available truck. It's fast, easy, and hassle-free!
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
