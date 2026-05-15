import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Rediriger vers l'écran d'accueil après 2 secondes
    const timer = setTimeout(() => {
      router.replace('/auth/signup');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D8C9C" />
      
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logoWhite.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D8C9C', // Couleur principale de l'app
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.5,
    height: height * 0.25,
  },
});