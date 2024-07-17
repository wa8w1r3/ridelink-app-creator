import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";
import { primaryColor } from "../constants";

export default function FuelDisplay({ station, price }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "#fff",
          width: "95%",
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          elevation: 1.5,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Image
            source={station.logo}
            style={styles.logo}
            contentFit="contain"
            transition={1000}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  alignSelf: "flex-start",
                  fontWeight: "400",
                  fontSize: 16,
                }}
              >
                {station.name}
              </Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <FontAwesome name="map-marker" size={14} color={primaryColor} />
                <Text
                  style={{
                    color: "#666",
                    fontWeight: "300",
                    fontSize: 12,
                    paddingLeft: 5,
                  }}
                >
                  {station.location}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: primaryColor,
              fontWeight: "bold",
            }}
          >
            {price}
          </Text>
        </View>
      </View>
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
    height: 50,
    width: 50,
    borderRadius: 50,
    borderCurve: "continuous",
  },
});
