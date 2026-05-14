import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';

interface Errors {
  email?: string;
  name?: string;
  phone?: string;
  password?: string;
  terms?: string;
}

export default function SignupHabitantScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  
  // États pour le code pays
  const [countryCode, setCountryCode] = useState<CountryCode>('CM');
  const [callingCode, setCallingCode] = useState('237');
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  // Validation du numéro de téléphone par pays
  const validatePhoneNumber = (phone: string, code: string): boolean => {
    // Enlève les espaces et les tirets
    const cleanPhone = phone.replace(/[\s\-]/g, '');
    
    // Règles par pays
    const patterns: { [key: string]: RegExp } = {
      '237': /^[6-9][0-9]{7}$/, // Cameroun: 6,7,8,9 suivi de 7 chiffres (8 chiffres total)
      '225': /^[0-9]{8}$/, // Côte d'Ivoire: 8 chiffres
      '221': /^[7-8][0-9]{8}$/, // Sénégal: 7 ou 8 suivi de 8 chiffres
      '241': /^[0-9]{7}$/, // Gabon: 7 chiffres
      '242': /^[0-9]{9}$/, // Congo: 9 chiffres
      '229': /^[0-9]{8}$/, // Bénin: 8 chiffres
      '226': /^[0-9]{8}$/, // Burkina Faso: 8 chiffres
      '228': /^[0-9]{8}$/, // Togo: 8 chiffres
    };
    
    const pattern = patterns[code] || /^[0-9]{6,12}$/; // Par défaut: 6-12 chiffres
    return pattern.test(cleanPhone);
  };

  const validateForm = (): boolean => {
    let newErrors: Errors = {};

    // Validation Email
    if (!email) {
      newErrors.email = 'Email est requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email invalide';
    }

    // Validation Nom
    if (!name) {
      newErrors.name = 'Nom est requis';
    } else if (name.length < 2) {
      newErrors.name = 'Nom doit contenir au moins 2 caractères';
    }

    // Validation Téléphone
    if (!phoneNumber) {
      newErrors.phone = 'Numéro de téléphone est requis';
    } else if (!validatePhoneNumber(phoneNumber, callingCode)) {
      newErrors.phone = `Numéro invalide pour le Cameroun (+${callingCode})`;
    }

    // Validation Mot de passe
    if (!password) {
      newErrors.password = 'Mot de passe est requis';
    } else if (password.length < 6) {
      newErrors.password = 'Mot de passe doit contenir au moins 6 caractères';
    }

    // Validation des conditions
    if (!acceptTerms) {
      newErrors.terms = 'Vous devez accepter les conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateAccount = () => {
    if (validateForm()) {
      Alert.alert(
        'Succès',
        'Compte créé avec succès !',
        [{ text: 'OK', onPress: () => router.push('/(tabs)/home') }]
      );
    } else {
      Alert.alert('Erreur', 'Veuillez corriger les erreurs dans le formulaire');
    }
  };

  const onSelectCountry = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setShowCountryPicker(false);
    // Réinitialiser l'erreur de téléphone quand le pays change
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  // Formater le numéro de téléphone
  const formatPhoneNumber = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleaned);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo1.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Titre
        <View style={styles.header}>
          <Text style={styles.title}>Census</Text>
          <Text style={styles.subtitle}>
            Improve your village by participating in our censuses! Grow your community by sharing your opinions.
          </Text>
        </View> */}

        <View style={styles.form}>
          {/* Champ Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={[styles.inputContainer, errors.email && styles.inputErrorBorder]}>
              <MaterialIcons name="email" size={22} color="#1D8C9C" />
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
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          {/* Champ Nom */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <View style={[styles.inputContainer, errors.name && styles.inputErrorBorder]}>
              <Feather name="user" size={22} color="#1D8C9C" />
              <TextInput
                style={styles.input}
                placeholder="Votre nom complet"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
              />
            </View>
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </View>

          {/* Champ Téléphone avec code pays */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone number</Text>
            <View style={[styles.inputContainer, errors.phone && styles.inputErrorBorder]}>
              <TouchableOpacity 
                style={styles.countryPickerButton} 
                onPress={() => setShowCountryPicker(true)}
              >
                <CountryPicker
                  countryCode={countryCode}
                  withFilter
                  withFlag
                  withCallingCode
                  withEmoji
                  onSelect={onSelectCountry}
                  visible={showCountryPicker}
                  onClose={() => setShowCountryPicker(false)}
                  containerButtonStyle={styles.countryPickerButton}
                />
                <Text style={styles.callingCode}>+{callingCode}</Text>
                <Feather name="chevron-down" size={16} color="#1D8C9C" />
              </TouchableOpacity>
              <View style={styles.phoneDivider} />
              <TextInput
                style={[styles.input, styles.phoneInput]}
                placeholder="6XXXXXXXX"
                placeholderTextColor="#999"
                value={phoneNumber}
                onChangeText={formatPhoneNumber}
                keyboardType="phone-pad"
                maxLength={9}
              />
            </View>
            {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
          </View>

          {/* Champ Mot de passe avec œil */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputContainer, errors.password && styles.inputErrorBorder]}>
              <Feather name="lock" size={22} color="#1D8C9C" />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Mot de passe"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather name={showPassword ? "eye-off" : "eye"} size={22} color="#1D8C9C" />
              </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          </View>

          {/* Acceptation des conditions */}
          <View style={styles.termsContainer}>
            <Switch
              value={acceptTerms}
              onValueChange={setAcceptTerms}
              trackColor={{ false: '#ccc', true: '#1D8C9C' }}
              thumbColor="#FFFFFF"
            />
            <Text style={styles.termsText}>
              Accept the terms and conditions
            </Text>
          </View>
          {errors.terms && <Text style={styles.errorText}>{errors.terms}</Text>}

          {/* Bouton Create Account */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={handleCreateAccount}
            activeOpacity={0.8}
          >
            <Text style={styles.createButtonText}>Create an account</Text>
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
    padding: 25,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  header: {
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
  countryPickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  callingCode: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
    marginRight: 2,
  },
  phoneDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#DDD',
    marginLeft: 10,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    marginLeft: 0,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  termsText: {
    fontSize: 15,
    color: '#555555',
    marginLeft: 12,
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
});