import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/colors";
import { products } from "../../data/products";

const favouriteItems = products.slice(4, 8);

export default function FavouriteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>

      <FlatList
        data={favouriteItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />

            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>

            <Text style={styles.price}>{item.price}</Text>
            <Ionicons name="chevron-forward" size={20} color={COLORS.black} />
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonWrapper}>
        <AppButton title="Add All To Cart" />
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
    paddingHorizontal: 24,
    paddingBottom: 130,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  image: {
    width: 48,
    height: 58,
    marginRight: 18,
  },
  details: {
    flex: 1,
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
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.black,
    marginRight: 12,
  },
  buttonWrapper: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 95,
  },
});