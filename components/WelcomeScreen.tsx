import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/auth/signup');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8F8" />
      
      <View style={styles.centeredContainer}>
        <Image
          source={require('../assets/images/welcome.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.textContainer}>
          <Text style={styles.helloText}>Hello and welcome to</Text>
          <Text style={styles.censusTitle}>Census</Text>
          <Text style={styles.description}>
            your modern tool for planning, managing,{'\n'}
            and monitoring census campaigns{'\n'}
            across Cameroon
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.85,
    height: height * 0.35,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  helloText: {
    fontSize: 20,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 5,
  },
  censusTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1D8C9C',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1D8C9C',
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});