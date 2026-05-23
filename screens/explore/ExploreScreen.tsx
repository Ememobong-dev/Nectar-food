import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { COLORS } from "../../constants/colors";

const categories = [
    {
        id: "1",
        name: "Fresh Fruits\n& Vegetable",
        image: require("../../assets/images/fruits.png"),
        bg: "#53B1751A",
        border: "#53B175",
    },
    {
        id: "2",
        name: "Cooking Oil\n& Ghee",
        image: require("../../assets/images/oil.png"),
        bg: "#F8A44C1A",
        border: "#F8A44C",
    },
    {
        id: "3",
        name: "Meat & Fish",
        image: require("../../assets/images/meat.png"),
        bg: "#F7A5931A",
        border: "#F7A593",
    },
    {
        id: "4",
        name: "Bakery & Snacks",
        image: require("../../assets/images/bakery.png"),
        bg: "#D3B0E01A",
        border: "#D3B0E0",
    },
    {
        id: "5",
        name: "Dairy & Eggs",
        image: require("../../assets/images/dairy.png"),
        bg: "#FDE59840",
        border: "#FDE598",
    },
    {
        id: "6",
        name: "Beverages",
        image: require("../../assets/images/beverages.png"),
        bg: "#B7DFF51A",
        border: "#B7DFF5",
    },
];

export default function ExploreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find Products</Text>

            <View style={styles.searchBox}>
                <Ionicons name="search-outline" size={20} color={COLORS.gray} />
                <TextInput
                    placeholder="Search Store"
                    placeholderTextColor={COLORS.gray}
                    style={styles.searchInput}
                />
            </View>

            <FlatList
                data={categories}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.85}
                        style={[
                            styles.categoryCard,
                            {
                                backgroundColor: item.bg,
                                borderColor: item.border,
                            },
                        ]}
                        onPress={() =>
                            router.push({
                                pathname: "/category/[name]",
                                params: { name: item.name.replace("\n", " ") },
                            })
                        }
                    >
                        <Image source={item.image} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 55,
        backgroundColor: COLORS.white,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        color: COLORS.black,
        marginBottom: 24,
    },
    searchBox: {
        height: 52,
        borderRadius: 14,
        backgroundColor: "#F2F3F2",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 16,
    },
    categoryCard: {
        width: "48%",
        height: 190,
        borderRadius: 18,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
    },
    categoryImage: {
        width: 105,
        height: 90,
        resizeMode: "contain",
        marginBottom: 20,
    },
    categoryText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.black,
    },
});