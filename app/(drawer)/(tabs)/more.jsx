import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { primaryColor } from "../../../constants";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source="https://randomuser.me/api/portraits/men/1.jpg"
          style={styles.image}
          contentFit="contain"
          transition={1000}
        />

        <View
          style={{
            justifyContent: "center",
            paddingLeft: 15,
          }}
        >
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.email}>John.doe@gmail.com</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Notifications</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="gray" />
          <View
            style={{
              paddingLeft: 10,
            }}
          >
            <Text>Notifications</Text>
            <Text style={[styles.description, { paddingRight: 10 }]}>
              Check out the latest notifications about your orders and other
              marketing information
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Legal</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          <Feather name="clipboard" size={24} color="gray" />

          <View
            style={{
              paddingLeft: 10,
            }}
          >
            <Text>Privacy Policy</Text>
            <Text style={styles.description}>
              Read and understand our privacy policies
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          <Feather name="clipboard" size={24} color="gray" />

          <View
            style={{
              paddingLeft: 10,
            }}
          >
            <Text>Terms & Conditions</Text>
            <Text style={styles.description}>
              Read and understand our terms and conditions
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  profileContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#666",
    paddingBottom: 10,
    paddingTop: 5,
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderCurve: "continuous",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  email: {
    fontSize: 12,
    color: "#666",
  },
  contentContainer: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: primaryColor,
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
});
