import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../components/Button';
import AuthLink from '../components/AuthLink';
import CustomTextInput from '../components/CustomTextInput';
import api from '../api';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = async () => {
    try {
      const response = await api.post('/auth/login', { username, password });
      if (response.status === 200) {
        navigation.navigate('FaceRecognitionSignIn', {
          onVerified: () => {
            navigation.navigate('Home');
          },
        });
      } else {
        alert('Login failed');
      }
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
