import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import WelcomeScreen from "../components/WelcomeScreen";
import OnBoardingScreenThree from "../components/OnBoardingSCreenThree";
import OnBoardingScreenTwo from "../components/OnBoardingScreenTwo";
import OnBoardingScreenOne from "../components/OnBoardingScreenOne";
import RidelinkButton from "../components/RidelinkButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { primaryColor } from "../constants";

export default function Page() {
  const [display, setDisplay] = useState(0);

  return (
    <View style={styles.container}>
      {display == 0 ? <WelcomeScreen /> : null}
      {display == 1 ? <OnBoardingScreenOne /> : null}
      {display == 2 ? <OnBoardingScreenTwo /> : null}
      {display == 3 ? <OnBoardingScreenThree /> : null}
      <Link href="/(drawer)">Dashboard</Link>
      <RidelinkButton
        title="Next"
        onPress={() => {
          if (display === 3) {
            router.push("login");
            return;
          }
          setDisplay(display + 1);
        }}
        style={{ marginBottom: 50 }}
      />
      <View style={styles.indicatorContainer}>
        {[0, 1, 2, 3].map((index) => (
          <Pressable
            key={index}
            style={[
              styles.indicator,
              display === index ? { backgroundColor: primaryColor } : null,
            ]}
            onPress={() => setDisplay(index)}
          />
        ))}
      </View>

      <StatusBar style="dark" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "#ccc",
  },
});
