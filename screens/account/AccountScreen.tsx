import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const menuItems = [
  { title: "Orders", icon: "receipt-outline" },
  { title: "My Details", icon: "person-outline" },
  { title: "Delivery Address", icon: "location-outline" },
  { title: "Payment Methods", icon: "card-outline" },
  { title: "Promo Card", icon: "ticket-outline" },
  { title: "Notifications", icon: "notifications-outline" },
  { title: "Help", icon: "help-circle-outline" },
  { title: "About", icon: "information-circle-outline" },
];

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.avatar}
        />

        <View>
          <View style={styles.nameRow}>
            <Text style={styles.name}>Afsar Hossen</Text>
            <Ionicons name="pencil" size={16} color={COLORS.primary} />
          </View>

          <Text style={styles.email}>imshuvo79@gmail.com</Text>
        </View>
      </View>

      {menuItems.map((item) => (
        <TouchableOpacity key={item.title} style={styles.menuRow}>
          <View style={styles.menuLeft}>
            <Ionicons name={item.icon as any} size={22} color={COLORS.black} />
            <Text style={styles.menuText}>{item.title}</Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color={COLORS.black} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={22} color={COLORS.primary} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: COLORS.white,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 18,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.black,
  },
  email: {
    color: COLORS.gray,
    marginTop: 4,
  },
  menuRow: {
    paddingHorizontal: 24,
    paddingVertical: 19,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.black,
  },
  logoutButton: {
    marginHorizontal: 24,
    marginTop: 28,
    height: 58,
    borderRadius: 16,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    marginLeft: 12,
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});