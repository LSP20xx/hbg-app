import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ParentalConsentScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Parental Consent</Text>
        <Text style={styles.subtitle}>
          To continue, we need parental consent to create the account
        </Text>

        <TextInput style={styles.input} placeholder="Parent's First Name" />
        <TextInput style={styles.input} placeholder="Parent's Last Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <Text style={styles.helperText}>
          This will be the email used to access your account and receive results
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <Text style={styles.eyeIcon}>👁️</Text>
        </View>
        <Text style={styles.helperText}>
          At least 8 characters, including 1 uppercase, 1 lowercase, and 1
          number
        </Text>

        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>+ UPLOAD CONSENT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
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
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  helperText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 16,
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 8,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    fontSize: 18,
  },
  uploadButton: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#333',
  },
  confirmButton: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#6fcf97',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ParentalConsentScreen;
