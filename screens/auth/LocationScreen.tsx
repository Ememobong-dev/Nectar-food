import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/colors";

export default function LocationScreen() {
  const [zone] = useState("Banasree");
  const [area] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color={COLORS.black} />
      </TouchableOpacity>

      <Image
        source={require("../../assets/images/location.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Select Your Location</Text>

      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      <View style={styles.form}>
        <View style={styles.selectBox}>
          <Text style={styles.label}>Your Zone</Text>

          <View style={styles.selectRow}>
            <Text style={styles.value}>{zone}</Text>
            <Ionicons name="chevron-down" size={18} color={COLORS.gray} />
          </View>
        </View>

        <View style={styles.selectBox}>
          <Text style={styles.label}>Your Area</Text>

          <View style={styles.selectRow}>
            <Text style={[styles.value, !area && styles.placeholder]}>
              {area || "Types of your area"}
            </Text>
            <Ionicons name="chevron-down" size={18} color={COLORS.gray} />
          </View>
        </View>
      </View>

      <AppButton title="Submit" onPress={() => router.push("/login")} />
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
  image: {
    width: 230,
    height: 190,
    alignSelf: "center",
    marginTop: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.black,
    textAlign: "center",
    marginTop: 24,
  },
  subtitle: {
    color: COLORS.gray,
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 60,
  },
  form: {
    marginBottom: 36,
  },
  selectBox: {
    marginBottom: 28,
  },
  label: {
    color: COLORS.gray,
    fontSize: 13,
    marginBottom: 12,
  },
  selectRow: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    paddingBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  value: {
    color: COLORS.black,
    fontSize: 16,
  },
  placeholder: {
    color: COLORS.gray,
  },
});