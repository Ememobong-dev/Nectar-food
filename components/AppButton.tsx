import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

type AppButtonProps = {
  title: string;
  onPress?: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});