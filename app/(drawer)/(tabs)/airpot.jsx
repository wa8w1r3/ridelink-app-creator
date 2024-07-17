import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
export default function Page() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/undraw_aircraft_re_m05i.svg")}
        style={styles.image}
        contentFit="contain"
        transition={1000}
      />

      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          marginHorizontal: 10,
          padding: 10,
          color: "#666",
        }}
      >
        Affordable airport travel to and from Entebbe International Airport
      </Text>
      <Pressable>
        <Text
          style={{
            backgroundColor: "#ccc",
            color: "white",
            padding: 10,
            borderRadius: 10,
            borderCurve: "continuous",
            paddingHorizontal: 40,
            margin: 20,
            textAlign: "center",
          }}
        >
          Coming Soon
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 200,
    marginTop: 100,
  },
});
