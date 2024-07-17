import { Image } from "expo-image";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { primaryColor } from "../../../constants";
import RidelinkButton from "../../../components/RidelinkButton";

export default function Page() {
  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickuLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");

  const handleSubmit = () => {};

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Product Name"
            value={productName}
            onChangeText={setProductName}
            style={styles.input}
            autoCapitalize="none"
            cursorColor={primaryColor}
          />

          <TextInput
            placeholder="Product Weight"
            value={productWeight}
            onChangeText={setProductWeight}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="numeric"
            cursorColor={primaryColor}
          />

          <TextInput
            placeholder="Pickup Location"
            value={pickuLocation}
            onChangeText={setPickupLocation}
            style={styles.input}
            autoCapitalize="none"
            cursorColor={primaryColor}
          />

          <TextInput
            placeholder="Delivery Location"
            value={deliveryLocation}
            onChangeText={setDeliveryLocation}
            style={styles.input}
            autoCapitalize="none"
            cursorColor={primaryColor}
          />

          <TextInput
            placeholder="Delivery Instructions"
            value={deliveryInstructions}
            onChangeText={setDeliveryInstructions}
            style={[
              styles.input,
              {
                textAlignVertical: "top",
              },
            ]}
            autoCapitalize="none"
            cursorColor={primaryColor}
            multiline
            numberOfLines={4}
          />

          {/* <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Get Quote</Text>
          </TouchableOpacity> */}
          <View style={{ width: "100%" }}>
            <RidelinkButton
              title="Get Quote"
              onPress={() => {
                handleSubmit();
              }}
              style={{ marginVertical: 10 }}
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 2 / 3,
    width: "75%",
    alignItems: "center",
  },

  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#fff",
    elevation: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: primaryColor,
    borderRadius: 25,
    borderCurve: "continuous",
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
