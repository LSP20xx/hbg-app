import React, { useEffect } from 'react';
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
import { uploadFrontImage, uploadBackImage, createInstitutionalUser } from '../redux/slices/userSlice';
import {
  selectUserId,
  selectFrontImageLoading,
  selectBackImageLoading,
  selectFrontImageSuccess,
  selectBackImageSuccess,
  selectFrontImageError,
  selectBackImageError,
  selectInstitutionalUserId,
  selectImagesLoadedSuccessfully,
} from '../redux/selectors/userSelectors';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import ScreenWrapper from '../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { AppDispatch } from '../redux/store';

const IdPhotosScreen = () => {
  const [frontImage, setFrontImage] = React.useState<string | null>(null);
  const [backImage, setBackImage] = React.useState<string | null>(null);
  const [localFrontLoading, setLocalFrontLoading] = React.useState(false);
  const [localBackLoading, setLocalBackLoading] = React.useState(false);
  const [frontImageMessage, setFrontImageMessage] = React.useState<string | null>("Please, upload the front image");
  const [backImageMessage, setBackImageMessage] = React.useState<string | null>("Please, upload the back image");

  const institutionalUserId = useSelector(selectInstitutionalUserId);
  const imageFrontLoading = useSelector(selectFrontImageLoading);
  const imageBackLoading = useSelector(selectBackImageLoading);
  const imageFrontSuccess = useSelector(selectFrontImageSuccess);
  const imageBackSuccess = useSelector(selectBackImageSuccess);
  const imageFrontError = useSelector(selectFrontImageError);
  const imageBackError = useSelector(selectBackImageError);
  const imagesLoadedSuccessfully = useSelector(selectImagesLoadedSuccessfully);
  const navigation = useNavigation();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("institutionalUserId", institutionalUserId)
  }, [institutionalUserId])

  useEffect(() => {
    console.log("imageFrontSuccess", imageFrontSuccess)
    console.log("imageBackSuccess", imageBackSuccess)
    console.log("imageFrontError", imageFrontError)
    console.log("imageBackError", imageBackError)
  }, [imageFrontError, imageBackError, imageBackSuccess, imageFrontSuccess])

  const handleFrontImageSelection = async (
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    pickerFunction: () => Promise<any>,
  ) => {
    setLocalFrontLoading(true);
    const result = await pickerFunction();

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      const response = await dispatch(uploadFrontImage({ imageUri: uri, userId: institutionalUserId }));

      if (response.error) {
        setFrontImageMessage('Error uploading the front image. Please try again.');
      } else {
        setFrontImageMessage('Front image uploaded successfully.');
      }
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
      const response = await dispatch(uploadBackImage({ imageUri: uri, userId: institutionalUserId }));

      if (response.error) {
        setBackImageMessage('Error uploading the back image. Please try again.');
      } else {
        setBackImageMessage('Back image uploaded successfully.');
      }
    }
    setLocalBackLoading(false);
  };

  const handleConfirmPress = () => {
    navigation.navigate('ConfirmIdentityData');
  };

  return (
    <ScreenWrapper
      headerTitle={'Verify your identity'}
      onButtonPress={handleConfirmPress}
      notShowingButton={false}
      showBackButton={true}
      buttonDisabled={!frontImage || !backImage || !imagesLoadedSuccessfully}
    >
      <Text style={styles.subtitle}>Step 2/5: Take photos of your ID</Text>
      <Text style={styles.description}>
        Ensure your ID is fully visible and well-lit
      </Text>

      <View style={styles.photoContainer}>
        <Text style={styles.photoLabel}>Front of ID</Text>
        <View style={styles.imageWrapper}>
          {imageFrontLoading || localFrontLoading ? (
            <ActivityIndicator size={64} color="#66D19E" />
          ) : (
            frontImage && (
              <Image source={{ uri: frontImage }} style={styles.photo} />
            )
          )}
        </View>
        <View style={styles.messageContainer}>
          {frontImageMessage && (
            <Text style={styles.message}>{frontImageMessage}</Text>
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
        <Text style={styles.photoLabel}>Back of ID</Text>
        <View style={styles.imageWrapper}>
          {imageBackLoading || localBackLoading ? (
            <ActivityIndicator size={64} color="#66D19E" />
          ) : (
            backImage && (
              <Image source={{ uri: backImage }} style={styles.photo} />
            )
          )}
        </View>
        <View style={styles.messageContainer}>
          {backImageMessage && (
            <Text style={styles.message}>{backImageMessage}</Text>
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
    fontSize: 20,
    fontFamily: "Urbanist-SemiBold",
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
  messageContainer: {
    height: 40
  },
  message: {
    fontSize: 14,
    fontFamily: 'Urbanist-Medium',
    marginTop: 8,
  },
});

export default IdPhotosScreen;