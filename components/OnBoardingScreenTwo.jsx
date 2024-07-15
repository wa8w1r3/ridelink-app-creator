import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function OnBoardingScreenTwo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/undraw_real_time_sync_re_nky7.svg")}
        style={styles.logo}
        contentFit="contain"
        transition={1000}
        blurRadius={20}
      />
      <Text style={styles.title}>Real-Time Tracking</Text>
      <Text style={styles.subTitle}>
        Keep track of your shipment in real-time. Know exactly where your cargo
        is at any moment, from pickup to delivery.
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
