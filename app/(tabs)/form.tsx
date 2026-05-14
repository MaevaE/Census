// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function FormScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Formulaire</Text>
//       <Text style={styles.subtitle}>Page en construction</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF8F8',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1D8C9C',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginTop: 10,
//   },
// });

// import { Feather } from '@expo/vector-icons';
// import React, { useState } from 'react';
// import {
//     Alert,
//     ScrollView,
//     StyleSheet,
//     Switch,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from 'react-native';

// export default function FormScreen() {
//   const [fullName, setFullName] = useState('');
//   const [age, setAge] = useState('');
//   const [profession, setProfession] = useState('');
//   const [acceptTerms, setAcceptTerms] = useState(false);

//   const handleSubmit = () => {
//     if (!fullName || !age || !profession) {
//       Alert.alert('Erreur', 'Veuillez remplir tous les champs');
//       return;
//     }
//     if (!acceptTerms) {
//       Alert.alert('Erreur', 'Veuillez accepter les conditions');
//       return;
//     }
//     Alert.alert('Succès', 'Formulaire soumis avec succès');
//   };

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Census Form</Text>
//         <Text style={styles.subtitle}>Veuillez remplir ce formulaire</Text>
//       </View>

//       <View style={styles.form}>
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Full Name</Text>
//           <View style={styles.inputContainer}>
//             <Feather name="user" size={20} color="#1D8C9C" />
//             <TextInput
//               style={styles.input}
//               placeholder="Votre nom complet"
//               value={fullName}
//               onChangeText={setFullName}
//             />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Age</Text>
//           <View style={styles.inputContainer}>
//             <Feather name="calendar" size={20} color="#1D8C9C" />
//             <TextInput
//               style={styles.input}
//               placeholder="Votre âge"
//               keyboardType="numeric"
//               value={age}
//               onChangeText={setAge}
//             />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Profession</Text>
//           <View style={styles.inputContainer}>
//             <Feather name="briefcase" size={20} color="#1D8C9C" />
//             <TextInput
//               style={styles.input}
//               placeholder="Votre profession"
//               value={profession}
//               onChangeText={setProfession}
//             />
//           </View>
//         </View>

//         <View style={styles.checkboxContainer}>
//           <Switch
//             value={acceptTerms}
//             onValueChange={setAcceptTerms}
//             trackColor={{ false: '#ccc', true: '#1D8C9C' }}
//             thumbColor="#FFFFFF"
//           />
//           <Text style={styles.checkboxLabel}>J'accepte les conditions</Text>
//         </View>

//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitButtonText}>Soumettre</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF8F8',
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     paddingBottom: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1D8C9C',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#999',
//     marginTop: 5,
//   },
//   form: {
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 8,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#7CD4E4',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 15,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 12,
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//     marginTop: 10,
//   },
//   checkboxLabel: {
//     fontSize: 14,
//     color: '#555',
//     marginLeft: 10,
//   },
//   submitButton: {
//     backgroundColor: '#1D8C9C',
//     paddingVertical: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   submitButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// export default function FormScreen() {
//   const router = useRouter();
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [errors, setErrors] = useState<{ firstname?: string; lastname?: string }>({});

//   const validateForm = () => {
//     const newErrors: { firstname?: string; lastname?: string } = {};

//     if (!firstname.trim()) {
//       newErrors.firstname = 'Firstname est requis';
//     }
//     if (!lastname.trim()) {
//       newErrors.lastname = 'Lastname est requis';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateForm()) {
//       // Naviguer vers l'étape suivante
//       router.push('/(tabs)/form-step2');
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView 
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* En-tête */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Census form</Text>
//           <Text style={styles.subtitle}>
//             Enter your full name exactly as it appears on your birth certificate!
//           </Text>
//         </View>

//         {/* Formulaire */}
//         <View style={styles.form}>
//           {/* Champ Prénom */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Firstname</Text>
//             <View style={[styles.inputContainer, errors.firstname && styles.inputError]}>
//               <Feather name="user" size={20} color="#1D8C9C" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Votre prénom"
//                 placeholderTextColor="#999"
//                 value={firstname}
//                 onChangeText={(text) => {
//                   setFirstname(text);
//                   if (errors.firstname) setErrors({ ...errors, firstname: undefined });
//                 }}
//               />
//             </View>
//             {errors.firstname && <Text style={styles.errorText}>{errors.firstname}</Text>}
//           </View>

//           {/* Champ Nom */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Lastname</Text>
//             <View style={[styles.inputContainer, errors.lastname && styles.inputError]}>
//               <Feather name="users" size={20} color="#1D8C9C" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Votre nom"
//                 placeholderTextColor="#999"
//                 value={lastname}
//                 onChangeText={(text) => {
//                   setLastname(text);
//                   if (errors.lastname) setErrors({ ...errors, lastname: undefined });
//                 }}
//               />
//             </View>
//             {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}
//           </View>

//           {/* Bouton Next */}
//           <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//             <Text style={styles.nextButtonText}>Next →</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF8F8',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingHorizontal: 25,
//     paddingBottom: 40,
//   },
//   header: {
//     marginTop: 60,
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#1D8C9C',
//     marginBottom: 15,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666666',
//     lineHeight: 22,
//   },
//   form: {
//     flex: 1,
//   },
//   inputGroup: {
//     marginBottom: 25,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333333',
//     marginBottom: 8,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#7CD4E4',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 15,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 14,
//     fontSize: 16,
//     color: '#333',
//     marginLeft: 10,
//   },
//   inputError: {
//     borderColor: '#FF3B30',
//   },
//   errorText: {
//     color: '#FF3B30',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   nextButton: {
//     backgroundColor: '#1D8C9C',
//     paddingVertical: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginTop: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   nextButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// export default function FormStep1Screen() {
//   const router = useRouter();
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [errors, setErrors] = useState<{ firstname?: string; lastname?: string }>({});

