// import { Ionicons } from "@expo/vector-icons";
// import { useState } from "react";

// import {
//     Image,
//     SafeAreaView,
//     ScrollView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";

// import Header from "@/components/Header/Header";
// import BottomNavbar from "@/components/Navbar/NavBar";

// const PRIMARY = "#1D8C9C";

// export default function RecensementScreen() {
//   const [step, setStep] = useState(1);

//   const next = () => setStep((s) => Math.min(s + 1, 5));
//   const back = () => setStep((s) => Math.max(s - 1, 1));

//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       {/* HEADER */}
//       <Header
//         title="Recensement"
//         subtitle={`Étape ${step}/5 • Collecte terrain`}
//       />

//       {/* CONTENU */}
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContainer}
//       >
//         {/* TITRE */}
//         <View style={styles.topSection}>
//           <Text style={styles.title}>
//             Formulaire de recensement
//           </Text>

//           <Text style={styles.description}>
//             Collecte des données démographiques
//             et sociales du ménage.
//           </Text>

//           {/* PROGRESS BAR */}
//           <View style={styles.progressBar}>
//             <View
//               style={[
//                 styles.progress,
//                 { width: `${step * 20}%` },
//               ]}
//             />
//           </View>
//         </View>

//         {/* STEPS */}
//         {step === 1 && <Step1 />}
//         {step === 2 && <Step2 />}
//         {step === 3 && <Step3 />}
//         {step === 4 && <Step4 />}
//         {step === 5 && <SuccessStep />}

//         {/* BUTTONS */}
//         {step < 5 && (
//           <View style={styles.nav}>
//             {step > 1 && (
//               <TouchableOpacity
//                 style={styles.btnSecondary}
//                 onPress={back}
//               >
//                 <Ionicons
//                   name="arrow-back"
//                   size={18}
//                   color="#0f172a"
//                 />

//                 <Text style={styles.btnText}>
//                   Retour
//                 </Text>
//               </TouchableOpacity>
//             )}

//             <TouchableOpacity
//               style={styles.btnPrimary}
//               onPress={next}
//             >
//               <Text style={styles.btnTextPrimary}>
//                 {step === 4 ? "Valider" : "Suivant"}
//               </Text>

//               <Ionicons
//                 name="arrow-forward"
//                 size={18}
//                 color="#fff"
//               />
//             </TouchableOpacity>
//           </View>
//         )}
//       </ScrollView>

//       {/* NAVBAR */}
//       <BottomNavbar />
//     </SafeAreaView>
//   );
// }

// /* ========================= */
// /* STEP 1 */
// /* ========================= */

// function Step1() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.sectionTitle}>
//         📍 Localisation
//       </Text>

//       <Field icon="business-outline" label="Région" />
//       <Field icon="map-outline" label="Ville" />
//       <Field icon="location-outline" label="Quartier" />
//       <Field icon="pin-outline" label="Zone de dénombrement" />
//     </View>
//   );
// }

// /* ========================= */
// /* STEP 2 */
// /* ========================= */

// function Step2() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.sectionTitle}>
//         👨‍👩‍👧 Informations du ménage
//       </Text>

//       <Field
//         icon="person-outline"
//         label="Chef de ménage"
//       />

//       <Field
//         icon="call-outline"
//         label="Téléphone"
//       />

//       <Field
//         icon="people-outline"
//         label="Nombre total de personnes"
//       />

//       <Field
//         icon="man-outline"
//         label="Nombre d'hommes"
//       />

//       <Field
//         icon="woman-outline"
//         label="Nombre de femmes"
//       />

//       <Field
//         icon="happy-outline"
//         label="Nombre d'enfants"
//       />
//     </View>
//   );
// }

// /* ========================= */
// /* STEP 3 */
// /* ========================= */

// function Step3() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.sectionTitle}>
//         🏠 Conditions de vie
//       </Text>

//       <Field
//         icon="home-outline"
//         label="Type d’habitation"
//       />

//       <Field
//         icon="grid-outline"
//         label="Nombre de pièces"
//       />

//       <Field
//         icon="water-outline"
//         label="Source d’eau"
//       />

//       <Field
//         icon="flash-outline"
//         label="Accès à l’électricité"
//       />

