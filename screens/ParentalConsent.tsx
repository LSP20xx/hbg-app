import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BackButton from '../components/BackButton';
import CustomTextInput from '../components/CustomTextInput';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';

const ParentalConsentScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <ScreenWrapper>
      <View style={{ flexDirection: 'row' }}>
        <BackButton />

        <Text style={styles.title}>Parental Consent</Text>
      </View>

      <Text style={styles.subtitle}>
        To continue, we need parental consent to create the account
      </Text>

      <CustomTextInput placeholder="Email" style={{ marginVertical: 8 }} />

      <Text style={styles.helperText}>
        This will be the email used to access your account and receive results
      </Text>
      <CustomTextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={!isPasswordVisible}
        iconName={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
        onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
      />
      <Text style={styles.helperText}>
        At least 8 characters, including 1 uppercase, 1 lowercase, and 1 number
      </Text>
      {/* <CustomTextInput
          placeholder="Parent's Last Name"
          style={{ marginVertical: 8 }}
        />
        <CustomTextInput
          placeholder="Parent's First Name"
          style={{ marginVertical: 8 }}
        />
      */}

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>+ UPLOAD CONSENT</Text>
      </TouchableOpacity>

      <Button text="Confirm" onPress={() => {}} color="#66D19E" />
    </ScreenWrapper>
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
