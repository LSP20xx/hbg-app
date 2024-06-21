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
import TakeaTestOneScreen from './screens/TakeaTestOne';
import TakeaTestTwoScreen from './screens/TakeaTestTwo';
import SeeResultsScreen from './screens/SeeResultsScreen';
import InstitutionalHomeScreen from './screens/InstitutionalHomeScreen';
import TermsAndConditionsScreen from './screens/TermsAndConditionsScreen';
import TakeaTestAfterPatientCreatedScreen from './screens/TakeaTestAfterPatientCreated';
import InstructionalVideoScreen from './screens/InstructionalVideoScreen';
import ApplyTestScreen from './screens/ApplyTestScreen';
import TestResultsScreen from './screens/TestResultsScreen';
import ManagePatientsScreen from './screens/ManagePatientsScreen';
import AgeVerificationScreen from './screens/AgeVerificationScreen';
import ConfirmIdentityDataScreen from './screens/ConfirmIdentityData';
import ConfirmEmailScreen from './screens/ConfirmEmail';
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
      <VerificationStack.Screen name="Selfie" component={SelfieScreen} />

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
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
        <Stack.Screen name="IdPhotos" component={IdPhotosScreen} />
        <Stack.Screen
          name="FaceRecognition"
          component={FaceRecognitionScreen}
        />
        <Stack.Screen name="TakeaTestAfterPatientCreated" component={TakeaTestAfterPatientCreatedScreen} />
        <Stack.Screen name="InstructionalVideo" component={InstructionalVideoScreen} />

        <Stack.Screen name="InformationHub" component={InformationHubScreen} />
        <Stack.Screen name="TakeaTestOne" component={TakeaTestOneScreen} />
        <Stack.Screen name="TakeaTestTwo" component={TakeaTestTwoScreen} />
        <Stack.Screen name="SeeResults" component={SeeResultsScreen} />
        <Stack.Screen name="ApplyTest" component={ApplyTestScreen} />
        <Stack.Screen name="TestResults" component={TestResultsScreen} />
        <Stack.Screen name="ManagePatients" component={ManagePatientsScreen} />
        <Stack.Screen name="AgeVerification" component={AgeVerificationScreen} />
        <Stack.Screen 
        name="ParentalConsent"
        component={ParentalConsentScreen}
      />
      <Stack.Screen 
        name="ConfirmIdentityData"
        component={ConfirmIdentityDataScreen}
      />
      <Stack.Screen
        name="ConfirmEmail"
        component={ConfirmEmailScreen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
