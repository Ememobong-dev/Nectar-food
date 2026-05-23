import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    FlatList,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { COLORS } from "../../constants/colors";
  import { products } from "../../data/products";
  import ProductCard from "../../components/ProductCard";
  import SectionHeader from "../../components/SectionHeader";
  
  export default function HomeScreen() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={20} color={COLORS.black} />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
  
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={COLORS.gray} />
          <TextInput
            placeholder="Search Store"
            placeholderTextColor={COLORS.gray}
            style={styles.searchInput}
          />
        </View>
  
        <Image
          source={require("../../assets/images/banner.png")}
          style={styles.banner}
          resizeMode="cover"
        />
  
        <SectionHeader title="Exclusive Offer" />
  
        <FlatList
          horizontal
          data={products.slice(0, 6)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsHorizontalScrollIndicator={false}
        />
  
        <SectionHeader title="Best Selling" />
  
        <FlatList
          horizontal
          data={products.slice(0, 6)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsHorizontalScrollIndicator={false}
        />
  
        <SectionHeader title="Groceries" />
  
        <View style={styles.categoryRow}>
          <View style={[styles.categoryCard, styles.pulses]}>
            <Image
              source={require("../../assets/images/apple.png")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Pulses</Text>
          </View>
  
          <View style={[styles.categoryCard, styles.rice]}>
            <Image
              source={require("../../assets/images/apple.png")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Rice</Text>
          </View>
        </View>
  
        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => `grocery-${item.id}`}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    content: {
      paddingHorizontal: 20,
      paddingTop: 55,
      paddingBottom: 100,
    },
    locationRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 22,
    },
    locationText: {
      marginLeft: 6,
      fontSize: 16,
      fontWeight: "600",
      color: COLORS.black,
    },
    searchBox: {
      height: 52,
      borderRadius: 14,
      backgroundColor: "#F2F3F2",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      marginBottom: 18,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 15,
      color: COLORS.black,
    },
    banner: {
      width: "100%",
      height: 115,
      borderRadius: 16,
    },
    categoryRow: {
      flexDirection: "row",
      gap: 14,
      marginBottom: 18,
    },
    categoryCard: {
      width: 250,
      height: 105,
      borderRadius: 18,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 18,
    },
    pulses: {
      backgroundColor: "#F8A44C33",
    },
    rice: {
      backgroundColor: "#53B17533",
    },
    categoryImage: {
      width: 70,
      height: 70,
      resizeMode: "contain",
      marginRight: 16,
    },
    categoryText: {
      fontSize: 18,
      fontWeight: "700",
      color: COLORS.black,
    },
  });