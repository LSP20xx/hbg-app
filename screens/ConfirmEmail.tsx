import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { updateEmail } from '../redux/slices/userSlice';
import { selectUserId, selectLoading, selectError } from '../redux/selectors/userSelectors';
import ScreenWrapper from '../components/ScreenWrapper';
import CustomTextInput from '../components/CustomTextInput';

const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

const ConfirmEmailScreen = () => {
  const [buttonText, setButtonText] = useState('Confirm');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = useSelector(selectUserId);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    let intervalId;
    if (loading) {
      let dotCount = 0;
      intervalId = setInterval(() => {
        setButtonText(`Sending email${'.'.repeat(dotCount)}`);
        dotCount = (dotCount + 1) % 4;
      }, 500);
    } else {
      setButtonText('Confirm');
    }

    return () => clearInterval(intervalId);
  }, [loading]);

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={emailValidationSchema}
      onSubmit={(values) => {
        dispatch(updateEmail({ userId, email: values.email })).then((response) => {
          if (response.type === 'user/updateEmail/fulfilled') {
            navigation.navigate('TakeaTestAfterPatientCreated');
          }
        });
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
          buttonText={buttonText}
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
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          {error && <Text style={styles.errorText}>{error}</Text>}
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 8,
  },
});

export default ConfirmEmailScreen;
