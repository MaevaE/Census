import { StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Rescenseur</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Population recensée : 120</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Zones couvertes : 8</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Recensements aujourd’hui : 25</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#2563eb",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  cardText: {
    color: "#fff",
    fontSize: 18,
  },
});