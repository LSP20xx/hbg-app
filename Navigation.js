// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import InformationHubScreen from './screens/InformationHub';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AccountInformationScreen from './screens/AccountInformation';
import IdPhotosScreen from './screens/IdPhotos';
import SelfieScreen from './screens/Selfie';
import BiometricVerificationScreen from './screens/BiometricVerification';
import FaceRecognitionScreen from './screens/FaceRecognition';
import FingerprintScreen from './screens/Fingerprint';
import ParentalConsentScreen from './screens/ParentalConsent';
import FaceRecognitionSignInScreen from './screens/FaceRecognitionSingIn';
import TakeTestScreen from './screens/TakeaTestOne';
import TakeTestScreenTwo from './screens/TakeTestTwo';
import SeeResultsScreen from './screens/SeeResults';

const AuthStack = createStackNavigator();
const VerificationStack = createStackNavigator();
const MainStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

function VerificationStackScreen() {
  return (
    <VerificationStack.Navigator initialRouteName="IdPhotos">
      <VerificationStack.Screen name="IdPhotos" component={IdPhotosScreen} />
      <VerificationStack.Screen name="Selfie" component={SelfieScreen} />
      <VerificationStack.Screen name="FaceRecognition" component={FaceRecognitionScreen} />
      <VerificationStack.Screen name="Fingerprint" component={FingerprintScreen} />
      <VerificationStack.Screen name="BiometricVerification" component={BiometricVerificationScreen} />
      <VerificationStack.Screen name="AccountInformation" component={AccountInformationScreen} />
      <VerificationStack.Screen name="ParentalConsent" component={ParentalConsentScreen} />
    </VerificationStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="InformationHub" component={InformationHubScreen} />
      <MainStack.Screen name="SignIn" component={SignInScreen} />
      <MainStack.Screen name="SignUp" component={SignUpScreen} />
      <MainStack.Screen name="IdPhotos" component={IdPhotosScreen} />
      <MainStack.Screen name="Selfie" component={SelfieScreen} />
      <MainStack.Screen name="FaceRecognition" component={FaceRecognitionScreen} />
      <MainStack.Screen name="Fingerprint" component={FingerprintScreen} />
      <MainStack.Screen name="BiometricVerification" component={BiometricVerificationScreen} />
      <MainStack.Screen name="AccountInformation" component={AccountInformationScreen} />
      <MainStack.Screen name="ParentalConsent" component={ParentalConsentScreen} />
      <MainStack.Screen name="FaceRecognitionSingIn" component={FaceRecognitionSignInScreen} />
      <MainStack.Screen name="TakeaTestOne" component={TakeTestScreen} />
      <MainStack.Screen name="TakeTestTwo" component={TakeTestScreenTwo} />
      <MainStack.Screen name="SeeResults" component={SeeResultsScreen} />
    </MainStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}

export default AppNavigator;
