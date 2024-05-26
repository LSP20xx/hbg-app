import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TakeTestScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Take a test</Text>
        <Text style={styles.step}>Step 1/3: Take a photo with test</Text>
        <Text style={styles.instructions}>
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
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  step: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  instructions: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },
  cameraPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    marginBottom: 16,
  },
  cameraText: {
    textAlign: 'center',
    color: '#888',
  },
  message: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#A5D6A7',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TakeTestScreen;
