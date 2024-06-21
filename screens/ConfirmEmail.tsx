import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
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
import AuthInputContainer from '../components/AuthInputContainer';
import { Formik } from 'formik';
import { authValidationSchema } from '../schemas/authValidationSchema';

const ConfirmEmailScreen = () => {
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


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#66D19E" />
      </View>
    );
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      // validationSchema={authValidationSchema}
      onSubmit={(values) => {
        console.log('Submitting email:', values.email);
        // Navigate to the next screen
        navigation.navigate('TakeaTestAfterPatientCreated');
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <ScreenWrapper
          onButtonPress={handleSubmit as any}
          headerTitle="Confirm your email"
          buttonText="Confirm"
          showBackButton={true}
        >
          <Text style={styles.subtitle}>Step 5/5: Please provide an email</Text>
          <Text style={styles.description}>
            We will send you the results by email
          </Text>
          <CustomTextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />     
          {touched.email && errors.email && <Text>{errors.email}</Text>}
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
});

export default ConfirmEmailScreen;
