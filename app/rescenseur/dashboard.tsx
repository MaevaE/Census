import { ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "@/components/Header/Header";
import BottomNavbar from "@/components/Navbar/NavBar";

const PRIMARY = "#1D8C9C";

export default function DashboardScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title="Dashboard Census"
          subtitle="Suivi global des opérations de recensement"
        />

        {/* KPI SECTION */}
        <View style={styles.statsContainer}>
          <View style={styles.bigCard}>
            <Text style={styles.bigCardTitle}>Population totale recensée</Text>
            <Text style={styles.bigCardValue}>12,450</Text>
            <Text style={styles.bigCardSub}>+2.3% ce mois</Text>
          </View>

          <View style={styles.smallCardsRow}>
            <View style={styles.smallCard}>
              <Text style={styles.smallCardTitle}>Zones actives</Text>
              <Text style={styles.smallCardValue}>24</Text>
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.smallCardTitle}>Aujourd’hui</Text>
              <Text style={styles.smallCardValue}>340</Text>
            </View>
          </View>
        </View>

        {/* PROGRESSION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Progression globale</Text>

          <View style={styles.progressCard}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>

            <Text style={styles.progressText}>
              68% des zones couvertes
            </Text>
          </View>
        </View>

        {/* ACTIVITY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activité récente</Text>

          <View style={styles.activityCard}>
            <Text style={styles.activityText}>✔ Nouveau ménage enregistré</Text>
          </View>

          <View style={styles.activityCard}>
            <Text style={styles.activityText}>✔ Zone Douala 3 synchronisée</Text>
          </View>

          <View style={styles.activityCard}>
            <Text style={styles.activityText}>✔ 25 personnes ajoutées</Text>
          </View>
        </View>
      </ScrollView>

      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FAFB",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  statsContainer: {
    marginBottom: 25,
  },

  bigCard: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 24,
    marginBottom: 18,

    borderLeftWidth: 6,
    borderLeftColor: PRIMARY,
  },

  bigCardTitle: {
    color: "#64748b",
    fontSize: 14,
  },

  bigCardValue: {
    color: "#0f172a",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
  },

  bigCardSub: {
    marginTop: 6,
    color: PRIMARY,
    fontWeight: "600",
  },

  smallCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallCard: {
    backgroundColor: "#ffffff",
    width: "48%",
    padding: 18,
    borderRadius: 20,
  },

  smallCardTitle: {
    color: "#64748b",
    fontSize: 13,
  },

  smallCardValue: {
    marginTop: 8,
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
  },

  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#0f172a",
  },

  progressCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
  },

  progressBar: {
    height: 10,
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    width: "68%",
    height: "100%",
    backgroundColor: PRIMARY,
  },

  progressText: {
    marginTop: 10,
    color: "#64748b",
  },

  activityCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },

  activityText: {
    color: "#334155",
  },
});