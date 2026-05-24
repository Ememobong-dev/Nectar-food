import { View, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/colors";

export default function OrderFailedScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/order-failed.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Oops! Order Failed</Text>

      <Text style={styles.subtitle}>
        Something went terribly wrong.
      </Text>

      <View style={styles.bottom}>
        <AppButton title="Please Try Again" onPress={() => router.back()} />

        <Text style={styles.backText} onPress={() => router.replace("/(tabs)")}>
          Back to home
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 120,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.black,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
  },
  bottom: {
    marginTop: "auto",
    width: "100%",
    marginBottom: 50,
  },
  backText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.black,
  },
});