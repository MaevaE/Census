import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PRIMARY = "#1D8C9C";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.brand}>Census System</Text>
        <Text style={styles.title}>{title}</Text>

        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      <View style={styles.right}>
        {/* Notification */}
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity style={styles.profileBtn}>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: PRIMARY,
    padding: 18,
    borderRadius: 18,
  },

  brand: {
    color: "#d1f7ff",
    fontSize: 12,
    marginBottom: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    marginTop: 4,
    color: "#d1f7ff",
    fontSize: 13,
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
   right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  profileBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
});