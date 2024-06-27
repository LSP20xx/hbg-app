import React, { useState } from 'react';
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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ScreenWrapper';
import CustomTextInput from '../components/CustomTextInput';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Parent name is required'),
  surname: Yup.string().required('Parent surname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ParentalConsent2Screen = () => {
  const navigation = useNavigation();
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

  return (
    <Formik
      initialValues={{ name: '', surname: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Alert.alert('Form Submitted', JSON.stringify(values));
        navigation.navigate('IdParentAndChildPhoto');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
        <ScreenWrapper
          headerTitle={'Parental consent'}
          onButtonPress={handleSubmit}
          notShowingButton={false}
          showBackButton={true}
          buttonDisabled={!isValid || !consentFile}
        >
          <Text style={styles.subtitle}>Step 2/5: Complete the parental consent</Text>
          <Text style={styles.description}>
            Please fill all the data
          </Text>

          <CustomTextInput
            label="Parent name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            editable={true}
            error={touched.name && errors.name}
          />
          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}
          <CustomTextInput
            label="Parent surname"
            value={values.surname}
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
            editable={true}
            error={touched.surname && errors.surname}
          />
          {touched.surname && errors.surname && (
            <Text style={styles.errorText}>{errors.surname}</Text>
          )}
          <CustomTextInput
            label="Parent email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            editable={true}
            error={touched.email && errors.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <Text style={styles.helperText}>
            This will be the email used to access your account and receive results
          </Text>

          <TouchableOpacity
            style={consentFile ? styles.uploadedButton : styles.uploadButton}
            onPress={handleUploadConsent}
            disabled={isUploading}
          >
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
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
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
  helperText: {
    fontSize: 12,
    color: '#050505',
    marginBottom: 16,
    fontFamily: "Urbanist-SemiBold",
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: -16,
    marginBottom: 8,
    marginLeft: 4,
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
