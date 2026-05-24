import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/colors";

const categories = ["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"];
const brands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farms"];

export default function FilterScreen() {
  const [selectedCategories, setSelectedCategories] = useState(["Eggs"]);
  const [selectedBrands, setSelectedBrands] = useState(["Cocola"]);

  const toggle = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={26} color={COLORS.black} />
        </TouchableOpacity>

        <Text style={styles.title}>Filters</Text>

        <View style={{ width: 26 }} />
      </View>

      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Categories</Text>

        {categories.map((item) => {
          const checked = selectedCategories.includes(item);

          return (
            <TouchableOpacity
              key={item}
              style={styles.optionRow}
              onPress={() => toggle(item, selectedCategories, setSelectedCategories)}
            >
              <Ionicons
                name={checked ? "checkbox" : "square-outline"}
                size={22}
                color={checked ? COLORS.primary : COLORS.gray}
              />
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          );
        })}

        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Brand</Text>

        {brands.map((item) => {
          const checked = selectedBrands.includes(item);

          return (
            <TouchableOpacity
              key={item}
              style={styles.optionRow}
              onPress={() => toggle(item, selectedBrands, setSelectedBrands)}
            >
              <Ionicons
                name={checked ? "checkbox" : "square-outline"}
                size={22}
                color={checked ? COLORS.primary : COLORS.gray}
              />
              <Text
                style={[
                  styles.optionText,
                  checked && { color: COLORS.primary },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}

        <View style={styles.buttonWrapper}>
          <AppButton title="Apply Filter" onPress={() => router.back()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.black,
  },
  panel: {
    flex: 1,
    backgroundColor: "#F2F3F2",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 18,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.black,
  },
  buttonWrapper: {
    marginTop: "auto",
    marginBottom: 36,
  },
});