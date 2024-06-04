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
import CustomDatePicker from '../components/CustomDatePicker';
import { useNavigation } from '@react-navigation/native';

const AccountInformationScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation();

  const handleConfirmPress = () => {
    navigation.navigate('Verification', {
      screen: 'IdPhotos',
      params: {
        onVerified: () => {
          navigation.navigate('Home');
        },
      },
    });
  };

  return (
    <ScreenWrapper onButtonPress={handleConfirmPress}>
      <HeaderWithBackButton title="Verify your identity" />
      <Text style={styles.subtitle}>
        Step 1/4: Complete your account information
      </Text>

      <CustomTextInput
        placeholder="First Name"
        placeholderTextColor="#999"
        value={firstName}
        style={{ marginVertical: 16 }}
        onChangeText={setFirstName}
      />
      <CustomTextInput
        placeholder="Last Name"
        placeholderTextColor="#999"
        value={lastName}
        style={{ marginVertical: 16 }}
        onChangeText={setLastName}
      />
      <CustomDatePicker
        placeholder="Date of Birth (YYYY-MM-DD)"
        style={{ marginVertical: 16 }}
        iconName="calendar"
        iconColor="black"
      />
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
