import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ParametresScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Changer le mot de passe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Activer le dark mode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
      >
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
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

  button: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});