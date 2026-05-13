import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "@/components/Header/Header";
import BottomNavbar from "@/components/Navbar/NavBar";

const PRIMARY = "#1D8C9C";

export default function DashboardScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>

        <Header
         
        />

        {/* ================= KPI ================= */}
        <View style={styles.kpiContainer}>

          <View style={styles.mainKpi}>
            <Ionicons name="people" size={28} color={PRIMARY} />

            <Text style={styles.kpiLabel}>
              Population recensée
            </Text>

            <Text style={styles.kpiValue}>
              12,450
            </Text>

            <Text style={styles.kpiTrend}>
              ↑ +2.3% ce mois
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.smallKpi}>
              <Ionicons name="map" size={20} color={PRIMARY} />
              <Text style={styles.smallValue}>24</Text>
              <Text style={styles.smallLabel}>Zones</Text>
            </View>

            <View style={styles.smallKpi}>
              <Ionicons name="today" size={20} color={PRIMARY} />
              <Text style={styles.smallValue}>340</Text>
              <Text style={styles.smallLabel}>Aujourd’hui</Text>
            </View>

            <View style={styles.smallKpi}>
              <Ionicons name="trending-up" size={20} color={PRIMARY} />
              <Text style={styles.smallValue}>68%</Text>
              <Text style={styles.smallLabel}>Couverture</Text>
            </View>
          </View>
        </View>

        {/* ================= PROGRESS ================= */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Progression des zones</Text>

          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>
                Couverture nationale
              </Text>

              <Text style={styles.progressPercent}>
                68%
              </Text>
            </View>

            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>

            <Text style={styles.progressSub}>
              Objectif: 100% des zones assignées
            </Text>
          </View>
        </View>

        {/* ================= ACTIVITY ================= */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activité récente</Text>

          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <Text style={styles.activityText}>
              Nouveau ménage enregistré à Bastos
            </Text>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <Text style={styles.activityText}>
              Synchronisation zone Douala 3
            </Text>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.dot} />
            <Text style={styles.activityText}>
              25 nouveaux enregistrements validés
            </Text>
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
    backgroundColor: "#f1f5f9",
  },

  scrollContainer: {
     marginBottom:100,
  },

  // ================= KPI =================

  kpiContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  mainKpi: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  kpiLabel: {
    marginTop: 8,
    color: "#64748b",
    fontSize: 13,
  },

  kpiValue: {
    fontSize: 34,
    fontWeight: "800",
    color: "#0f172a",
    marginTop: 6,
  },

  kpiTrend: {
    marginTop: 6,
    color: PRIMARY,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallKpi: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 4,
    padding: 14,
    borderRadius: 18,
    alignItems: "center",
  },

  smallValue: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 6,
    color: "#0f172a",
  },

  smallLabel: {
    fontSize: 11,
    color: "#64748b",
  },

  // ================= SECTION =================

  section: {
    marginTop: 22,
    paddingHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#0f172a",
  },

  // ================= PROGRESS =================

  progressCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  progressTitle: {
    color: "#64748b",
  },

  progressPercent: {
    fontWeight: "700",
    color: PRIMARY,
  },

  progressBar: {
    height: 10,
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
  },

  progressFill: {
    width: "68%",
    height: "100%",
    backgroundColor: PRIMARY,
  },

  progressSub: {
    marginTop: 8,
    fontSize: 12,
    color: "#94a3b8",
  },

  // ================= ACTIVITY =================

  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: PRIMARY,
    marginRight: 10,
  },

  activityText: {
    color: "#334155",
    fontSize: 13,
  },
});