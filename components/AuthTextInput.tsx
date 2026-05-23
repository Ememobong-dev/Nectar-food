import { TextInput, StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants/colors";

type AuthTextInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export default function AuthTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: AuthTextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor={COLORS.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    color: COLORS.gray,
    fontSize: 13,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    paddingVertical: 10,
    fontSize: 16,
    color: COLORS.black,
  },
});