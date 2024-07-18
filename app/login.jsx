import { Image } from "expo-image";
import { Link, router } from "expo-router";
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

  const handleLogin = () => {
    // Handle login logic
    console.log("Email:", email);
    console.log("Password:", password);
    router.replace("(drawer)/(tabs)");
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
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
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            cursorColor={primaryColor}
          />
          <View style={styles.forgotPasswordContainer}>
            <Link href="/forgot-password">
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </Link>
          </View>

          <View style={{ width: "100%" }}>
            <RidelinkButton
              title="Login"
              onPress={() => {
                handleLogin();
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
    borderColor: "#ddd",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#ddd",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: primaryColor,
    marginBottom: 10,
    textAlign: "right",
  },

  linkContainer: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    color: primaryColor,
  },
});
