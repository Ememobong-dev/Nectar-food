import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import { useLocalSearchParams, router } from "expo-router";
  import { Ionicons } from "@expo/vector-icons";
  import ProductCard from "../../components/ProductCard";
  import { products } from "../../data/products";
  import { COLORS } from "../../constants/colors";
  
  export default function CategoryProductsScreen() {
    const { name } = useLocalSearchParams<{ name: string }>();
  
    const categoryName = name ?? "";
  
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={COLORS.black} />
          </TouchableOpacity>
  
          <Text style={styles.title}>{categoryName}</Text>
  
          <TouchableOpacity>
            <Ionicons name="options-outline" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
  
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <ProductCard product={item} />
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No products found in this category.</Text>
          }
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingTop: 55,
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 24,
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      color: COLORS.black,
    },
    listContent: {
      paddingBottom: 100,
    },
    row: {
      justifyContent: "space-between",
      marginBottom: 16,
    },
    cardWrapper: {
      width: "48%",
    },
    emptyText: {
      marginTop: 40,
      textAlign: "center",
      color: COLORS.gray,
    },
  });