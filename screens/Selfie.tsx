import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BackButton from '../components/BackButton';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import ScreenWrapper from '../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';

const SelfieScreen = () => {
  const navigation = useNavigation();
  const handleConfirmPress = () => {
    navigation.navigate('Verification', {
      screen: 'BiometricVerification',
      params: {
        onVerified: () => {
          navigation.navigate('InstitutionalHome');
        },
      },
    });
  };
  return (
    <ScreenWrapper onButtonPress={handleConfirmPress}>
      <HeaderWithBackButton title="Verify your identity" />
      <Text style={styles.subtitle}>Step 3/4: Take a selfie</Text>
      <Text style={styles.description}>
        Ensure your face is fully visible and well-lit
      </Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.cameraPlaceholder}>
          <Text style={styles.cameraText}>
            USER'S FRONT CAMERA ON REAL TIME
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#565454',
    fontFamily: 'Urbanist-Bold',
  },
  step: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    fontFamily: 'Urbanist-Medium',
  },
  cameraPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',

    backgroundColor: '#E0F7FA',
    marginBottom: 16,
  },
  cameraText: {
    textAlign: 'center',
    color: 'black',
  },
  message: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#A5D6A7',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SelfieScreen;
