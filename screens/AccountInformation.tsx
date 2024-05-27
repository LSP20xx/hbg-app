import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import Button from '../components/Button';

const AccountInformationScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Verify your identity</Text>
      <Text style={styles.subtitle}>
        Step 1/4: Complete your account information
      </Text>

      <CustomTextInput placeholder="First name" />
      <CustomTextInput placeholder="Last name" />
      <CustomTextInput placeholder="Date of Birth (YYYY-MM-DD)" />
      <CustomTextInput placeholder="Email" keyboardType="email-address" />
      <Text style={styles.infoText}>
        This will be the email used to access your account and receive results
      </Text>
      <View style={styles.passwordContainer}>
        <CustomTextInput
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          iconName={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
          onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      </View>
      <Text style={styles.infoText}>
        At least 8 characters, including 1 uppercase, 1 lowercase, and 1 number
      </Text>

      <Button text="Confirm" onPress={() => {}} color="#66D19E" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
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
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  infoText: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default AccountInformationScreen;
