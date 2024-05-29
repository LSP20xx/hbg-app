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
import BackButton from '../components/BackButton';
import ScreenWrapper from '../components/ScreenWrapper';
import HeaderWithBackButton from '../components/HeaderWithBackButton';

const AccountInformationScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <ScreenWrapper>
      <HeaderWithBackButton title="Verify your identity" />
      <Text style={styles.subtitle}>
        Step 1/4: Complete your account information
      </Text>

      <CustomTextInput
        placeholder="Email"
        keyboardType="email-address"
        style={{ marginVertical: 8 }}
      />
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
      {/* 
      <CustomTextInput placeholder="First name" style={{ marginVertical: 8 }} />
      <CustomTextInput placeholder="Last name" style={{ marginVertical: 8 }} /> */}
      <CustomTextInput
        placeholder="Date of Birth (YYYY-MM-DD)"
        style={{ marginVertical: 8 }}
      />

      <Text style={styles.question}>Are you 18 years or older?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => setIsUserAnAdult(true)}
        >
          <View
            style={[
              styles.radioButton,
              isUserAnAdult === true && styles.radioButtonSelected,
            ]}
          />
          <Text style={styles.optionText}>I am 18 years or older</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => setIsUserAnAdult(false)}
        >
          <View
            style={[
              styles.radioButton,
              isUserAnAdult === false && styles.radioButtonSelected,
            ]}
          />
          <Text style={styles.optionText}>
            I'm not 18 years old, but I will get my parents consent
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.infoText}>
        At least 8 characters, including 1 uppercase, 1 lowercase, and 1 number
      </Text>

      <Button text="Confirm" onPress={() => {}} color="#66D19E" />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
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
    fontFamily: 'Urbanist-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#565454',
    marginBottom: 24,
    fontFamily: 'Urbanist-Bold',
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
  question: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  optionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 8,
  },
  radioButtonSelected: {
    backgroundColor: '#000',
  },
  optionText: {
    fontSize: 14,
  },
});

export default AccountInformationScreen;
