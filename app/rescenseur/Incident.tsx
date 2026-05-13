import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const PRIMARY = "#1D8C9C";

export default function IncidentScreen() {
  const [description, setDescription] =
    useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Signaler un incident
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Type d’incident
        </Text>

        <View style={styles.typeRow}>
          <View style={styles.typeBtn}>
            <Text>GPS</Text>
          </View>

          <View style={styles.typeBtn}>
            <Text>Danger</Text>
          </View>

          <View style={styles.typeBtn}>
            <Text>Refus</Text>
          </View>
        </View>

        <Text style={styles.label}>
          Description
        </Text>

        <TextInput
          style={styles.input}
          multiline
          placeholder="Décrire le problème..."
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity style={styles.uploadBtn}>
          <Ionicons
            name="camera-outline"
            size={22}
            color={PRIMARY}
          />

          <Text style={styles.uploadText}>
            Ajouter une photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Envoyer le signalement
          </Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 20,
  },

  label: {
    fontWeight: "700",
    marginBottom: 12,
    color: "#334155",
  },

  typeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 22,
  },

  typeBtn: {
    backgroundColor: "#ecfeff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
  },

  input: {
    backgroundColor: "#f8fafc",
    borderRadius: 18,
    padding: 16,
    height: 140,
    textAlignVertical: "top",
    marginBottom: 20,
  },

  uploadBtn: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderStyle: "dashed",

    borderRadius: 20,
    padding: 18,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 24,
  },

  uploadText: {
    marginTop: 8,
    color: "#64748b",
  },

  button: {
    backgroundColor: PRIMARY,
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});