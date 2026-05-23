import { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../constants/colors";

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      <View style={styles.logoWrapper}>
        <Text style={styles.carrot}>🥕</Text>

        <View>
          <Text style={styles.logoText}>nectar</Text>
          <Text style={styles.subtitle}>online groceries</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  carrot: {
    fontSize: 34,
  },
  logoText: {
    color: COLORS.white,
    fontSize: 42,
    fontWeight: "700",
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    letterSpacing: 3,
    marginTop: -4,
  },
});