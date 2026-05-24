import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function CheckoutModal({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.title}>Checkout</Text>

            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          <CheckoutRow title="Delivery" value="Select Method" />
          <CheckoutRow title="Payment" value="💳" />
          <CheckoutRow title="Promo Code" value="Pick discount" />
          <CheckoutRow title="Total Cost" value="$13.97" />

          <Text style={styles.terms}>
            By placing an order you agree to our{" "}
            <Text style={styles.bold}>Terms And Conditions</Text>
          </Text>

          <AppButton
            title="Place Order"
            onPress={() => {
              onClose();
              router.push("/order-failed");
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

function CheckoutRow({ title, value }: { title: string; value: string }) {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.rowTitle}>{title}</Text>

      <View style={styles.rowRight}>
        <Text style={styles.rowValue}>{value}</Text>
        <Ionicons name="chevron-forward" size={18} color={COLORS.black} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 36,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.black,
  },
  row: {
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTitle: {
    color: COLORS.gray,
    fontSize: 16,
    fontWeight: "600",
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowValue: {
    color: COLORS.black,
    fontWeight: "600",
    marginRight: 8,
  },
  terms: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 12,
    marginBottom: 24,
  },
  bold: {
    color: COLORS.black,
    fontWeight: "700",
  },
});