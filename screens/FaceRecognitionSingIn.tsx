import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { scanFaces, Face } from 'vision-camera-face-detector';
import { runOnJS } from 'react-native-reanimated';
import api from '../api';
import RNFS from 'react-native-fs';

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
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  // const cameraRef = useRef<Camera>(null);

  // const devices = useCameraDevices();
  // const device = devices.find((device) => device.position === 'front');

  // useEffect(() => {
  //   (async () => {
  //     const cameraPermission = await Camera.requestCameraPermission();
  //     setHasPermission(cameraPermission === 'granted');
  //   })();
  // }, []);

  // const handleFacesDetected = async (faces: Face[]) => {
  //   if (faces.length > 0 && !isProcessing && cameraRef.current) {
  //     setIsProcessing(true);
  //     const photo = await cameraRef.current.takePhoto({
  //       enableAutoDistortionCorrection: true,
  //     });

  //     try {
  //       const base64Img = await RNFS.readFile(photo.path, 'base64');
  //       const response = await api.post('/auth/biometrics', {
  //         userId: 'YOUR_USER_ID',
  //         faceScanData: `data:image/jpg;base64,${base64Img}`,
  //       });

  //       if (response.status === 200) {
  //         onVerified();
  //       }
  //     } catch (error) {
  //       console.error('Error sending frame to server:', error);
  //       Alert.alert('Error', 'Something went wrong during face detection');
  //     } finally {
  //       setIsProcessing(false);
  //     }
  //   }
  // };

  // const frameProcessor = useRef<any>((frame: any) => {
  //   'worklet';
  //   const faces = scanFaces(frame);
  //   runOnJS(handleFacesDetected)(faces);
  // }).current;

  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Verify your identity</Text>
          <Text style={styles.subtitle}>Complete your biometric method</Text>
          <Text style={styles.description}>
            Ensure your face is fully visible and well-lit
          </Text>
          <View style={styles.cameraContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          <Text style={styles.instructions}>
            Requesting for camera permission...
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Verify your identity</Text>
          <Text style={styles.subtitle}>Complete your biometric method</Text>
          <Text style={styles.description}>
            Ensure your face is fully visible and well-lit
          </Text>
          <View style={styles.cameraContainer}>
            <Text style={styles.cameraText}>No access to camera</Text>
          </View>
          <Text style={styles.instructions}>
            Please grant camera permissions in your device settings.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Verify your identity</Text>
        <Text style={styles.subtitle}>Complete your biometric method</Text>
        <Text style={styles.description}>
          Ensure your face is fully visible and well-lit
        </Text>
        <View style={styles.cameraContainer}>
          {/* {device && (
            <Camera
              style={styles.camera}
              device={device}
              isActive={true}
              ref={cameraRef}
              photo={true}
              frameProcessor={frameProcessor}
            />
          )} */}
        </View>
        {isProcessing && <ActivityIndicator size="large" color="#0000ff" />}
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
    overflow: 'hidden',
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
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
