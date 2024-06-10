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
import InstitutionalHomeScreen from './screens/InstitutionalHomeScreen';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const VerificationStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen
        name="FaceRecognitionSignIn"
        component={FaceRecognitionSignInScreen}
      />
    </AuthStack.Navigator>
  );
}

function VerificationStackNavigator() {
  return (
    <VerificationStack.Navigator screenOptions={{ headerShown: false }}>
      <VerificationStack.Screen name="IdPhotos" component={IdPhotosScreen} />
      <VerificationStack.Screen name="Selfie" component={SelfieScreen} />
      <VerificationStack.Screen
        name="FaceRecognition"
        component={FaceRecognitionScreen}
      />
      <VerificationStack.Screen
        name="Fingerprint"
        component={FingerprintScreen}
      />
      <VerificationStack.Screen
        name="BiometricVerification"
        component={BiometricVerificationScreen}
      />
      <VerificationStack.Screen
        name="AccountInformation"
        component={AccountInformationScreen}
      />
      <VerificationStack.Screen
        name="ParentalConsent"
        component={ParentalConsentScreen}
      />
    </VerificationStack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
        <Stack.Screen
          name="Verification"
          component={VerificationStackNavigator}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InstitutionalHome" component={InstitutionalHomeScreen} />

        <Stack.Screen name="InformationHub" component={InformationHubScreen} />
        <Stack.Screen name="TakeTestTwo" component={TakeTestScreenTwo} />
        <Stack.Screen name="SeeResults" component={SeeResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
