import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import { router } from "expo-router";

const onboardingImage = require("../assets/images/onboarding.png");

export default function OnboardingScreen() {
  return (
    <ImageBackground source={onboardingImage} style={styles.background}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.15)"]}
        style={styles.overlay}
      >
        <View style={styles.content}>
          <Image
            source={require("../assets/images/white-carrot.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.title}>
            Welcome{"\n"}to our store
          </Text>

          <Text style={styles.description}>
            Get your groceries in as fast as one hour
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => router.push("/(auth)/signup")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 90,
  },
  image: {
    width: 48,
    height: 48,
    marginBottom: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 45,
  },
  description: {
    color: COLORS.white,
    fontSize: 16,
    marginTop: 14,
    marginBottom: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
});