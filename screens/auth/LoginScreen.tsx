import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AppButton from "../../components/AppButton";
import AuthTextInput from "../../components/AuthTextInput";
import { COLORS } from "../../constants/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("imshuvo79@gmail.com");
  const [password, setPassword] = useState("password");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/carrot.png")} style={styles.logo} />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      <AuthTextInput label="Email" value={email} onChangeText={setEmail} />

      <AuthTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <AppButton title="Log In" onPress={() => router.push("/(auth)/location")} />

      <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
        <Text style={styles.bottomText}>
          Don’t have an account? <Text style={styles.greenText}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 70,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 42,
    height: 42,
    alignSelf: "center",
    marginBottom: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.black,
  },
  subtitle: {
    color: COLORS.gray,
    marginTop: 8,
    marginBottom: 36,
  },
  forgotText: {
    textAlign: "right",
    marginBottom: 28,
    color: COLORS.black,
  },
  bottomText: {
    textAlign: "center",
    marginTop: 24,
    fontWeight: "600",
  },
  greenText: {
    color: COLORS.primary,
  },
});