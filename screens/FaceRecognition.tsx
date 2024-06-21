import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import ScreenWrapper from '../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';

const FaceRecognitionScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [ready, setReady] = useState(false);
  const devices = useCameraDevices();
  const device = devices.find((d) => d.position === 'front');
  const ovalAnim = useRef(new Animated.Value(1.5)).current; // Tamaño inicial más grande
  const navigation = useNavigation();
  const handleConfirmPress = () => {
    navigation.navigate('ConfirmEmail');
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === 'granted');
    };

    requestPermissions();
  }, []);

  useEffect(() => {
    // Simular la detección del rostro
    setTimeout(() => {
      setVerifying(true);
      Animated.spring(ovalAnim, {
        toValue: 1, // Reducir tamaño cuando se detecta el rostro
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        setVerifying(false);
        setReady(true);
        Animated.spring(ovalAnim, {
          toValue: 0.7, // Ajustar tamaño después de la verificación
          useNativeDriver: true,
        }).start();
        setTimeout(()=>{
          handleConfirmPress();
        }, 3000)
        // Aquí puedes añadir lógica adicional después del tiempo de verificación
      }, 3000); // 3 segundos de verificación
    }, 2000); // Simular la detección del rostro después de 2 segundos
  }, []);

  if (!device) {
    return <Text>Loading...</Text>;
  }

  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

 
  return (
    <ScreenWrapper
      headerTitle={'Face detection'}
      onButtonPress={handleConfirmPress}
      buttonDisabled={true}
      notShowingButton={true}
      showBackButton={true}
    >      
    <View style={{
      width: "100%",
justifyContent: "center"    }}>
      <Text style={styles.subtitle}>Step 4/5: Facial recognition</Text>
      <Text style={styles.description}>
        Ensure your face is fully visible and well-lit
      </Text>
      </View>

      <Camera
        style={{ height: "100%", width: "100%" }}
        device={device}
        isActive={true}
      />
    
      <View style={styles.overlay}>
        <Animated.View style={[styles.faceShape, { transform: [{ scale: ovalAnim }] }]} />
        {verifying && <Text style={styles.verifyingText}>Verifying face...</Text>}
        {ready && <Text style={styles.verifyingText}>Verified!</Text>}

      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceShape: {
    width: 250,
    height: 300,
    borderRadius: 125, // Simula una forma de cara
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  subtitle: {
    fontSize: 16,
    color: '#565454',
    fontFamily: 'Urbanist-Bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    fontFamily: 'Urbanist-Medium',
  },
  verifyingText: {
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    bottom: 100,
    fontFamily: "Urbanist-Medium"
  },
});

export default FaceRecognitionScreen;
