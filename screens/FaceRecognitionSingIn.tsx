import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import BackButton from '../components/BackButton';

type RootStackParamList = {
  FaceRecognitionSignIn: { onVerified: () => void };
};

type FaceRecognitionSignInRouteProp = RouteProp<
  RootStackParamList,
  'FaceRecognitionSignIn'
>;

const FaceRecognitionSignInScreen = () => {
  const route = useRoute<FaceRecognitionSignInRouteProp>();
  const { onVerified } = route.params;

  useEffect(() => {
    if (onVerified) {
      onVerified();
    }
  }, [onVerified]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <BackButton />

        <Text style={styles.title}>Verify your identity</Text>
        <Text style={styles.subtitle}>Complete your biometric method</Text>
        <Text style={styles.description}>
          Ensure your face is fully visible and well-lit
        </Text>
        <View style={styles.cameraContainer}>
          <Text style={styles.cameraText}>
            USER'S FRONT CAMERA ON REAL TIME
          </Text>
        </View>
        <Text style={styles.instructions}>
          Instructions to the user while we check identity
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  cameraContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    marginBottom: 24,
  },
  cameraText: {
    textAlign: 'center',
    color: '#666',
  },
  instructions: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default FaceRecognitionSignInScreen;
