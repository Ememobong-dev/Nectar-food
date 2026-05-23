import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/colors";
import { products } from "../../data/products";

const cartItems = products.slice(2, 6);

export default function CartScreen() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "3": 1,
    "4": 1,
    "5": 1,
    "6": 1,
  });

  const updateQuantity = (id: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] ?? 1) + value),
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />

            <View style={styles.itemContent}>
              <View style={styles.topRow}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>

                <TouchableOpacity>
                  <Ionicons name="close" size={20} color={COLORS.gray} />
                </TouchableOpacity>
              </View>

              <View style={styles.bottomRow}>
                <View style={styles.counter}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                    <Ionicons name="remove" size={20} color={COLORS.gray} />
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{quantities[item.id] ?? 1}</Text>

                  <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                    <Ionicons name="add" size={20} color={COLORS.primary} />
                  </TouchableOpacity>
                </View>

                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.buttonWrapper}>
        <AppButton title="Go To Checkout" />
        <View style={styles.totalBadge}>
          <Text style={styles.totalText}>$12.96</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 55,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.black,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  cartItem: {
    flexDirection: "row",
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 18,
  },
  itemContent: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 13,
    marginTop: 4,
  },
  bottomRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.black,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
  },
  buttonWrapper: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 95,
  },
  totalBadge: {
    position: "absolute",
    right: 20,
    top: 17,
    backgroundColor: "#489E67",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  totalText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
});