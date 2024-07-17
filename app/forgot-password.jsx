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
} from "react-native";
import { primaryColor } from "../constants";

export default function Page() {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Handle login logic
    console.log("Email:", email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
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
        

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text>Don't have an account?</Text>
          <Link href="/signup">
            <Text style={styles.linkText}> Sign Up</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
  },
  logo: {
    height: 100,
    width: 200,
  },
  inputContainer: {
    width: "75%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 25,
    borderCurve: "continuous",
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
  linkContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    color: primaryColor,
  },
});
