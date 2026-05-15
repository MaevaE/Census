import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function FormStep6Screen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { firstname, lastname, gender, age, occupation, maritalStatus, partnerName, childrenCount, ageRanges } = params;

  const [address, setAddress] = useState('');
  const [zone, setZone] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [errors, setErrors] = useState<{ address?: string; zone?: string; neighborhood?: string }>({});

  const validateForm = () => {
    const newErrors: { address?: string; zone?: string; neighborhood?: string } = {};
    
    if (!address.trim()) {
      newErrors.address = 'L\'adresse est requise';
    } else if (address.length < 5) {
      newErrors.address = 'Adresse trop courte';
    }
    
    if (!zone.trim()) {
      newErrors.zone = 'La zone est requise';
    }
    
    if (!neighborhood.trim()) {
      newErrors.neighborhood = 'Le quartier est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      router.push({
        pathname: '/form-step6',
        params: { firstname, lastname, gender, age, occupation, maritalStatus, partnerName, childrenCount, ageRanges, address, zone, neighborhood }
      });
    }
  };

  const handlePrevious = () => {
    router.push({
      pathname: '/form-step5',
      params: { firstname, lastname, gender, age, occupation, maritalStatus, partnerName, childrenCount, ageRanges }
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Census form</Text>
          
          <View style={styles.stepIndicator}>
            <View style={[styles.stepDot, styles.stepCompleted]} />
            <View style={styles.stepLine} />
            <View style={[styles.stepDot, styles.stepCompleted]} />
            <View style={styles.stepLine} />
            <View style={[styles.stepDot, styles.stepCompleted]} />
            <View style={styles.stepLine} />
            <View style={[styles.stepDot, styles.stepCompleted]} />
            <View style={styles.stepLine} />
            <View style={[styles.stepDot, styles.stepCompleted]} />
            <View style={styles.stepLine} />
            <View style={[styles.stepDot, styles.stepActive]} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
          </View>
          <Text style={styles.stepText}>Step 6/7</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.questionTitle}>
              Enter your address, zone, and neighborhood
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Address</Text>
              <View style={[styles.inputContainer, errors.address && styles.inputError]}>
                <Feather name="home" size={20} color="#1D8C9C" />
                <TextInput
                  style={styles.input}
                  placeholder="Numéro et rue"
                  placeholderTextColor="#999"
                  value={address}
                  onChangeText={(text) => {
                    setAddress(text);
                    if (errors.address) setErrors({ ...errors, address: undefined });
                  }}
                />
              </View>
              {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Zone</Text>
              <View style={[styles.inputContainer, errors.zone && styles.inputError]}>
                <Feather name="map-pin" size={20} color="#1D8C9C" />
                <TextInput
                  style={styles.input}
                  placeholder="Zone (ex: Zone A, Zone B)"
                  placeholderTextColor="#999"
                  value={zone}
                  onChangeText={(text) => {
                    setZone(text);
                    if (errors.zone) setErrors({ ...errors, zone: undefined });
                  }}
                />
              </View>
              {errors.zone && <Text style={styles.errorText}>{errors.zone}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Neighborhood</Text>
              <View style={[styles.inputContainer, errors.neighborhood && styles.inputError]}>
                <Feather name="navigation" size={20} color="#1D8C9C" />
                <TextInput
                  style={styles.input}
                  placeholder="Quartier"
                  placeholderTextColor="#999"
                  value={neighborhood}
                  onChangeText={(text) => {
                    setNeighborhood(text);
                    if (errors.neighborhood) setErrors({ ...errors, neighborhood: undefined });
                  }}
                />
              </View>
              {errors.neighborhood && <Text style={styles.errorText}>{errors.neighborhood}</Text>}
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.previousButton} onPress={handlePrevious}>
            <Text style={styles.previousButtonText}>← Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F8' },
  scrollContainer: { flexGrow: 1, paddingBottom: 40 },
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
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 20 },
  stepIndicator: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, flexWrap: 'wrap', paddingHorizontal: 10 },
  stepDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.4)' },
  stepActive: { backgroundColor: '#FFFFFF', width: 12, height: 12, borderRadius: 6 },
  stepCompleted: { backgroundColor: '#FFFFFF' },
  stepLine: { width: 15, height: 2, backgroundColor: 'rgba(255,255,255,0.3)', marginHorizontal: 2 },
  stepText: { fontSize: 12, color: '#FFFFFF', marginTop: 8, opacity: 0.9 },
  formContainer: { flex: 1, justifyContent: 'center', paddingHorizontal: 25, marginTop: 30 },
  form: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 25, borderWidth: 1, borderColor: '#7CD4E4', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  questionTitle: { fontSize: 16, fontWeight: '500', color: '#333333', textAlign: 'center', marginBottom: 25 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '500', color: '#333', marginBottom: 8 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#7CD4E4', borderRadius: 12, backgroundColor: '#FFFFFF', paddingHorizontal: 15 },
  input: { flex: 1, paddingVertical: 12, fontSize: 16, color: '#333', marginLeft: 10 },
  inputError: { borderColor: '#FF3B30' },
  errorText: { color: '#FF3B30', fontSize: 12, marginTop: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 30, marginBottom: 20 },
  previousButton: { backgroundColor: '#FFFFFF', paddingVertical: 14, paddingHorizontal: 25, borderRadius: 30, alignItems: 'center', borderWidth: 1, borderColor: '#1D8C9C' },
  previousButtonText: { color: '#1D8C9C', fontSize: 14, fontWeight: 'bold' },
  nextButton: { backgroundColor: '#1D8C9C', paddingVertical: 14, paddingHorizontal: 30, borderRadius: 30, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  nextButtonText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
});