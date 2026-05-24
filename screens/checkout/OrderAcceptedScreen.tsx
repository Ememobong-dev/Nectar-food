import { View, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import AppButton from "@/components/AppButton";
import { COLORS } from "@/constants/colors";


export default function OrderAcceptedScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/order-accepted.png")}
                style={styles.image}
                resizeMode="contain"
            />


            <Text style={styles.title}>Your Order has been accepted</Text>

            <Text style={styles.subtitle}>
                Your items have been placed and is on its way to being processed
            </Text>

            <View style={styles.bottom}>
                <AppButton title="Track Order" />

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
    // checkCircle: {
    //     width: 150,
    //     height: 150,
    //     borderRadius: 75,
    //     backgroundColor: COLORS.primary,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginBottom: 60,
    // },
    title: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        color: COLORS.black,
    },
    subtitle: {
        color: COLORS.gray,
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        marginTop: 16,
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