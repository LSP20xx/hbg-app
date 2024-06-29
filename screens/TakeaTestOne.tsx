import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import ScreenWrapper from '../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../redux/selectors/userSelectors';
import { createTest } from '../redux/slices/testSlice';

const TakeaTestOneScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.find((d) => d.position === 'back');
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const navigation = useNavigation();
  const ovalAnim = useRef(new Animated.Value(1.5)).current; // Tamaño inicial más grande

  const handleConfirmPress = () => {
    navigation.navigate('TakeaTestTwo');
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === 'granted');
    };

    requestPermissions();
  }, []);

  useEffect(() => {
    if (userId) {
      const newTest = {
        userID: userId,
        testPhoto1: 'path/to/photo1.jpg',
        testPhoto2: 'path/to/photo2.jpg', // Reemplaza con el path real de la foto
        testResult: 'negative', // Puedes cambiarlo a 'SCD', 'trait', o 'negative'
      };
      dispatch(createTest(newTest));
    }
  }, [dispatch, userId]);

  if (!device) {
    return <Text>Loading...</Text>;
  }

  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ScreenWrapper
      headerTitle={'Take first photo'}
      onButtonPress={handleConfirmPress}
      notShowingButton={false}
      showBackButton={true}
      buttonText="Take a photo"
    >
      <Text style={styles.subtitle}>Step 1/3: Take a photo of an unused test kit</Text>
      <Text style={styles.description}>
        Ensure the object is fully visible and well-lit
      </Text>
      <View style={{ width: '100%' }}>
        <Camera
          style={{ height: '100%', width: '100%' }}
          device={device}
          isActive={true}
        />
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
    fontFamily: 'Urbanist-Medium',
  },
});

export default TakeaTestOneScreen;