//   const validateForm = () => {
//     const newErrors: { firstname?: string; lastname?: string } = {};

//     if (!firstname.trim()) {
//       newErrors.firstname = 'Firstname est requis';
//     }
//     if (!lastname.trim()) {
//       newErrors.lastname = 'Lastname est requis';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateForm()) {
//       // Passer les données à l'étape suivante
//       router.push({
//         pathname: '/(tabs)/form-step2',
//         params: { firstname, lastname }
//       });
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
//         {/* Indicateur d'étape */}
//         <View style={styles.stepIndicator}>
//           <View style={[styles.stepDot, styles.stepActive]} />
//           <View style={styles.stepLine} />
//           <View style={styles.stepDot} />
//           <View style={styles.stepLine} />
//           <View style={styles.stepDot} />
//         </View>

//         <View style={styles.header}>
//           <Text style={styles.title}>Census form</Text>
//           <Text style={styles.subtitle}>
//             Enter your full name exactly as it appears on your birth certificate!
//           </Text>
//         </View>

//         <View style={styles.form}>
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Firstname</Text>
//             <View style={[styles.inputContainer, errors.firstname && styles.inputError]}>
//               <Feather name="user" size={20} color="#1D8C9C" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Votre prénom"
//                 placeholderTextColor="#999"
//                 value={firstname}
//                 onChangeText={(text) => {
//                   setFirstname(text);
//                   if (errors.firstname) setErrors({ ...errors, firstname: undefined });
//                 }}
//               />
//             </View>
//             {errors.firstname && <Text style={styles.errorText}>{errors.firstname}</Text>}
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Lastname</Text>
//             <View style={[styles.inputContainer, errors.lastname && styles.inputError]}>
//               <Feather name="users" size={20} color="#1D8C9C" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Votre nom"
//                 placeholderTextColor="#999"
//                 value={lastname}
//                 onChangeText={(text) => {
//                   setLastname(text);
//                   if (errors.lastname) setErrors({ ...errors, lastname: undefined });
//                 }}
//               />
//             </View>
//             {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}
//           </View>

//           <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//             <Text style={styles.nextButtonText}>Next →</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF8F8',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingHorizontal: 25,
//     paddingBottom: 40,
//   },
//   stepIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   stepDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#DDD',
//   },
//   stepActive: {
//     backgroundColor: '#1D8C9C',
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//   },
//   stepLine: {
//     width: 40,
//     height: 2,
//     backgroundColor: '#DDD',
//     marginHorizontal: 5,
//   },
//   header: {
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#1D8C9C',
//     marginBottom: 15,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666666',
//     lineHeight: 22,
//   },
//   form: {
//     flex: 1,
//   },
//   inputGroup: {
//     marginBottom: 25,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333333',
//     marginBottom: 8,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#7CD4E4',
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 15,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 14,
//     fontSize: 16,
//     color: '#333',
//     marginLeft: 10,
//   },
//   inputError: {
//     borderColor: '#FF3B30',
//   },
//   errorText: {
//     color: '#FF3B30',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   nextButton: {
//     backgroundColor: '#1D8C9C',
//     paddingVertical: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginTop: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   nextButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function FormStep1Screen() {
  const router = useRouter();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [errors, setErrors] = useState<{ firstname?: string; lastname?: string }>({});

  const validateForm = () => {
    const newErrors: { firstname?: string; lastname?: string } = {};
    if (!firstname.trim()) newErrors.firstname = 'Firstname est requis';
    if (!lastname.trim()) newErrors.lastname = 'Lastname est requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      router.push({
        pathname: '../form-step2',
        params: { firstname, lastname }
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* En-tête arrondi style bottom nav */}
        <View style={styles.header}>
          <Text style={styles.title}>Census form</Text>
          
          {/* Indicateur d'étape 7 étapes */}
          <View style={styles.stepIndicator}>
            <View style={[styles.stepDot, styles.stepActive]} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
          </View>
          <Text style={styles.stepText}>Step 1/7</Text>
        </View>

        {/* Formulaire centré */}
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Firstname</Text>
              <View style={[styles.inputContainer, errors.firstname && styles.inputError]}>
                <Feather name="user" size={20} color="#1D8C9C" />
                <TextInput
                  style={styles.input}
                  placeholder="Votre prénom"
                  placeholderTextColor="#999"
                  value={firstname}
                  onChangeText={(text) => {
                    setFirstname(text);
                    if (errors.firstname) setErrors({ ...errors, firstname: undefined });
                  }}
                />
              </View>
              {errors.firstname && <Text style={styles.errorText}>{errors.firstname}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Lastname</Text>
              <View style={[styles.inputContainer, errors.lastname && styles.inputError]}>
                <Feather name="users" size={20} color="#1D8C9C" />
                <TextInput
                  style={styles.input}
                  placeholder="Votre nom"
                  placeholderTextColor="#999"
                  value={lastname}
                  onChangeText={(text) => {
                    setLastname(text);
                    if (errors.lastname) setErrors({ ...errors, lastname: undefined });
                  }}
                />
              </View>
              {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}
            </View>
          </View>
        </View>

        {/* Bouton Next à droite */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#1D8C9C',
    paddingTop: 50,
    paddingBottom: 30,
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  stepActive: {
    backgroundColor: '#FFFFFF',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  stepLine: {
    width: 20,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 3,
  },
  stepText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 8,
    opacity: 0.9,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginTop: 30,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#7CD4E4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7CD4E4',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    marginTop: 30,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#1D8C9C',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});