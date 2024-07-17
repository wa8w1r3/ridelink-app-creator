import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function HeaderRight() {
  return (
    <View style={styles.container}>
      <Image
        source="https://randomuser.me/api/portraits/men/1.jpg"
        style={styles.headerImage}
        contentFit="contain"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 10,
  },

  headerImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    alignSelf: "flex-end",
  },
});
