import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => router.push(`/product/${product.id}`)}
    >
      <Image source={product.image} style={styles.image} resizeMode="contain" />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.subtitle}>{product.subtitle}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>{product.price}</Text>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 155,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 18,
    padding: 14,
    marginRight: 14,
    backgroundColor: COLORS.white,
  },
  image: {
    width: "100%",
    height: 95,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.gray,
    marginTop: 4,
  },
  footer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.black,
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});