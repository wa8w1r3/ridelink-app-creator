import { useRef, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import WelcomeScreen from "../components/WelcomeScreen";
import OnBoardingScreenThree from "../components/OnBoardingSCreenThree";
import OnBoardingScreenTwo from "../components/OnBoardingScreenTwo";
import OnBoardingScreenOne from "../components/OnBoardingScreenOne";
import { StatusBar } from "expo-status-bar";
import { primaryColor } from "../constants";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const [display, setDisplay] = useState(0);
  const pagerViewRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PagerView
          style={styles.container}
          ref={pagerViewRef}
          initialPage={0}
          onPageSelected={(e) => setDisplay(e.nativeEvent.position)}
        >
          <View style={styles.page} key="1">
            <WelcomeScreen />
          </View>
          <View style={styles.page} key="2">
            <OnBoardingScreenOne />
          </View>
          <View style={styles.page} key="3">
            <OnBoardingScreenTwo />
          </View>
          <View style={styles.page} key="4">
            <OnBoardingScreenThree />
          </View>
        </PagerView>
        <View style={styles.indicatorContainer}>
          {[0, 1, 2, 3].map((index) => (
            <Pressable
              key={index}
              style={[
                styles.indicator,
                display === index ? { backgroundColor: primaryColor } : null,
              ]}
              onPress={() => {
                console.log(index);
                pagerViewRef.current?.setPage(index);
              }}
            />
          ))}
        </View>
        <StatusBar style="dark"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
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
