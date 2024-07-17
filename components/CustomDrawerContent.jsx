import { AntDesign, Feather } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContentContainer}
    >
      <View style={styles.drawerContent}>
        <View style={styles.profileContainer}>
          <Image
            source="https://randomuser.me/api/portraits/men/1.jpg"
            style={styles.photo}
            contentFit="contain"
            transition={1000}
          />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.email}>john.doe@gmail.com</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Get Quote"
          labelStyle={{
            marginLeft: -20,
          }}
          icon={({ color }) => (
            <Feather name="file-plus" size={24} color={color} />
          )}
          onPress={() => {
            router.push("(tabs)/quote");
          }}
        />
      </View>
      <View style={styles.logoutContainer}>
        <DrawerItem
          label="Logout"
          icon={() => <AntDesign name="logout" size={24} />}
          onPress={() => {
            router.replace("login");
          }}
          labelStyle={{
            marginLeft: -20,
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#c6d9f7",
  },
  drawerContent: {
    flex: 10,
    backgroundColor: "white",
  },
  profileContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#c6d9f7",
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  email: {
    fontSize: 14,
    color: "#666",
  },

  logoutContainer: {
    flex: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#ccc",
    backgroundColor: "white",
  },
});
