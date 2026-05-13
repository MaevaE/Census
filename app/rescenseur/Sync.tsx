import Header from "@/components/Header/Header";
import BottomNavbar from "@/components/Navbar/NavBar";

import { Ionicons } from "@expo/vector-icons";

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const PRIMARY = "#1D8C9C";

export default function SyncScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <Header
          
        />

        <View style={styles.content}>
          {/* STATUS CARD */}

          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="cloud-done-outline"
                size={60}
                color={PRIMARY}
              />
            </View>

            <Text style={styles.status}>
              Synchronisation réussie
            </Text>

            <Text style={styles.date}>
              Dernière synchro : Aujourd’hui •
              14:35
            </Text>

            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>
                En ligne
              </Text>
            </View>
          </View>

          {/* INFO CARDS */}

          <View style={styles.infoRow}>
            <View style={styles.infoCard}>
              <Ionicons
                name="folder-open-outline"
                size={28}
                color={PRIMARY}
              />

              <Text style={styles.number}>
                42
              </Text>

              <Text style={styles.label}>
                Données locales
              </Text>
            </View>

            <View style={styles.infoCard}>
              <Ionicons
                name="time-outline"
                size={28}
                color="#ef4444"
              />

              <Text style={styles.number}>
                3
              </Text>

              <Text style={styles.label}>
                En attente
              </Text>
            </View>
          </View>

          {/* DETAILS */}

          <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>
              Informations
            </Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Mode hors ligne
              </Text>

              <Text style={styles.detailValue}>
                Activé
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Taille des données
              </Text>

              <Text style={styles.detailValue}>
                24 MB
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Dernière sauvegarde
              </Text>

              <Text style={styles.detailValue}>
                Il y a 5 min
              </Text>
            </View>
          </View>

          {/* BUTTON */}

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
          >
            <Ionicons
              name="sync-outline"
              size={22}
              color="#fff"
            />

            <Text style={styles.buttonText}>
              Synchroniser maintenant
            </Text>
          </TouchableOpacity>

          <View style={{ height: 140 }} />
        </View>
      </ScrollView>

      {/* NAVBAR */}

      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F4F8FA",
  },

  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 30,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 5,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,

    backgroundColor: "#E8F7F9",

    justifyContent: "center",
    alignItems: "center",
  },

  status: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 22,
    color: "#0f172a",
  },

  date: {
    marginTop: 8,
    color: "#64748b",
    fontSize: 14,
  },

  statusBadge: {
    marginTop: 18,
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
  },

  statusBadgeText: {
    color: "#16A34A",
    fontWeight: "700",
    fontSize: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  infoCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 28,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,

    elevation: 4,
  },

  number: {
    fontSize: 32,
    fontWeight: "bold",
    color: PRIMARY,
    marginTop: 12,
  },

  label: {
    marginTop: 8,
    color: "#64748b",
    fontSize: 13,
  },

  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 22,
    marginTop: 24,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,

    elevation: 4,
  },

  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 20,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailLabel: {
    color: "#64748b",
    fontSize: 14,
  },

  detailValue: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 16,
  },

  button: {
    backgroundColor: PRIMARY,
    marginTop: 30,
    borderRadius: 22,
    paddingVertical: 18,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,

    shadowColor: PRIMARY,
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});