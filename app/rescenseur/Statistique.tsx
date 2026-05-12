import { StyleSheet, Text, View } from "react-native";

export default function StatistiquesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistiques</Text>

      <View style={styles.card}>
        <Text>Total recensé : 1200</Text>
      </View>

      <View style={styles.card}>
        <Text>Hommes : 650</Text>
      </View>

      <View style={styles.card}>
        <Text>Femmes : 550</Text>
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
    backgroundColor: "#f3f4f6",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
});

