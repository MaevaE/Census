import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const activities = [
  {
    id: "1",
    title: "Ménage enregistré",
    desc: "Famille Ndzi • Bastos",
    time: "10 min",
  },
  {
    id: "2",
    title: "Synchronisation effectuée",
    desc: "42 données envoyées",
    time: "35 min",
  },
  {
    id: "3",
    title: "Zone terminée",
    desc: "Zone A12 complétée",
    time: "1h",
  },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Historique
      </Text>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconBox}>
              <Ionicons
                name="time-outline"
                size={22}
                color="#1D8C9C"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text style={styles.cardDesc}>
                {item.desc}
              </Text>
            </View>

            <Text style={styles.time}>
              {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FA",
    padding: 20,
    paddingTop: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 18,
    marginBottom: 15,

    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#ecfeff",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#0f172a",
  },

  cardDesc: {
    color: "#64748b",
    marginTop: 5,
  },

  time: {
    color: "#94a3b8",
    fontSize: 12,
  },
});