import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/colors";
import { products } from "../../data/products";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((item) => item.id === id) ?? products[0];

  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageSection}>
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={26} color={COLORS.black} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="share-outline" size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          <Image source={product.image} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.content}>
          <View style={styles.nameRow}>
            <View>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.subtitle}>{product.subtitle}</Text>
            </View>

            <Ionicons name="heart-outline" size={26} color={COLORS.gray} />
          </View>

          <View style={styles.quantityRow}>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <Ionicons name="remove" size={22} color={COLORS.gray} />
              </TouchableOpacity>

              <View style={styles.quantityBox}>
                <Text style={styles.quantity}>{quantity}</Text>
              </View>

              <TouchableOpacity onPress={() => setQuantity((prev) => prev + 1)}>
                <Ionicons name="add" size={22} color={COLORS.primary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>{product.price}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.sectionTitle}>Nutritions</Text>

            <View style={styles.infoRight}>
              <Text style={styles.badge}>100gr</Text>
              <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.sectionTitle}>Review</Text>

            <View style={styles.infoRight}>
              <Text style={styles.stars}>★★★★★</Text>
              <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <AppButton title="Add To Basket" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageSection: {
    height: 360,
    backgroundColor: "#F2F3F2",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingTop: 55,
    paddingHorizontal: 24,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 40,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginTop: 6,
  },
  quantityRow: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  quantityBox: {
    width: 45,
    height: 45,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.black,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.black,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: 20,
  },
  section: {},
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.black,
  },
  description: {
    marginTop: 10,
    color: COLORS.gray,
    fontSize: 14,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    backgroundColor: "#EBEBEB",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    color: COLORS.gray,
    fontSize: 12,
  },
  stars: {
    color: "#F3603F",
    fontSize: 16,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});