//       <Field
//         icon="trash-outline"
//         label="Type de toilettes"
//       />
//     </View>
//   );
// }

// /* ========================= */
// /* STEP 4 */
// /* ========================= */

// function Step4() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.sectionTitle}>
//         📊 Situation économique
//       </Text>

//       <Field
//         icon="briefcase-outline"
//         label="Profession"
//       />

//       <Field
//         icon="cash-outline"
//         label="Revenu estimé"
//       />

//       <Field
//         icon="create-outline"
//         label="Observations"
//         multiline
//       />
//     </View>
//   );
// }

// /* ========================= */
// /* SUCCESS STEP */
// /* ========================= */

// function SuccessStep() {
//   return (
//     <View style={styles.successContainer}>
//       <Image
//         source={require("@/assets/images/Finish.png")}
//         style={styles.successImage}
//         resizeMode="contain"
//       />

//       <Text style={styles.successTitle}>
//         Bravo 🎉
//       </Text>

//       <Text style={styles.successText}>
//         Le formulaire de recensement a été
//         soumis avec succès.
//       </Text>

//       <View style={styles.successCard}>
//         <Ionicons
//           name="checkmark-circle"
//           size={26}
//           color={PRIMARY}
//         />

//         <Text style={styles.successCardText}>
//           Données enregistrées correctement
//         </Text>
//       </View>
//     </View>
//   );
// }

// /* ========================= */
// /* FIELD */
// /* ========================= */

// function Field({
//   icon,
//   label,
//   multiline = false,
// }: any) {
//   return (
//     <View style={styles.field}>
//       <Ionicons
//         name={icon}
//         size={20}
//         color={PRIMARY}
//       />

//       <TextInput
//         placeholder={label}
//         placeholderTextColor="#94a3b8"
//         style={[
//           styles.input,
//           multiline && styles.multilineInput,
//         ]}
//         multiline={multiline}
//       />
//     </View>
//   );
// }

// /* ========================= */
// /* STYLES */
// /* ========================= */

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: "#f1f5f9",
//   },

//   scrollContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 140,
//   },

//   topSection: {
//     marginTop: 10,
//     marginBottom: 20,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#0f172a",
//   },

//   description: {
//     marginTop: 5,
//     color: "#64748b",
//     lineHeight: 22,
//   },

//   progressBar: {
//     height: 7,
//     backgroundColor: "#dbeafe",
//     borderRadius: 20,
//     marginTop: 18,
//     overflow: "hidden",
//   },

//   progress: {
//     height: "100%",
//     backgroundColor: PRIMARY,
//     borderRadius: 20,
//   },

//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 24,
//     padding: 20,
//     marginBottom: 18,

//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 10,

//     elevation: 4,
//   },

//   sectionTitle: {
//     fontSize: 17,
//     fontWeight: "700",
//     marginBottom: 18,
//     color: "#0f172a",
//   },

//   field: {
//     flexDirection: "row",
//     alignItems: "center",

//     backgroundColor: "#f8fafc",

//     borderWidth: 1,
//     borderColor: "#e2e8f0",

//     borderRadius: 16,

//     paddingHorizontal: 15,
//     paddingVertical: 14,

//     marginBottom: 14,
//   },

//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 15,
//     color: "#0f172a",
//   },

//   multilineInput: {
//     minHeight: 80,
//     textAlignVertical: "top",
//   },

//   nav: {
//     flexDirection: "row",
//     marginTop: 10,
//     marginBottom: 20,
//   },

//   btnPrimary: {
//     flex: 1,
//     backgroundColor: PRIMARY,

//     borderRadius: 16,
//     paddingVertical: 15,

//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",

//     gap: 8,
//   },

//   btnSecondary: {
//     flex: 1,
//     backgroundColor: "#e2e8f0",

//     borderRadius: 16,
//     paddingVertical: 15,

//     marginRight: 10,

//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",

//     gap: 8,
//   },

//   btnTextPrimary: {
//     color: "#fff",
//     fontWeight: "700",
//     fontSize: 15,
//   },

//   btnText: {
//     color: "#0f172a",
//     fontWeight: "700",
//     fontSize: 15,
//   },

//   successContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 40,
//   },

//   successImage: {
//     width: 260,
//     height: 260,
//     marginBottom: 20,
//   },

