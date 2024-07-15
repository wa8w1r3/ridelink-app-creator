import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "../components/WelcomeScreen";
import OnBoardingScreenThree from "../components/OnBoardingSCreenThree";
import OnBoardingScreenTwo from "../components/OnBoardingScreenTwo";
import OnBoardingScreenOne from "../components/OnBoardingScreenOne";
import RidelinkButton from "../components/RidelinkButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const primaryColor = "rgb(31,144,130)";

export default function Page() {
  const [display, setDisplay] = useState(0);
  useState;
  return (
    <View style={styles.container}>
      {display == 0 ? <WelcomeScreen /> : null}
      {display == 1 ? <OnBoardingScreenOne /> : null}
      {display == 2 ? <OnBoardingScreenTwo /> : null}
      {display == 3 ? <OnBoardingScreenThree /> : null}
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
        <View
          style={[
            styles.indicator,
            display === 0 ? { backgroundColor: primaryColor } : null,
          ]}
          onClick={() => setDisplay(0)}
        />
        <View
          style={[
            styles.indicator,
            display === 1 ? { backgroundColor: primaryColor } : null,
          ]}
          onClick={() => setDisplay(1)}
        />
        <View
          style={[
            styles.indicator,
            display === 2 ? { backgroundColor: primaryColor } : null,
          ]}
          onClick={() => setDisplay(2)}
        />
        <View
          style={[
            styles.indicator,
            display === 3 ? { backgroundColor: primaryColor } : null,
          ]}
          onClick={() => setDisplay(3)}
        />
      </View>
      <StatusBar style="dark" />
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
