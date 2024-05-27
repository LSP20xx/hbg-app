import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type RootStackParamList = {
  Verification: { screen: string; params: { onVerified: () => void } };
  Home: undefined;
  SignIn: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Verification'
>;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const handleSignUp = () => {
    navigation.navigate('Verification', {
      screen: 'AccountInformation',
      params: {
        onVerified: () => {
          navigation.navigate('Home');
        },
      },
    });
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>LOGO</Text>
      </View>
      <Text style={styles.question}>Are you 18 years or older?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.radioButtonSelected} />
          <Text style={styles.optionText}>I am 18 years or older</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View style={styles.radioButton} />
          <Text style={styles.optionText}>
            I'm not 18 years old, but I will get my parents consent
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInLink} onPress={handleSignIn}>
        <Text style={styles.signInText}>
          Already have an account? Sign in now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 16,
    marginBottom: 16,
  },
  optionContainer: {
    marginBottom: 32,
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
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#000',
    marginRight: 8,
  },
  optionText: {
    fontSize: 14,
  },
  signUpButton: {
    backgroundColor: '#A3E4D7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpButtonText: {
    fontSize: 16,
    color: '#FFF',
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
