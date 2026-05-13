import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import Header from "@/components/Header/Header";
import BottomNavbar from "@/components/Navbar/NavBar";

const PRIMARY = "#1D8C9C";

export default function RecensementScreen() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* HEADER */}
      <Header
        title="Recensement"
        subtitle={`Étape ${step}/5 • Collecte terrain`}
      />

      {/* CONTENU */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* TITRE */}
        <View style={styles.topSection}>
          <Text style={styles.title}>
            Formulaire de recensement
          </Text>

          <Text style={styles.description}>
            Collecte des données démographiques
            et sociales du ménage.
          </Text>

          {/* PROGRESS BAR */}
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progress,
                { width: `${step * 20}%` },
              ]}
            />
          </View>
        </View>

        {/* STEPS */}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <SuccessStep />}

        {/* BUTTONS */}
        {step < 5 && (
          <View style={styles.nav}>
            {step > 1 && (
              <TouchableOpacity
                style={styles.btnSecondary}
                onPress={back}
              >
                <Ionicons
                  name="arrow-back"
                  size={18}
                  color="#0f172a"
                />

                <Text style={styles.btnText}>
                  Retour
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={next}
            >
              <Text style={styles.btnTextPrimary}>
                {step === 4 ? "Valider" : "Suivant"}
              </Text>

              <Ionicons
                name="arrow-forward"
                size={18}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* NAVBAR */}
      <BottomNavbar />
    </SafeAreaView>
  );
}

/* ========================= */
/* STEP 1 */
/* ========================= */

function Step1() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        📍 Localisation
      </Text>

      <Field icon="business-outline" label="Région" />
      <Field icon="map-outline" label="Ville" />
      <Field icon="location-outline" label="Quartier" />
      <Field icon="pin-outline" label="Zone de dénombrement" />
    </View>
  );
}

/* ========================= */
/* STEP 2 */
/* ========================= */

function Step2() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        👨‍👩‍👧 Informations du ménage
      </Text>

      <Field
        icon="person-outline"
        label="Chef de ménage"
      />

      <Field
        icon="call-outline"
        label="Téléphone"
      />

      <Field
        icon="people-outline"
        label="Nombre total de personnes"
      />

      <Field
        icon="man-outline"
        label="Nombre d'hommes"
      />

      <Field
        icon="woman-outline"
        label="Nombre de femmes"
      />

      <Field
        icon="happy-outline"
        label="Nombre d'enfants"
      />
    </View>
  );
}

/* ========================= */
/* STEP 3 */
/* ========================= */

function Step3() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        🏠 Conditions de vie
      </Text>

      <Field
        icon="home-outline"
        label="Type d’habitation"
      />

      <Field
        icon="grid-outline"
        label="Nombre de pièces"
      />

      <Field
        icon="water-outline"
        label="Source d’eau"
      />

      <Field
        icon="flash-outline"
        label="Accès à l’électricité"
      />

      <Field
        icon="trash-outline"
        label="Type de toilettes"
      />
    </View>
  );
}

/* ========================= */
/* STEP 4 */
/* ========================= */

function Step4() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        📊 Situation économique
      </Text>

      <Field
        icon="briefcase-outline"
        label="Profession"
      />

      <Field
        icon="cash-outline"
        label="Revenu estimé"
      />

      <Field
        icon="create-outline"
        label="Observations"
        multiline
      />
    </View>
  );
}

/* ========================= */
/* SUCCESS STEP */
/* ========================= */

function SuccessStep() {
  return (
    <View style={styles.successContainer}>
      <Image
        source={require("@/assets/images/Finish.png")}
        style={styles.successImage}
        resizeMode="contain"
      />

      <Text style={styles.successTitle}>
        Bravo 🎉
      </Text>

      <Text style={styles.successText}>
        Le formulaire de recensement a été
        soumis avec succès.
      </Text>

      <View style={styles.successCard}>
        <Ionicons
          name="checkmark-circle"
          size={26}
          color={PRIMARY}
        />

        <Text style={styles.successCardText}>
          Données enregistrées correctement
        </Text>
      </View>
    </View>
  );
}

/* ========================= */
/* FIELD */
/* ========================= */

function Field({
  icon,
  label,
  multiline = false,
}: any) {
  return (
    <View style={styles.field}>
      <Ionicons
        name={icon}
        size={20}
        color={PRIMARY}
      />

      <TextInput
        placeholder={label}
        placeholderTextColor="#94a3b8"
        style={[
          styles.input,
          multiline && styles.multilineInput,
        ]}
        multiline={multiline}
      />
    </View>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 140,
  },

  topSection: {
    marginTop: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
  },

  description: {
    marginTop: 5,
    color: "#64748b",
    lineHeight: 22,
  },

  progressBar: {
    height: 7,
    backgroundColor: "#dbeafe",
    borderRadius: 20,
    marginTop: 18,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: PRIMARY,
    borderRadius: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 4,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 18,
    color: "#0f172a",
  },

  field: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#f8fafc",

    borderWidth: 1,
    borderColor: "#e2e8f0",

    borderRadius: 16,

    paddingHorizontal: 15,
    paddingVertical: 14,

    marginBottom: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#0f172a",
  },

  multilineInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },

  nav: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },

  btnPrimary: {
    flex: 1,
    backgroundColor: PRIMARY,

    borderRadius: 16,
    paddingVertical: 15,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    gap: 8,
  },

  btnSecondary: {
    flex: 1,
    backgroundColor: "#e2e8f0",

    borderRadius: 16,
    paddingVertical: 15,

    marginRight: 10,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    gap: 8,
  },

  btnTextPrimary: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  btnText: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 15,
  },

  successContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },

  successImage: {
    width: 260,
    height: 260,
    marginBottom: 20,
  },

  successTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
  },

  successText: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 20,
  },

  successCard: {
    marginTop: 25,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#ffffff",

    paddingVertical: 16,
    paddingHorizontal: 20,

    borderRadius: 18,

    gap: 10,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 3,
  },

  successCardText: {
    color: "#0f172a",
    fontWeight: "600",
  },
});