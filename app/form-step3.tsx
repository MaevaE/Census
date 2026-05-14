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

export default function FormStep3Screen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { firstname, lastname, gender } = params;

  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [errors, setErrors] = useState<{ age?: string; occupation?: string }>({});

  const validateForm = () => {
    const newErrors: { age?: string; occupation?: string } = {};
    
    if (!age.trim()) {
      newErrors.age = 'L\'âge est requis';
    } else {
      const ageNum = parseInt(age, 10);
      if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
        newErrors.age = 'Âge invalide (0-120 ans)';
      }
    }
    
    if (!occupation.trim()) {
      newErrors.occupation = 'L\'occupation est requise';
    } else if (occupation.length < 2) {
      newErrors.occupation = 'Occupation trop courte';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      router.push({
        pathname: '/form-step4',
        params: { firstname, lastname, gender, age, occupation }
      });
    }
  };

  const handlePrevious = () => {
    router.push({
      pathname: '/(tabs)/form-step2',
      params: { firstname, lastname, gender }
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
            <View style={[styles.stepDot, styles.stepActive]} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
          </View>
          <Text style={styles.stepText}>Step 3/7</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.questionTitle}>
              Please provide your current age and what you do for a living
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age</Text>
              <View style={[styles.inputContainer, errors.age && styles.inputError]}>
                <Feather name="calendar" size={20} color="#1D8C9C" />
                <TextInput
                  style={styles.input}
                  placeholder="Votre âge"
                  placeholderTextColor="#999"
                  value={age}
                  onChangeText={(text) => {
                    setAge(text.replace(/[^0-9]/g, ''));
                    if (errors.age) setErrors({ ...errors, age: undefined });
                  }}
                  keyboardType="numeric"
                  maxLength={3}
                />
              </View>
              {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Occupation</Text>
              <View style={[styles.inputContainer, errors.occupation && styles.inputError]}>
                <Feather name="briefcase" size={20} color="#1D8C9C" />
                <TextInput
                  style={styles.input}
                  placeholder="Votre profession"
                  placeholderTextColor="#999"
                  value={occupation}
                  onChangeText={(text) => {
                    setOccupation(text);
                    if (errors.occupation) setErrors({ ...errors, occupation: undefined });
                  }}
                />
              </View>
              {errors.occupation && <Text style={styles.errorText}>{errors.occupation}</Text>}
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