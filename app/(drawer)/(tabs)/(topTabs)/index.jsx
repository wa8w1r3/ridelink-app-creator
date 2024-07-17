import { StyleSheet, View, Text, FlatList } from "react-native";
import FuelDisplay from "../../../../components/FuelDisplay";
import { fuelStations } from "../../../../constants/fuelStations";

export default function Page({ station, price }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          height: 60,
          textAlignVertical: "center",
          textAlign: "left",
          width: "100%",
          paddingLeft: 20,
        }}
      >
        Fuel Stations
      </Text>
      <FlatList
        data={fuelStations}
        renderItem={({ item }) => (
          <FuelDisplay station={item} price={item.petrolPrice} />
        )}
        refreshing={false}
        onRefresh={() => console.log("refreshing")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
