import { Feather, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Errors {
  email?: string;
  name?: string;
  password?: string;
  dateOfBirth?: string;
}

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  
  // États pour le mot de passe
  const [showPassword, setShowPassword] = useState(false);
  
  // États pour le DatePicker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const validateForm = (): boolean => {
    let newErrors: Errors = {};

    if (!email) {
      newErrors.email = 'Email est requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email invalide';
    }

    if (!name) {
      newErrors.name = 'Nom est requis';
    } else if (name.length < 2) {
      newErrors.name = 'Nom doit contenir au moins 2 caractères';
    }

    if (!password) {
      newErrors.password = 'Mot de passe est requis';
    } else if (password.length < 6) {
      newErrors.password = 'Mot de passe doit contenir au moins 6 caractères';
    }

    if (!dateOfBirth) {
      newErrors.dateOfBirth = 'Date de naissance est requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateAccount = () => {
    if (validateForm()) {
      Alert.alert(
        'Succès',
        'Compte créé avec succès !',
        [{ text: 'OK', onPress: () => router.push('/auth/signupHabitant') }]
      );
    } else {
      Alert.alert('Erreur', 'Veuillez corriger les erreurs dans le formulaire');
    }
  };

  const handleDateChange = (event: any, selectedDateValue?: Date) => {
    setShowDatePicker(false);
    if (selectedDateValue) {
      setSelectedDate(selectedDateValue);
      const formattedDate = selectedDateValue.toLocaleDateString('fr-FR');
      setDateOfBirth(formattedDate);
      if (errors.dateOfBirth) {
        setErrors({ ...errors, dateOfBirth: undefined });
      }
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Census</Text>
          <Text style={styles.subtitle}>
            Improve your village by participating in our censuses! Grow your community by sharing your opinions.
          </Text>
        </View>

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

          {/* Champ Date de naissance avec calendrier */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of birth</Text>
            <TouchableOpacity 
              style={[styles.inputContainer, errors.dateOfBirth && styles.inputErrorBorder]}
              onPress={showDatePickerModal}
              activeOpacity={0.7}
            >
              <Feather name="calendar" size={22} color="#1D8C9C" />
              <Text style={[styles.dateText, !dateOfBirth && styles.placeholderText]}>
                {dateOfBirth || 'DD/MM/YYYY'}
              </Text>
              <Feather name="chevron-right" size={18} color="#1D8C9C" />
            </TouchableOpacity>
            {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}
          </View>

          {/* Newsletter */}
          <View style={styles.newsletterContainer}>
            <Switch
              value={newsletter}
              onValueChange={setNewsletter}
              trackColor={{ false: '#ccc', true: '#1D8C9C' }}
              thumbColor="#FFFFFF"
            />
            <Text style={styles.newsletterText}>Sign up for email newsletters</Text>
          </View>

          {/* Bouton Create Account */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={handleCreateAccount}
            activeOpacity={0.8}
          >
            <Text style={styles.createButtonText}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* DatePicker Modal pour iOS/Android */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          maximumDate={new Date()}
          minimumDate={new Date(1900, 0, 1)}
        />
      )}
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
  dateText: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  placeholderText: {
    color: '#999',
  },
  newsletterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  newsletterText: {
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