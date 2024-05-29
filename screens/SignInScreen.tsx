import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AuthScreenBase from '../components/AuthScreenBase';
import Logo from '../components/Logo';
import InputContainer from '../components/InputContainer';
import ActionButton from '../components/ActionButton';
import AuthLinkComponent from '../components/AuthLinkComponent';
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

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <AuthScreenBase>
      <Logo />
      <InputContainer />
      <ActionButton text="Sign in" onPress={handleSignIn} color="#66D19E" />
      <AuthLinkComponent
        onPress={handleSignUp}
        message="Don't have an account?"
        linkText="Sign up now"
      />
    </AuthScreenBase>
  );
};

export default SignInScreen;
