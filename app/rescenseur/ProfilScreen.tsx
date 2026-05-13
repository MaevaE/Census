import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PRIMARY = "#1D8C9C";

export default function ProfileScreen({ navigation }: any) {
  const [gpsEnabled, setGpsEnabled] = useState(true);
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        
                {/* BACK BUTTON */}
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={styles.backBtn}
                >
                  <Ionicons name="arrow-back" size={22} color="#fff" />
                </TouchableOpacity>

        <Text style={styles.headerTitle}>Mon Profil</Text>

        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* USER CARD */}
        <View style={styles.userCard}>
          <Ionicons name="person-circle" size={70} color={PRIMARY} />

          <Text style={styles.name}>Recenseur</Text>
          <Text style={styles.role}>Zone : Bastos - A12</Text>

          <View style={styles.status}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>Mission active</Text>
          </View>
        </View>

        {/* INFO SECTION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informations</Text>

          <View style={styles.row}>
            <Ionicons name="location-outline" size={20} color={PRIMARY} />
            <Text style={styles.rowText}>Yaoundé, Cameroun</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="business-outline" size={20} color={PRIMARY} />
            <Text style={styles.rowText}>District : Bastos</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="time-outline" size={20} color={PRIMARY} />
            <Text style={styles.rowText}>Horaires : 08h - 18h</Text>
          </View>
        </View>

        {/* SETTINGS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Paramètres</Text>

          <View style={styles.settingRow}>
            <Ionicons name="notifications-outline" size={20} color={PRIMARY} />
            <Text style={styles.rowText}>Notifications</Text>
            <Switch value={notifEnabled} onValueChange={setNotifEnabled} />
          </View>

          <View style={styles.settingRow}>
            <Ionicons name="navigate-outline" size={20} color={PRIMARY} />
            <Text style={styles.rowText}>GPS actif</Text>
            <Switch value={gpsEnabled} onValueChange={setGpsEnabled} />
          </View>

          <View style={styles.settingRow}>
            <Ionicons name="moon-outline" size={20} color={PRIMARY} />
            <Text style={styles.rowText}>Mode sombre</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>

        {/* ACTIONS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sécurité</Text>

          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="lock-closed-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Changer mot de passe</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: "#ef4444" }]}>
            <Ionicons name="log-out-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  header: {
    backgroundColor: PRIMARY,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  userCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },

  role: {
    color: "#64748b",
    marginTop: 4,
  },

   backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22c55e",
    marginRight: 6,
  },

  statusText: {
    color: "#22c55e",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#0f172a",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },

  rowText: {
    fontSize: 14,
    color: "#334155",
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  actionBtn: {
    flexDirection: "row",
    backgroundColor: PRIMARY,
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },

  actionText: {
    color: "#fff",
    fontWeight: "600",
  },
});