//   successTitle: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#0f172a",
//     marginBottom: 10,
//   },

//   successText: {
//     textAlign: "center",
//     color: "#64748b",
//     fontSize: 16,
//     lineHeight: 24,
//     paddingHorizontal: 20,
//   },

//   successCard: {
//     marginTop: 25,

//     flexDirection: "row",
//     alignItems: "center",

//     backgroundColor: "#ffffff",

//     paddingVertical: 16,
//     paddingHorizontal: 20,

//     borderRadius: 18,

//     gap: 10,

//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 8,

//     elevation: 3,
//   },

//   successCardText: {
//     color: "#0f172a",
//     fontWeight: "600",
//   },
// });

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import {
  Alert,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Header from "@/components/Header/Header";
import BottomNavbar from "@/components/Navbar/NavBar";

const PRIMARY = "#1D8C9C";

interface FormDataType {
  region: string;
  ville: string;
  quartier: string;
  zone: string;

  chefMenage: string;
  telephone: string;
  nbPersonnes: string;
  nbHommes: string;
  nbFemmes: string;
  nbEnfants: string;

  typeHabitation: string;
  nbPieces: string;
  sourceEau: string;
  accesElectricite: string;
  typeToilettes: string;

  profession: string;
  revenu: string;
  observations: string;
}

interface ErrorType {
  [key: string]: string;
}

interface StepProps {
  formData: FormDataType;
  updateFormData: (field: keyof FormDataType, value: string) => void;
  errors: ErrorType;
}

interface FieldWithValidationProps {
  icon: keyof typeof Ionicons.glyphMap;
  label?: string;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'phone-pad';
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  multiline?: boolean;
}


interface PickerFieldProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  placeholder?: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
  error?: string;
}

// Données du Cameroun
const CAMEROUN_DATA = {
  regions: [
    { id: '1', name: 'Adamaoua' },
    { id: '2', name: 'Centre' },
    { id: '3', name: 'Est' },
    { id: '4', name: 'Extrême-Nord' },
    { id: '5', name: 'Littoral' },
    { id: '6', name: 'Nord' },
    { id: '7', name: 'Nord-Ouest' },
    { id: '8', name: 'Ouest' },
    { id: '9', name: 'Sud' },
    { id: '10', name: 'Sud-Ouest' }
  ],
  villes: {
    'Adamaoua': ['Ngaoundéré', 'Tibati', 'Bélel', 'Meiganga', 'Djohong'],
    'Centre': ['Yaoundé', 'Mbalmayo', 'Monatélé', 'Obala', 'Saa', 'Nanga-Eboko'],
    'Est': ['Bertoua', 'Batouri', 'Abong-Mbang', 'Yokadouma', 'Lomié'],
    'Extrême-Nord': ['Maroua', 'Mokolo', 'Kousseri', 'Yagoua', 'Mora', 'Kaélé'],
    'Littoral': ["Douala", "Edéa", "Loum", "Nkongsamba", "Manjo", "Yabassi"],
    'Nord': ['Garoua', 'Guider', 'Lagdo', 'Poli', 'Rey Bouba'],
    'Nord-Ouest': ['Bamenda', 'Kumbo', 'Mbengwi', 'Ndop', 'Wum'],
    'Ouest': ['Bafoussam', 'Foumban', 'Dschang', 'Mbouda', 'Bangangté'],
    'Sud': ['Ebolowa', 'Ambam', 'Mvang', 'Kribi', 'Campo'],
    'Sud-Ouest': ['Buéa', 'Limbe', 'Kumba', 'Tiko', 'Mamfé']
  },
  quartiers: {
    'Douala': ['Bonabéri', 'Bonapriso', 'Bonamoussadi', 'Akwa', 'Deïdo', 'New-Bell', 'Ndogbong', 'Makepe', 'Logbessou', 'Bépanda'],
    'Yaoundé': ['Mvog-Mbi', 'Mokolo', 'Bastos', 'Messa', 'Ngoa-Ekélé', 'Etoudi', 'Mfoundi', 'Mvan', 'Oyom-Abang', 'Nkolndongo'],
    'Garoua': ['Djamaré', 'Poumpoumré', 'Manaré', 'Goré'],
    'Maroua': ['Domayo', 'Palar', 'Boulaï', 'Djarengol'],
    'Bafoussam': ['Djemou', 'Tougang', 'Bali', 'Famleng'],
    'Bamenda': ['Nkwen', 'Mankon', 'Ntarinkon', 'Baillem'],
    'Buéa': ['Molyko', 'Bomaka', 'Mile 16', 'Malingo'],
    'Ebolowa': ['Nkoleton', 'Ntem', 'Assouk', 'Mvae'],
    'Bertoua': ['Nkolbikon', 'Belinga', 'Gbagtaga', 'Maka']
  }
};

