import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RidelinkButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(31,144,130)",
    color: "white",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    color: "white",
  },
});
