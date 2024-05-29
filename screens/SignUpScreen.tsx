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
  Verification: { screen: string; params: { onVerified: () => void } };
  Home: undefined;
  SignIn: undefined;
  ParentalConsent: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Verification'
>;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUserAnAdult, setIsUserAnAdult] = useState<boolean | null>(null);

  // const handleSignUp = async () => {
  //   try {
  //     if (isUserAnAdult === true) {
  //       navigation.navigate('Verification', {
  //         screen: 'AccountInformation',
  //         params: {
  //           onVerified: () => {
  //             navigation.navigate('Home');
  //           },
  //         },
  //       });
  //     } else if (isUserAnAdult === false) {
  //       navigation.navigate('Verification', {
  //         screen: 'ParentalConsent',
  //         params: {
  //           onVerified: () => {
  //             navigation.navigate('Home');
  //           },
  //         },
  //       });
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.error('Registration error:', error.message);
  //       alert('Registration error');
  //     } else {
  //       console.error('Registration error:', error);
  //       alert('Registration error');
  //     }
  //   }
  // };

  // const handleSignIn = () => {
  //   navigation.navigate('SignIn');
  // };

  return (
    <AuthScreenBase>
      <Logo />
      <InputContainer isSignUp />
      <ActionButton text="Sign up" onPress={() => {}} color="#66D19E" />
      <AuthLinkComponent
        onPress={() => {}}
        message="Already have an account?"
        linkText="Sign in now"
      />
    </AuthScreenBase>
  );
};

export default SignUpScreen;
