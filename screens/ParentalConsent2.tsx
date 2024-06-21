import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectInstitutionalUserId,
  selectUserId,
} from '../redux/selectors/userSelectors';
import {
  fetchIdentification,
} from '../redux/slices/identificationSlice';
import {
  selectIdentificationLoading,
  selectIdentificationError,
  selectIdentificationName,
  selectIdentificationSurname,
  selectIdentificationIdNumber,
  selectIdentificationNationality,
  selectIdentificationDateOfBirth,
} from '../redux/selectors/identificationSelectors';
import ScreenWrapper from '../components/ScreenWrapper';
import CustomTextInput from '../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ParentalConsent2Screen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = useSelector(selectUserId);
  const institutionalUserId = useSelector(selectInstitutionalUserId);

  const loading = useSelector(selectIdentificationLoading);
  const error = useSelector(selectIdentificationError);
  const name = useSelector(selectIdentificationName);
  const surname = useSelector(selectIdentificationSurname);
  const idNumber = useSelector(selectIdentificationIdNumber);
  const nationality = useSelector(selectIdentificationNationality);
  const dateOfBirth = useSelector(selectIdentificationDateOfBirth);

  const [consentFile, setConsentFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadConsent = async () => {
    try {
      setIsUploading(true);
      const result = await ImagePicker.launchCameraAsync({});
      if (!result.cancelled) {
        setConsentFile(result);
      }
    } catch (err) {
      console.error('Error picking document: ', err);
    } finally {
      setIsUploading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#66D19E" />
      </View>
    );
  }

  return (
    <ScreenWrapper
      headerTitle={'Parental consent'}
      onButtonPress={() => navigation.navigate('FaceRecognition')}
      notShowingButton={false}
      showBackButton={true}
    >
      <Text style={styles.subtitle}>Step 2/5: Complete the parental consent</Text>
      <Text style={styles.description}>
        Please fill all the data
      </Text>

      <CustomTextInput
        label="Parent name"
        value={name || ''}
        editable={true}
      />
      <CustomTextInput
        label="Parent surname"
        value={surname || ''}
        editable={true}
      />
      <CustomTextInput
        label="Parent email"
        value={idNumber || ''}
        editable={true}
      />
      <Text style={styles.helperText}>
        This will be the email used to access your account and receive results
      </Text>

      <TouchableOpacity style={consentFile ? styles.uploadedButton : styles.uploadButton} onPress={handleUploadConsent} disabled={isUploading}>
        {isUploading ? (
          <ActivityIndicator size={32} color="#66D19E" style={{ marginRight: 16 }} />
        ) : (
          <Ionicons name={consentFile ? "refresh" : "camera"} size={32} style={{ marginRight: 16 }} />
        )}
        <Text style={styles.uploadButtonText}>
          {consentFile ? 'RETAKE PHOTO OF CONSENT' : 'TAKE PHOTO OF CONSENT'}
        </Text>
      </TouchableOpacity>
      {consentFile && consentFile.uri && (
        <Image source={{ uri: consentFile.uri }} style={styles.imagePreview} />
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
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
  helperText: {
    fontSize: 12,
    color: '#050505',
    marginBottom: 16,
    fontFamily: "Urbanist-SemiBold",
  },
  uploadButton: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "center"
  },
  uploadedButton: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#A3E6C4',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#A3E6C4',
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Urbanist-Bold',
  },
  fileName: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    fontFamily: 'Urbanist-Regular',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 16,
  },
});

export default ParentalConsent2Screen;
