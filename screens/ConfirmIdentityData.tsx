import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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
import CustomDatePicker from '../components/CustomDatePicker';

const ConfirmIdentityDataScreen = () => {
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

  useEffect(() => {
    if (institutionalUserId) {
      dispatch(fetchIdentification(institutionalUserId));
    }
  }, [institutionalUserId, dispatch]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    idNumber: Yup.string().required('ID number is required'),
    nationality: Yup.string().required('Nationality is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
  });

  const handleUpdateIdentification = async (values) => {

      navigation.navigate('FaceRecognition');
  
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#66D19E" />
      </View>
    );
  }

  return (
    <Formik
      initialValues={{ name, surname, idNumber, nationality, dateOfBirth }}
      validationSchema={validationSchema}
      onSubmit={handleUpdateIdentification}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <ScreenWrapper
          headerTitle={'Confirm your data'}
          onButtonPress={handleSubmit}
          notShowingButton={false}
          showBackButton={true}
          buttonDisabled={!validationSchema.isValidSync(values)}
        >
          <Text style={styles.subtitle}>Step 3/5: Confirm your identity data</Text>
          <Text style={styles.description}>
            Please check your data carefully before confirm
          </Text>

          <CustomTextInput
            label="Name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            editable={true}
            error={touched.name && errors.name ? errors.name : undefined}
          />
          <CustomTextInput
            label="Surname"
            value={values.surname}
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
            editable={true}
            error={touched.surname && errors.surname ? errors.surname : undefined}
          />
          <CustomTextInput
            label="Id number"
            value={values.idNumber}
            onChangeText={handleChange('idNumber')}
            onBlur={handleBlur('idNumber')}
            editable={true}
            error={touched.idNumber && errors.idNumber ? errors.idNumber : undefined}
          />
          <CustomTextInput
            label="Nationality"
            value={values.nationality}
            onChangeText={handleChange('nationality')}
            onBlur={handleBlur('nationality')}
            editable={true}
            error={touched.nationality && errors.nationality ? errors.nationality : undefined}
          />
          <CustomDatePicker
            label="Date of birth"
            iconName="calendar"
            iconColor="black"
            value={values.dateOfBirth}
            onDateChange={(date) => setFieldValue('dateOfBirth', date)}
            error={touched.dateOfBirth && errors.dateOfBirth ? errors.dateOfBirth : undefined}
          />
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
});

export default ConfirmIdentityDataScreen;
