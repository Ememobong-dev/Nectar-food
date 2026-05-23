import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AppButton from "../../components/AppButton";
import AuthTextInput from "../../components/AuthTextInput";
import { COLORS } from "../../constants/colors";

export default function SignupScreen() {
  const [username, setUsername] = useState("Afrosh Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo79@gmail.com");
  const [password, setPassword] = useState("password");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/carrot.png")} style={styles.logo} />

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <AuthTextInput label="Username" value={username} onChangeText={setUsername} />

      <AuthTextInput label="Email" value={email} onChangeText={setEmail} />

      <AuthTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.termsText}>
        By continuing you agree to our{" "}
        <Text style={styles.greenText}>Terms of Service</Text> and{" "}
        <Text style={styles.greenText}>Privacy Policy.</Text>
      </Text>

      <AppButton title="Sign Up" onPress={() => router.push("/(auth)/phone")} />

      <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.bottomText}>
          Already have an account? <Text style={styles.greenText}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 90,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 42,
    height: 42,
    alignSelf: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.black,
  },
  subtitle: {
    color: COLORS.gray,
    marginTop: 8,
    marginBottom: 28,
  },
  termsText: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 24,
  },
  greenText: {
    color: COLORS.primary,
  },
  bottomText: {
    textAlign: "center",
    marginTop: 24,
    fontWeight: "600",
  },
});