import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import AuthLink from '../components/AuthLink';
import CustomTextInput from '../components/CustomTextInput';

type RootStackParamList = {
  SignUp: undefined;
  Home: undefined;
  FaceRecognitionSignIn: { onVerified: () => void };
};

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const SignInScreen = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = () => {
    navigation.navigate('FaceRecognitionSignIn', {
      onVerified: () => {
        navigation.navigate('Home');
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder="Email"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <CustomTextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!isPasswordVisible}
            style={styles.input}
            iconName={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
            onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Button text="Sign in" onPress={handleSignIn} color="#66D19E" />
        <AuthLink
          onPress={handleSignUp}
          message="Don't have an account?"
          linkText="Sign up now"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordInput: {
    flex: 1,
    marginBottom: 0,
    borderWidth: 0,
  },
  eyeIcon: {
    padding: 15,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#999',
  },

  signUpContainer: {
    flexDirection: 'row',
  },
  signUpText: {
    color: '#8fdacb',
  },
});

export default SignInScreen;
