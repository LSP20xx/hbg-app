import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TakeTestScreenTwo = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Take a test</Text>
        <Text style={styles.step}>Step 2/3: Take a photo with test</Text>
        <Text style={styles.subtitle}>
          Ensure your face is fully visible and well-lit
        </Text>
        <View style={styles.cameraPlaceholder}>
          <Text style={styles.cameraText}>
            USER'S FRONT CAMERA ON REAL TIME
          </Text>
        </View>
        <Text style={styles.message}>
          Message to check if the photo is clear
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take selfie</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  step: {
    fontSize: 16,
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  cameraPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    marginBottom: 24,
  },
  cameraText: {
    textAlign: 'center',
    color: '#666',
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#A5D6A7',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default TakeTestScreenTwo;