export default function RecensementScreen() {
  const [step, setStep] = useState(1);
  // Données du formulaire
  const [formData, setFormData] = useState<FormDataType>({
    // Step 1
    region: '',
    ville: '',
    quartier: '',
    zone: '',
    // Step 2
    chefMenage: '',
    telephone: '',
    nbPersonnes: '',
    nbHommes: '',
    nbFemmes: '',
    nbEnfants: '',
    // Step 3
    typeHabitation: '',
    nbPieces: '',
    sourceEau: '',
    accesElectricite: '',
    typeToilettes: '',
    // Step 4
    profession: '',
    revenu: '',
    observations: ''
  });

  // Validation par étape
  const [stepErrors, setStepErrors] = useState<ErrorType>({});

  const updateFormData = (
  field: keyof FormDataType,
  value: string
) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user types
    if (stepErrors[field]) {
      setStepErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep1 = () => {
    const errors = {
      // Step 1
    region: '',
    ville: '',
    quartier: '',
    zone: '',
    // Step 2
    chefMenage: '',
    telephone: '',
    nbPersonnes: '',
    nbHommes: '',
    nbFemmes: '',
    nbEnfants: '',
    // Step 3
    typeHabitation: '',
    nbPieces: '',
    sourceEau: '',
    accesElectricite: '',
    typeToilettes: '',
    // Step 4
    profession: '',
    revenu: '',
    observations: ''
    };
    if (!formData.region) errors.region = 'La région est requise';
    if (!formData.ville) errors.ville = 'La ville est requise';
    if (!formData.quartier) errors.quartier = 'Le quartier est requis';
    if (!formData.zone) errors.zone = 'La zone de dénombrement est requise';
    else if (formData.zone.length < 2) errors.zone = 'La zone doit contenir au moins 2 caractères';
    
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {
      // Step 1
    region: '',
    ville: '',
    quartier: '',
    zone: '',
    // Step 2
    chefMenage: '',
    telephone: '',
    nbPersonnes: '',
    nbHommes: '',
    nbFemmes: '',
    nbEnfants: '',
    // Step 3
    typeHabitation: '',
    nbPieces: '',
    sourceEau: '',
    accesElectricite: '',
    typeToilettes: '',
    // Step 4
    profession: '',
    revenu: '',
    observations: ''
    };
    if (!formData.chefMenage) errors.chefMenage = 'Le nom du chef de ménage est requis';
    if (!formData.telephone) errors.telephone = 'Le numéro de téléphone est requis';
    else if (!/^[6-9][0-9]{8}$/.test(formData.telephone)) errors.telephone = 'Numéro invalide (9 chiffres, commence par 6,7,8,9)';
    if (!formData.nbPersonnes) errors.nbPersonnes = 'Le nombre total est requis';
    else if (parseInt(formData.nbPersonnes) <= 0) errors.nbPersonnes = 'Doit être supérieur à 0';
    if (!formData.nbHommes) errors.nbHommes = 'Le nombre d\'hommes est requis';
    else if (parseInt(formData.nbHommes) < 0) errors.nbHommes = 'Doit être positif';
    if (!formData.nbFemmes) errors.nbFemmes = 'Le nombre de femmes est requis';
    else if (parseInt(formData.nbFemmes) < 0) errors.nbFemmes = 'Doit être positif';
    if (!formData.nbEnfants) errors.nbEnfants = 'Le nombre d\'enfants est requis';
    else if (parseInt(formData.nbEnfants) < 0) errors.nbEnfants = 'Doit être positif';
    
    // Vérifier cohérence
    const total = parseInt(formData.nbPersonnes);
    const hommes = parseInt(formData.nbHommes);
    const femmes = parseInt(formData.nbFemmes);
    const enfants = parseInt(formData.nbEnfants);
    if (total !== hommes + femmes + enfants) {
      errors.nbPersonnes = 'Le total ne correspond pas à la somme';
    }
    
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep3 = () => {
    const errors = {
      // Step 1
    region: '',
    ville: '',
    quartier: '',
    zone: '',
    // Step 2
    chefMenage: '',
    telephone: '',
    nbPersonnes: '',
    nbHommes: '',
    nbFemmes: '',
    nbEnfants: '',
    // Step 3
    typeHabitation: '',
    nbPieces: '',
    sourceEau: '',
    accesElectricite: '',
    typeToilettes: '',
    // Step 4
    profession: '',
    revenu: '',
    observations: ''
    };
    if (!formData.typeHabitation) errors.typeHabitation = 'Le type d\'habitation est requis';
    if (!formData.nbPieces) errors.nbPieces = 'Le nombre de pièces est requis';
    else if (parseInt(formData.nbPieces) <= 0) errors.nbPieces = 'Doit être supérieur à 0';
    if (!formData.sourceEau) errors.sourceEau = 'La source d\'eau est requise';
    if (!formData.accesElectricite) errors.accesElectricite = 'L\'accès à l\'électricité est requis';
    if (!formData.typeToilettes) errors.typeToilettes = 'Le type de toilettes est requis';
    
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep4 = () => {
    const errors = {
      // Step 1
    region: '',
    ville: '',
    quartier: '',
    zone: '',
    // Step 2
    chefMenage: '',
    telephone: '',
    nbPersonnes: '',
    nbHommes: '',
    nbFemmes: '',
    nbEnfants: '',
    // Step 3
    typeHabitation: '',
    nbPieces: '',
    sourceEau: '',
    accesElectricite: '',
    typeToilettes: '',
    // Step 4
    profession: '',
    revenu: '',
    observations: ''
    };
    if (!formData.profession) errors.profession = 'La profession est requise';
    if (!formData.revenu) errors.revenu = 'Le revenu estimé est requis';
    
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const next = () => {
    let isValid = false;
    switch(step) {
      case 1: isValid = validateStep1(); break;
      case 2: isValid = validateStep2(); break;
      case 3: isValid = validateStep3(); break;
      case 4: isValid = validateStep4(); break;
    }
    
    if (isValid) {
      if (step === 4) {
        Alert.alert(
          'Succès',
          'Formulaire de recensement soumis avec succès !',
          [{ text: 'OK', onPress: () => setStep(5) }]
        );
      } else {
        setStep((s) => Math.min(s + 1, 5));
      }
    } else {
      Alert.alert('Erreur', 'Veuillez corriger les erreurs dans le formulaire');
    }
  };
  
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
        {step === 1 && <Step1 formData={formData} updateFormData={updateFormData} errors={stepErrors} />}
        {step === 2 && <Step2 formData={formData} updateFormData={updateFormData} errors={stepErrors} />}
        {step === 3 && <Step3 formData={formData} updateFormData={updateFormData} errors={stepErrors} />}
        {step === 4 && <Step4 formData={formData} updateFormData={updateFormData} errors={stepErrors} />}
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
/* STEP 1 - LOCALISATION */
/* ========================= */

function Step1({ formData, updateFormData, errors }: StepProps) {
  const [villeOptions, setVilleOptions] = useState<string[]>([]);
  const [quartierOptions, setQuartierOptions] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
 const [currentField, setCurrentField] = useState<keyof FormDataType | ''>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [useFreeQuartier, setUseFreeQuartier] = useState(false);
  const [useFreeZone, setUseFreeZone] = useState(false);

  useEffect(() => {
    if (formData.region) {
      const villes = CAMEROUN_DATA.villes[formData.region as keyof typeof CAMEROUN_DATA.villes
] || [];
      setVilleOptions(villes);
      if (!villes.includes(formData.ville)) {
        updateFormData('ville', '');
      }
    }
  }, [formData.region]);

  useEffect(() => {
    if (formData.ville && CAMEROUN_DATA.quartiers[formData.ville as keyof typeof CAMEROUN_DATA.quartiers]) {
      setQuartierOptions(CAMEROUN_DATA.quartiers[formData.ville as keyof typeof CAMEROUN_DATA.quartiers]);
    } else {
      setQuartierOptions([]);
    }
  }, [formData.ville]);

  const openSelector = (
  field: keyof FormDataType,
  options: string[]
) => {
    setCurrentField(field);
    setModalVisible(true);
  };

  const selectOption = (value: string) => {
    updateFormData(currentField, value);
    setModalVisible(false);
    setSearchTerm('');
  };

  const regionOptions = CAMEROUN_DATA.regions.map(r => r.name);

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        📍 Localisation
      </Text>

      <TouchableOpacity 
        style={[styles.field, errors.region && styles.fieldError]}
        onPress={() => openSelector('region', regionOptions)}
      >
        <Ionicons name="business-outline" size={20} color={PRIMARY} />
        <Text style={[styles.fieldText, !formData.region && styles.placeholderText]}>
          {formData.region || "Région *"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#94a3b8" />
      </TouchableOpacity>
      {errors.region && <Text style={styles.errorText}>{errors.region}</Text>}

      <TouchableOpacity 
        style={[styles.field, errors.ville && styles.fieldError]}
        onPress={() => formData.region && openSelector('ville', villeOptions)}
      >
        <Ionicons name="map-outline" size={20} color={PRIMARY} />
        <Text style={[styles.fieldText, !formData.ville && styles.placeholderText]}>
          {formData.ville || (formData.region ? "Ville *" : "Sélectionnez d'abord une région")}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#94a3b8" />
      </TouchableOpacity>
      {errors.ville && <Text style={styles.errorText}>{errors.ville}</Text>}

      {/* Quartier */}
      <View>
        {!useFreeQuartier && quartierOptions.length > 0 ? (
          <TouchableOpacity 
            style={[styles.field, errors.quartier && styles.fieldError]}
            onPress={() => openSelector('quartier', quartierOptions)}
          >
            <Ionicons name="location-outline" size={20} color={PRIMARY} />
            <Text style={[styles.fieldText, !formData.quartier && styles.placeholderText]}>
              {formData.quartier || "Quartier *"}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#94a3b8" />
          </TouchableOpacity>
        ) : (
          <View style={[styles.field, errors.quartier && styles.fieldError]}>
            <Ionicons name="location-outline" size={20} color={PRIMARY} />
            <TextInput
              style={styles.input}
              placeholder="Quartier *"
              placeholderTextColor="#94a3b8"
              value={formData.quartier}
              onChangeText={(text) => updateFormData('quartier', text)}
            />
          </View>
        )}
        
        {quartierOptions.length > 0 && (
          <TouchableOpacity 
            style={styles.toggleButton}
            onPress={() => {
              setUseFreeQuartier(!useFreeQuartier);
              updateFormData('quartier', '');
            }}
          >
            <Text style={styles.toggleText}>
              {useFreeQuartier ? "📋 Choisir dans la liste" : "✏️ Saisir librement"}
            </Text>
          </TouchableOpacity>
        )}
        {errors.quartier && <Text style={styles.errorText}>{errors.quartier}</Text>}
      </View>

      {/* Zone */}
      <View>
        {!useFreeZone ? (
          <TouchableOpacity 
            style={[styles.field, errors.zone && styles.fieldError]}
            onPress={() => openSelector('zone', ['Zone A - Centre', 'Zone B - Nord', 'Zone C - Sud', 'Zone D - Est', 'Zone E - Ouest'])}
          >
            <Ionicons name="pin-outline" size={20} color={PRIMARY} />
            <Text style={[styles.fieldText, !formData.zone && styles.placeholderText]}>
              {formData.zone || "Zone de dénombrement *"}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#94a3b8" />
          </TouchableOpacity>
        ) : (
          <View style={[styles.field, errors.zone && styles.fieldError]}>
            <Ionicons name="pin-outline" size={20} color={PRIMARY} />
            <TextInput
              style={styles.input}
              placeholder="Zone de dénombrement *"
              placeholderTextColor="#94a3b8"
              value={formData.zone}
              onChangeText={(text) => updateFormData('zone', text)}
            />
          </View>
        )}
        
        <TouchableOpacity 
          style={styles.toggleButton}
          onPress={() => {
            setUseFreeZone(!useFreeZone);
            updateFormData('zone', '');
          }}
        >
          <Text style={styles.toggleText}>
            {useFreeZone ? "📋 Choisir dans la liste" : "✏️ Saisir librement"}
          </Text>
        </TouchableOpacity>
        {errors.zone && <Text style={styles.errorText}>{errors.zone}</Text>}
      </View>

      {/* Modal Selector */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Sélectionnez {currentField === 'region' ? 'la région' : currentField === 'ville' ? 'la ville' : 'l\'option'}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#0f172a" />
              </TouchableOpacity>
            </View>
            
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher..."
              placeholderTextColor="#94a3b8"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            
            <FlatList
              data={currentField === 'region' ? regionOptions.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase())) :
                     currentField === 'ville' ? villeOptions.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase())) :
                     currentField === 'quartier' ? quartierOptions.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase())) :
                     ['Zone A - Centre', 'Zone B - Nord', 'Zone C - Sud', 'Zone D - Est', 'Zone E - Ouest'].filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()))}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => selectOption(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={() => (
                <Text style={styles.noResult}>Aucun résultat trouvé</Text>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

/* ========================= */
/* STEP 2 - MÉNAGE */
/* ========================= */

function Step2({ formData, updateFormData, errors }: StepProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        👨‍👩‍👧 Informations du ménage
      </Text>

      <FieldWithValidation
        icon="person-outline"
        label="Chef de ménage"
        placeholder="Nom complet du chef de ménage *"
        value={formData.chefMenage}
        onChangeText={(text) => updateFormData('chefMenage', text)}
        error={errors.chefMenage}
      />

      <FieldWithValidation
        icon="call-outline"
        label="Téléphone"
        placeholder="Numéro de téléphone *"
        keyboardType="phone-pad"
        value={formData.telephone}
        onChangeText={(text) => updateFormData('telephone', text)}
        error={errors.telephone}
      />

      <FieldWithValidation
        icon="people-outline"
        label="Nombre total de personnes"
        placeholder="Nombre total *"
        keyboardType="numeric"
        value={formData.nbPersonnes}
        onChangeText={(text) => updateFormData('nbPersonnes', text)}
        error={errors.nbPersonnes}
      />

      <FieldWithValidation
        icon="man-outline"
        label="Nombre d'hommes"
        placeholder="Nombre d'hommes *"
        keyboardType="numeric"
        value={formData.nbHommes}
        onChangeText={(text) => updateFormData('nbHommes', text)}
        error={errors.nbHommes}
      />

      <FieldWithValidation
        icon="woman-outline"
        label="Nombre de femmes"
        placeholder="Nombre de femmes *"
        keyboardType="numeric"
        value={formData.nbFemmes}
        onChangeText={(text) => updateFormData('nbFemmes', text)}
        error={errors.nbFemmes}
      />

      <FieldWithValidation
        icon="happy-outline"
        label="Nombre d'enfants"
        placeholder="Nombre d'enfants *"
        keyboardType="numeric"
        value={formData.nbEnfants}
        onChangeText={(text) => updateFormData('nbEnfants', text)}
        error={errors.nbEnfants}
      />
    </View>
  );
}

/* ========================= */
/* STEP 3 - CONDITIONS DE VIE */
/* ========================= */

function Step3({ formData, updateFormData, errors }: StepProps) {
  const options = {
    typeHabitation: ['Villa', 'Maison individuelle', 'Appartement', 'Studio', 'Case traditionnelle', 'Autre'],
    sourceEau: ['Eau courante', 'Puits', 'Forage', 'Source', 'Rivière', 'Camion citerne', 'Bouteille'],
    accesElectricite: ['Oui', 'Non', 'Partiel (générateur)', 'Solaire'],
    typeToilettes: ['Moderne (chasse d\'eau)', 'Latrines améliorées', 'Latrines traditionnelles', 'Toilettes publiques', 'Nature']
  };

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        🏠 Conditions de vie
      </Text>

      <PickerField
        icon="home-outline"
        label="Type d'habitation"
        placeholder="Type d'habitation *"
        value={formData.typeHabitation}
        options={options.typeHabitation}
        onSelect={(value) => updateFormData('typeHabitation', value)}
        error={errors.typeHabitation}
      />

      <FieldWithValidation
        icon="grid-outline"
        label="Nombre de pièces"
        placeholder="Nombre de pièces *"
        keyboardType="numeric"
        value={formData.nbPieces}
        onChangeText={(text) => updateFormData('nbPieces', text)}
        error={errors.nbPieces}
      />

      <PickerField
        icon="water-outline"
        label="Source d'eau"
        placeholder="Source d'eau *"
        value={formData.sourceEau}
        options={options.sourceEau}
        onSelect={(value) => updateFormData('sourceEau', value)}
        error={errors.sourceEau}
      />

      <PickerField
        icon="flash-outline"
        label="Accès à l'électricité"
        placeholder="Accès à l'électricité *"
        value={formData.accesElectricite}
        options={options.accesElectricite}
        onSelect={(value) => updateFormData('accesElectricite', value)}
        error={errors.accesElectricite}
      />

      <PickerField
        icon="trash-outline"
        label="Type de toilettes"
        placeholder="Type de toilettes *"
        value={formData.typeToilettes}
        options={options.typeToilettes}
        onSelect={(value) => updateFormData('typeToilettes', value)}
        error={errors.typeToilettes}
      />
    </View>
  );
}

/* ========================= */
/* STEP 4 - ÉCONOMIE */
/* ========================= */

function Step4({ formData, updateFormData, errors }: StepProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>
        📊 Situation économique
      </Text>

      <FieldWithValidation
        icon="briefcase-outline"
        label="Profession"
        placeholder="Profession *"
        value={formData.profession}
        onChangeText={(text) => updateFormData('profession', text)}
        error={errors.profession}
      />

      <FieldWithValidation
        icon="cash-outline"
        label="Revenu estimé"
        placeholder="Revenu estimé (FCFA) *"
        keyboardType="numeric"
        value={formData.revenu}
        onChangeText={(text) => updateFormData('revenu', text)}
        error={errors.revenu}
      />

      <View style={styles.field}>
        <Ionicons name="create-outline" size={20} color={PRIMARY} />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Observations (optionnel)"
          placeholderTextColor="#94a3b8"
          multiline={true}
          numberOfLines={4}
          value={formData.observations}
          onChangeText={(text) => updateFormData('observations', text)}
        />
      </View>
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
/* FIELD COMPONENTS */
/* ========================= */

function FieldWithValidation({
  icon,
  label,
  placeholder,
  keyboardType,
  value,
  onChangeText,
  error,
  multiline,
}: FieldWithValidationProps) {
  return (
    <View>
      <View style={[styles.field, error && styles.fieldError]}>
        <Ionicons name={icon} size={20} color={PRIMARY} />
        <TextInput
          style={[styles.input, multiline && styles.multilineInput]}
          placeholder={placeholder || label}
          placeholderTextColor="#94a3b8"
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

function PickerField({
  icon,
  label,
  placeholder,
  value,
  options,
  onSelect,
  error,
}: PickerFieldProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View>
      <TouchableOpacity 
        style={[styles.field, error && styles.fieldError]}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name={icon} size={20} color={PRIMARY} />
        <Text style={[styles.fieldText, !value && styles.placeholderText]}>
          {value || placeholder || label}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#94a3b8" />
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Sélectionnez {label.toLowerCase()}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#0f172a" />
              </TouchableOpacity>
            </View>
            
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher..."
              placeholderTextColor="#94a3b8"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            
            <FlatList
              data={filteredOptions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    onSelect(item);
                    setModalVisible(false);
                    setSearchTerm('');
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={() => (
                <Text style={styles.noResult}>Aucun résultat trouvé</Text>
              )}
            />
          </View>
        </View>
      </Modal>
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
    marginBottom: 5,
  },

  fieldError: {
    borderColor: "#ef4444",
  },

  fieldText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#0f172a",
  },

  placeholderText: {
    color: "#94a3b8",
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

  errorText: {
    color: "#ef4444",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 10,
    marginLeft: 12,
  },

  toggleButton: {
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },

  toggleText: {
    color: PRIMARY,
    fontSize: 12,
    textDecorationLine: 'underline',
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

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  searchInput: {
    margin: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: '#f8fafc',
  },

  modalItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },

  modalItemText: {
    fontSize: 16,
    color: '#0f172a',
  },

  noResult: {
    textAlign: 'center',
    padding: 20,
    color: '#94a3b8',
  },
});