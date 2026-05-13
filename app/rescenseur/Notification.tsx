import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const PRIMARY = "#1D8C9C";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  type: "mission" | "alert" | "system";
  read: boolean;
  time: string;
};

export default function NotificationsScreen() {
  const router = useRouter();

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "1",
      title: "Nouvelle zone assignée",
      message: "Vous avez été assigné à Bastos - Zone A12",
      type: "mission",
      read: false,
      time: "10 min",
    },
    {
      id: "2",
      title: "Alerte GPS",
      message: "Vous êtes proche de la limite de votre zone",
      type: "alert",
      read: false,
      time: "25 min",
    },
    {
      id: "3",
      title: "Mise à jour système",
      message: "L’application a été mise à jour avec succès",
      type: "system",
      read: true,
      time: "1h",
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case "mission":
        return "location-outline";
      case "alert":
        return "warning-outline";
      case "system":
        return "settings-outline";
      default:
        return "notifications-outline";
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "mission":
        return "#2563eb";
      case "alert":
        return "#ef4444";
      case "system":
        return "#64748b";
      default:
        return PRIMARY;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        {/* BACK BUTTON */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backBtn}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        {/* TITLE */}
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>
            Suivi des alertes et missions
          </Text>
        </View>

        {/* BADGE */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {unreadCount}
          </Text>
        </View>
      </View>

      {/* ================= LIST ================= */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => markAsRead(item.id)}
            style={[
              styles.card,
              !item.read && styles.unreadCard,
            ]}
          >
            {/* ICON */}
            <View
              style={[
                styles.iconBox,
                { backgroundColor: getColor(item.type) + "15" },
              ]}
            >
              <Ionicons
                name={getIcon(item.type)}
                size={22}
                color={getColor(item.type)}
              />
            </View>

            {/* CONTENT */}
            <View style={styles.content}>
              <View style={styles.row}>
                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.time}>
                  {item.time}
                </Text>
              </View>

              <Text style={styles.message}>
                {item.message}
              </Text>
            </View>

            {/* UNREAD DOT */}
            {!item.read && <View style={styles.dot} />}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  subtitle: {
    fontSize: 12,
    color: "#d1f7ff",
    marginTop: 2,
  },

  badge: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: PRIMARY,
    fontWeight: "700",
  },

  /* CARD */
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: PRIMARY,
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
  },

  message: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
  },

  time: {
    fontSize: 12,
    color: "#94a3b8",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: PRIMARY,
  },
});