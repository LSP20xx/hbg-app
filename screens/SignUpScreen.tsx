import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from '../components/Button';
import AuthLink from '../components/AuthLink';
import api from '../api';

type RootStackParamList = {
  Verification: { screen: string; params: { onVerified: () => void } };
  Home: undefined;
  SignIn: undefined;
  ParentalConsent: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Verification'
>;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isUserAnAdult, setIsUserAnAdult] = useState<boolean | null>(null);

  const handleSignUp = async () => {
    try {
      // const response = await api.post('/auth/register');
      // if (response.status === 200) {
      if (isUserAnAdult === true) {
        navigation.navigate('Verification', {
          screen: 'AccountInformation',
          params: {
            onVerified: () => {
              navigation.navigate('Home');
            },
          },
        });
      } else if (isUserAnAdult === false) {
        navigation.navigate('Verification', {
          screen: 'ParentalConsent',
          params: {
            onVerified: () => {
              navigation.navigate('Home');
            },
          },
        });
      }
      // } else {
      //   alert('Registration failed');
      // }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Registration error:', error.message);
        alert('Registration error');
      } else {
        console.error('Registration error:', error);
        alert('Registration error');
      }
    }
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>LOGO</Text>
        </View>
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
        <Button text={'Sign up'} onPress={handleSignUp} color="#66D19E" />
        <AuthLink
          onPress={handleSignIn}
          message="Already have an account?"
          linkText="Sign in now"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoContainer: {
    marginBottom: 80,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
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
  signInLink: {
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: '#000',
  },
});

export default SignUpScreen;
