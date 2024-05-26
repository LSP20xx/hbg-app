import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const IdPhotosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Verify your identity</Text>
        <Text style={styles.subtitle}>Step 2/4: Take photos of your ID</Text>
        <Text style={styles.description}>
          Ensure your ID is fully visible and well-lit
        </Text>

        <View style={styles.photoContainer}>
          <Text style={styles.photoLabel}>FRONT</Text>
          <TouchableOpacity style={styles.cameraButton}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
          <Text style={styles.photoMessage}>
            Message to check if the photo is clear
          </Text>
        </View>

        <View style={styles.photoContainer}>
          <Text style={styles.photoLabel}>BACK</Text>
          <TouchableOpacity style={styles.cameraButton}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
          <Text style={styles.photoMessage}>
            Message to check if the photo is clear
          </Text>
        </View>

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  photoContainer: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  photoLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  cameraButton: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cameraIcon: {
    fontSize: 32,
  },
  photoMessage: {
    fontSize: 12,
    color: '#666',
  },
  confirmButton: {
    width: '100%',
    padding: 16,
    backgroundColor: '#a0e1e0',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default IdPhotosScreen;
