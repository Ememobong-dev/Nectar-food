import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

export default function PhoneNumberScreen() {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color={COLORS.black} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your mobile number</Text>

        <Text style={styles.label}>Mobile Number</Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.flag}>🇧🇩</Text>
          <Text style={styles.code}>+880</Text>

          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => router.push("/(auth)/otp")}
      >
        <Ionicons name="chevron-forward" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
    backgroundColor: COLORS.white,
  },
  content: {
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 32,
  },
  label: {
    color: COLORS.gray,
    fontSize: 13,
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    paddingBottom: 12,
  },
  flag: {
    fontSize: 20,
    marginRight: 10,
  },
  code: {
    fontSize: 16,
    color: COLORS.black,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
  },
  nextButton: {
    alignSelf: "flex-end",
    marginTop: "auto",
    marginBottom: 64,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  }
});