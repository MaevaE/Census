import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Errors {
  email?: string;
  password?: string;
}

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  // Affichage mot de passe
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (): boolean => {
    let newErrors: Errors = {};

    if (!email) {
      newErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Adresse email invalide';
    }

    if (!password) {
      newErrors.password = 'Mot de passe requis';
    } else if (password.length < 6) {
      newErrors.password =
        'Le mot de passe doit contenir au moins 6 caractères';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      Alert.alert(
        'Connexion réussie',
        'Bienvenue sur CENSUS',
        [
          {
            text: 'Continuer',
            onPress: () => router.push('/rescenseur/dashboard'),
          },
        ]
      );
    } else {
      Alert.alert(
        'Erreur',
        'Veuillez corriger les informations du formulaire.'
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>CENSUS</Text>

          <Text style={styles.subtitle}>
            Connectez-vous pour accéder à la plateforme
            numérique de recensement.
          </Text>
        </View>

        {/* FORMULAIRE */}
        <View style={styles.form}>
          
          {/* EMAIL */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Adresse Email</Text>

            <View
              style={[
                styles.inputContainer,
                errors.email && styles.inputErrorBorder,
              ]}
            >
              <MaterialIcons
                name="email"
                size={22}
                color="#1D8C9C"
              />

              <TextInput
                style={styles.input}
                placeholder="votre@email.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {errors.email && (
              <Text style={styles.errorText}>
                {errors.email}
              </Text>
            )}
          </View>

          {/* MOT DE PASSE */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mot de passe</Text>

            <View
              style={[
                styles.inputContainer,
                errors.password && styles.inputErrorBorder,
              ]}
            >
              <Feather
                name="lock"
                size={22}
                color="#1D8C9C"
              />

              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Votre mot de passe"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                <Feather
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={22}
                  color="#1D8C9C"
                />
              </TouchableOpacity>
            </View>

            {errors.password && (
              <Text style={styles.errorText}>
                {errors.password}
              </Text>
            )}
          </View>

          {/* MOT DE PASSE OUBLIÉ */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>
              Mot de passe oublié ?
            </Text>
          </TouchableOpacity>

          {/* BOUTON */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.createButtonText}>
              Se connecter
            </Text>
          </TouchableOpacity>

          {/* LIEN INSCRIPTION */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Vous n’avez pas de compte ?
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push('/auth/signupHabitant')
              }
            >
              <Text style={styles.signupText}>
                {' '}Créer un compte
              </Text>
            </TouchableOpacity>
          </View>

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
    padding: 25,
    justifyContent: 'center',
  },

  header: {
    marginTop: 40,
    marginBottom: 30,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1D8C9C',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },

  form: {
    flex: 1,
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
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

  inputErrorBorder: {
    borderColor: '#FF3B30',
  },

  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 5,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },

  forgotPasswordText: {
    color: '#1D8C9C',
    fontWeight: '600',
  },

  createButton: {
    backgroundColor: '#1D8C9C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  footerText: {
    color: '#555555',
    fontSize: 15,
  },

  signupText: {
    color: '#1D8C9C',
    fontSize: 15,
    fontWeight: 'bold',
  },
});