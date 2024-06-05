import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFrontImage, uploadBackImage } from '../redux/slices/userSlice';
import {
  selectUserId,
  selectFrontImageLoading,
  selectBackImageLoading,
  selectFrontImageSuccess,
  selectBackImageSuccess,
  selectFrontImageError,
  selectBackImageError,
} from '../redux/selectors/userSelectors';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import ScreenWrapper from '../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';

const IdPhotosScreen = () => {
  const [frontImage, setFrontImage] = React.useState<string | null>(null);
  const [backImage, setBackImage] = React.useState<string | null>(null);
  const [localFrontLoading, setLocalFrontLoading] = React.useState(false);
  const [localBackLoading, setLocalBackLoading] = React.useState(false);

  const userId = useSelector(selectUserId);
  const imageFrontLoading = useSelector(selectFrontImageLoading);
  const imageBackLoading = useSelector(selectBackImageLoading);
  const imageFrontSuccess = useSelector(selectFrontImageSuccess);
  const imageBackSuccess = useSelector(selectBackImageSuccess);
  const imageFrontError = useSelector(selectFrontImageError);
  const imageBackError = useSelector(selectBackImageError);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleFrontImageSelection = async (
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    pickerFunction: () => Promise<any>,
  ) => {
    setLocalFrontLoading(true);
    const result = await pickerFunction();

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await dispatch(uploadFrontImage({ imageUri: uri, userId }));
    }
    setLocalFrontLoading(false);
  };

  const handleBackImageSelection = async (
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    pickerFunction: () => Promise<any>,
  ) => {
    setLocalBackLoading(true);
    const result = await pickerFunction();

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await dispatch(uploadBackImage({ imageUri: uri, userId }));
    }
    setLocalBackLoading(false);
  };

  const handleConfirmPress = () => {
    navigation.navigate('Verification', {
      screen: 'FaceRecognition',
      params: {
        onVerified: () => {
          navigation.navigate('FaceRecognition');
        },
      },
    });
  };

  // const isConfirmDisabled =
  //   imageFrontLoading ||
  //   imageBackLoading ||
  //   !imageFrontSuccess ||
  //   !imageBackSuccess ||
  //   imageFrontError ||
  //   imageBackError;

  return (
    <ScreenWrapper
      headerTitle={'Verify your identity'}
      onButtonPress={handleConfirmPress}
    >
      <Text style={styles.subtitle}>Step 1/3: Take photos of your ID</Text>
      <Text style={styles.description}>
        Ensure your ID is fully visible and well-lit
      </Text>

      <View style={styles.photoContainer}>
        <Text style={styles.photoLabel}>FRONT</Text>
        <View style={styles.imageWrapper}>
          {imageFrontLoading || localFrontLoading ? (
            <ActivityIndicator size="large" color="#66D19E" />
          ) : (
            frontImage && (
              <Image source={{ uri: frontImage }} style={styles.photo} />
            )
          )}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() =>
              handleFrontImageSelection(
                setFrontImage,
                ImagePicker.launchCameraAsync,
              )
            }
          >
            <Ionicons name="camera" size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() =>
              handleFrontImageSelection(
                setFrontImage,
                ImagePicker.launchImageLibraryAsync,
              )
            }
          >
            <Ionicons name="image" size={50} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => setFrontImage(null)}
            disabled={!frontImage}
          >
            <Ionicons
              name="trash"
              size={50}
              color={frontImage ? '#c50000' : '#d5d5d5'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.photoContainer}>
        <Text style={styles.photoLabel}>BACK</Text>
        <View style={styles.imageWrapper}>
          {imageBackLoading || localBackLoading ? (
            <ActivityIndicator size="large" color="#66D19E" />
          ) : (
            backImage && (
              <Image source={{ uri: backImage }} style={styles.photo} />
            )
          )}
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() =>
              handleBackImageSelection(
                setBackImage,
                ImagePicker.launchCameraAsync,
              )
            }
          >
            <Ionicons name="camera" size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() =>
              handleBackImageSelection(
                setBackImage,
                ImagePicker.launchImageLibraryAsync,
              )
            }
          >
            <Ionicons name="image" size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => setBackImage(null)}
            disabled={!backImage}
          >
            <Ionicons
              name="trash"
              size={50}
              color={backImage ? '#c50000' : '#d5d5d5'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
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
  photoContainer: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  photoLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  imageWrapper: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cameraButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cameraIcon: {
    fontSize: 32,
  },
});

export default IdPhotosScreen;
