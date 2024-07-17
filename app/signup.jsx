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
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const handleSignUp = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Contact:", contact);
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
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
            autoCapitalize="none"
            cursorColor={primaryColor}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            autoCapitalize="none"
            cursorColor={primaryColor}
          />

          <TextInput
            placeholder="Contact"
            value={contact}
            onChangeText={setContact}
            style={styles.input}
            autoCapitalize="none"
            cursorColor={primaryColor}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            cursorColor={primaryColor}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            cursorColor={primaryColor}
          />

          {/* <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity> */}

          <View style={{ width: "100%" }}>
            <RidelinkButton
              title="Signup"
              onPress={() => {
                handleSignUp();
              }}
              style={{ marginVertical: 10 }}
            />
          </View>
          <View style={styles.linkContainer}>
            <Text>Already have an account?</Text>
            <Link href="/login">
              <Text style={styles.linkText}> Login</Text>
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
  linkContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    color: primaryColor,
  },
});
