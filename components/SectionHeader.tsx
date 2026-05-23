import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  title: string;
};

export default function SectionHeader({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.black,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primary,
  },
});