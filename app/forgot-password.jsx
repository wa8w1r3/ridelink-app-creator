import { Image } from "expo-image";
import { Link } from "expo-router";
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
} from "react-native";
import { primaryColor } from "../constants";
import RidelinkButton from "../components/RidelinkButton";

export default function Page() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    // Handle login logic
    console.log("Email:", email);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Logo-01.png")}
          style={styles.logo}
          contentFit="contain"
          transition={1000}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            cursorColor={primaryColor}
          />

          <View style={{ width: "100%" }}>
            <RidelinkButton
              title="Reset password"
              onPress={() => {
                handlePasswordReset();
              }}
              style={{ marginVertical: 10 }}
            />
          </View>
          <View style={styles.linkContainer}>
            <Text>Don't have an account?</Text>
            <Link href="/signup">
              <Text style={styles.linkText}> Sign Up</Text>
            </Link>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 200,
  },
  inputContainer: {
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

  linkContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    color: primaryColor,
  },
});
