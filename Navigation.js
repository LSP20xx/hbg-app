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

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InformationHub" component={InformationHubScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="IdPhotos" component={IdPhotosScreen} />
        <Stack.Screen name="Selfie" component={SelfieScreen} />
        <Stack.Screen
          name="FaceRecognition"
          component={FaceRecognitionScreen}
        />
        <Stack.Screen name="Fingerprint" component={FingerprintScreen} />
        <Stack.Screen
          name="BiometricVerification"
          component={BiometricVerificationScreen}
        />
        <Stack.Screen
          name="AccountInformation"
          component={AccountInformationScreen}
        />
        <Stack.Screen
          name="ParentalConsent"
          component={ParentalConsentScreen}
        />

        <Stack.Screen
          name="FaceRecognitionSingIn"
          component={FaceRecognitionSignInScreen}
        />
        <Stack.Screen name="TakeaTestOne" component={TakeTestScreen} />
        <Stack.Screen name="TakeTestTwo" component={TakeTestScreenTwo} />
        <Stack.Screen name="SeeResults" component={SeeResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
