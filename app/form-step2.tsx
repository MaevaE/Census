import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function FormStep2Screen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { firstname, lastname } = params;

  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!selectedGender) {
      setError('Veuillez sélectionner votre genre');
      return false;
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (validateForm()) {
      router.push({
        pathname: '../form-step3',
        params: { firstname, lastname, gender: selectedGender }
      });
    }
  };

  const handlePrevious = () => {
    router.push({
        pathname: '/(tabs)/form',
        params: { firstname, lastname }
      });;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* En-tête arrondi */}
        <View style={styles.header}>
          <Text style={styles.title}>Census form</Text>
          
          {/* Indicateur d'étape 7 étapes */}
          <View style={styles.stepIndicator}>
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
            <View style={styles.stepLine} />
            <View style={styles.stepDot} />
          </View>
          <Text style={styles.stepText}>Step 2/7</Text>
        </View>

        {/* Formulaire centré */}
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.questionTitle}>
              Define your gender (for census purposes)
            </Text>

            {/* Option Male */}
            <TouchableOpacity
              style={[
                styles.genderOption,
                selectedGender === 'male' && styles.genderOptionSelected
              ]}
              onPress={() => {
                setSelectedGender('male');
                setError('');
              }}
            >
              <View style={styles.genderRadio}>
                {selectedGender === 'male' && <View style={styles.genderRadioSelected} />}
              </View>
              <Text style={[
                styles.genderText,
                selectedGender === 'male' && styles.genderTextSelected
              ]}>
                Male
              </Text>
            </TouchableOpacity>

            {/* Option Female */}
            <TouchableOpacity
              style={[
                styles.genderOption,
                selectedGender === 'female' && styles.genderOptionSelected
              ]}
              onPress={() => {
                setSelectedGender('female');
                setError('');
              }}
            >
              <View style={styles.genderRadio}>
                {selectedGender === 'female' && <View style={styles.genderRadioSelected} />}
              </View>
              <Text style={[
                styles.genderText,
                selectedGender === 'female' && styles.genderTextSelected
              ]}>
                Female
              </Text>
            </TouchableOpacity>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        </View>

        {/* Boutons Previous et Next */}
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
  stepCompleted: {
    backgroundColor: '#FFFFFF',
  },
  stepLine: {
    width: 15,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 2,
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
    padding: 25,
    borderWidth: 1,
    borderColor: '#7CD4E4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 25,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#7CD4E4',
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  genderOptionSelected: {
    borderColor: '#1D8C9C',
    backgroundColor: '#F0F9FA',
  },
  genderRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1D8C9C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  genderRadioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1D8C9C',
  },
  genderText: {
    fontSize: 16,
    color: '#333333',
  },
  genderTextSelected: {
    color: '#1D8C9C',
    fontWeight: '600',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 30,
    marginBottom: 20,
  },
  previousButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1D8C9C',
  },
  previousButtonText: {
    color: '#1D8C9C',
    fontSize: 14,
    fontWeight: 'bold',
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
    fontSize: 14,
    fontWeight: 'bold',
  },
});