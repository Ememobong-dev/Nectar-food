import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

export default function OtpScreen() {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color={COLORS.black} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your 4-digit code</Text>

        <Text style={styles.label}>Code</Text>

        <TextInput
          value={code}
          onChangeText={setCode}
          maxLength={4}
          keyboardType="number-pad"
          placeholder="- - - -"
          style={styles.input}
        />
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/(auth)/location")}
        >
          <Ionicons
            name="chevron-forward"
            size={24}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    fontSize: 22,
    letterSpacing: 8,
    paddingBottom: 12,
    color: COLORS.black,
  },
  bottomRow: {
    marginTop: "auto",
    marginBottom: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  resendText: {
    color: COLORS.primary,
    fontWeight: "500",
    fontSize: 16,
  },
  
  nextButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});