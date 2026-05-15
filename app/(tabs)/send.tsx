import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SendScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envoi</Text>
      <Text style={styles.subtitle}>Page en construction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D8C9C',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});