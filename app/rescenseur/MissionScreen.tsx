// app/rescenseur/MissionsScreen.tsx

import Header from "@/components/Header/Header";
import BottomNavbar from "@/components/Navbar/NavBar";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const PRIMARY = "#1D8C9C";

const missions = [
  {
    id: 1,
    zone: "Zone A12",
    city: "Yaoundé",
    district: "Bastos",
    progress: 75,
    households: 120,
    remaining: 30,
    supervisor: "M. Ndzi",
    urgent: true,
  },

  {
    id: 2,
    zone: "Zone B05",
    city: "Douala",
    district: "Akwa",
    progress: 42,
    households: 80,
    remaining: 46,
    supervisor: "Mme Ndzié",
    urgent: false,
  },
];

export default function MissionsScreen() {
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
          {/* STATS */}

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>24</Text>

              <Text style={styles.statLabel}>
                Zones
              </Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statValue}>340</Text>

              <Text style={styles.statLabel}>
                Ménages
              </Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statValue}>68%</Text>

              <Text style={styles.statLabel}>
                Progression
              </Text>
            </View>
          </View>

          {/* MISSIONS */}

          {missions.map((mission) => (
            <TouchableOpacity
              key={mission.id}
              style={styles.card}
              activeOpacity={0.9}
            >
              {/* TOP */}

              <View style={styles.cardTop}>
                <View>
                  <Text style={styles.zoneName}>
                    {mission.zone}
                  </Text>

                  <Text style={styles.location}>
                    {mission.city} • {mission.district}
                  </Text>
                </View>

                {mission.urgent && (
                  <View style={styles.urgentBadge}>
                    <Text style={styles.urgentText}>
                      Urgent
                    </Text>
                  </View>
                )}
              </View>

              {/* PROGRESS */}

              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${mission.progress}%`,
                      },
                    ]}
                  />
                </View>

                <Text style={styles.progressText}>
                  {mission.progress}% terminé
                </Text>
              </View>

              {/* INFOS */}

              <View style={styles.infoRow}>
                <View style={styles.infoBox}>
                  <Ionicons
                    name="home-outline"
                    size={18}
                    color={PRIMARY}
                  />

                  <Text style={styles.infoValue}>
                    {mission.households}
                  </Text>

                  <Text style={styles.infoLabel}>
                    Ménages
                  </Text>
                </View>

                <View style={styles.infoBox}>
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color="#ef4444"
                  />

                  <Text style={styles.infoValue}>
                    {mission.remaining}
                  </Text>

                  <Text style={styles.infoLabel}>
                    Restants
                  </Text>
                </View>

                <View style={styles.infoBox}>
                  <Ionicons
                    name="person-outline"
                    size={18}
                    color="#0f172a"
                  />

                  <Text style={styles.infoValueSmall}>
                    {mission.supervisor}
                  </Text>

                  <Text style={styles.infoLabel}>
                    Superviseur
                  </Text>
                </View>
              </View>

              {/* BUTTON */}

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/rescenseur/ZoneTracking` as any)}
              >
                <Ionicons
                  name="play"
                  size={18}
                  color="#fff"
                />

                <Text style={styles.buttonText}>
                  Commencer
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}

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
    paddingHorizontal: 18,
    paddingTop: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  statCard: {
    backgroundColor: "#fff",
    width: "31%",
    borderRadius: 22,
    paddingVertical: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,

    elevation: 4,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: PRIMARY,
  },

  statLabel: {
    color: "#64748b",
    marginTop: 5,
    fontSize: 12,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 20,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 4,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  zoneName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },

  location: {
    color: "#64748b",
    marginTop: 5,
  },

  urgentBadge: {
    backgroundColor: "#fee2e2",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 50,
  },

  urgentText: {
    color: "#ef4444",
    fontWeight: "700",
    fontSize: 12,
  },

  progressContainer: {
    marginTop: 22,
  },

  progressBar: {
    height: 12,
    backgroundColor: "#e2e8f0",
    borderRadius: 20,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: PRIMARY,
    borderRadius: 20,
  },

  progressText: {
    marginTop: 8,
    color: "#64748b",
    fontSize: 13,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },

  infoBox: {
    alignItems: "center",
    width: "31%",
    backgroundColor: "#f8fafc",
    paddingVertical: 15,
    borderRadius: 18,
  },

  infoValue: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 18,
    color: "#0f172a",
  },

  infoValueSmall: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 12,
    color: "#0f172a",
    textAlign: "center",
  },

  infoLabel: {
    marginTop: 5,
    fontSize: 11,
    color: "#64748b",
  },

  button: {
    backgroundColor: PRIMARY,
    marginTop: 24,
    borderRadius: 18,
    paddingVertical: 16,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});