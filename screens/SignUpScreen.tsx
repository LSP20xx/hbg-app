import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import { authValidationSchema } from '../schemas/authValidationSchema';
import AuthScreenBase from '../components/AuthScreenBase';
import AuthInputContainer from '../components/AuthInputContainer';
import ActionButton from '../components/ActionButton';
import AuthLinkComponent from '../components/AuthLinkComponent';
import CustomAlert from '../components/CustomAlert';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import {
  selectAuthenticated,
  selectIsInstitutional,
} from '../redux/selectors/userSelectors';
import { register } from '../redux/slices/userSlice';
import ScreenWrapper from '../components/ScreenWrapper';

type RootStackParamList = {
  Verification: { screen: string; params: { onVerified: () => void } };
  IdPhotos: undefined;
  Home: undefined;
  SignIn: undefined;
  ParentalConsent: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Verification'
>;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const authenticated = useSelector(selectAuthenticated);
  const isInstitutional = useSelector(selectIsInstitutional);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (values: { email: string; password: string }) => {
    console.log('Sending registration request with values:', values);
    const resultAction = await dispatch(register(values));

    if (register.fulfilled.match(resultAction)) {
      const userData = resultAction.payload?.userData;
      if (userData?.isInstitution) {
        navigation.navigate('InstitutionalHome');
      } else {
        navigation.navigate('Verification', {
          screen: 'IdPhotos',
        });
      }
    } else if (register.rejected.match(resultAction)) {
      setError(resultAction.payload as string);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={authValidationSchema}
      onSubmit={handleSignUp}
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
          headerTitle=""
          buttonText="Sign up"
          showBackButton={false}
        >
                      <Text style={styles.title}>Get started</Text>

          <View style={styles.container}>
            <AuthInputContainer
              email={values.email}
              setEmail={handleChange('email')}
              password={values.password}
              setPassword={handleChange('password')}
              isSignUp
            />
            {/* <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxLabel}>
                I accept the Terms and Conditions, Privacy Policy, Refund Policy, and Data Protection Policy
              </Text>
            </View> */}
            {touched.email && errors.email && <Text>{errors.email}</Text>}
            {touched.password && errors.password && (
              <Text>{errors.password}</Text>
            )}
            <AuthLinkComponent
              onPress={() => navigation.navigate('SignIn')}
              message="Already have an account?"
              linkText="Sign in now"
            />
            {error && (
              <CustomAlert
                visible={!!error}
                message={error}
                onClose={() => setError(null)}
              />
            )}
          </View>
        </ScreenWrapper>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: "Urbanist-Bold",
    fontSize: 28,
    marginBottom: 60,
  },
    checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    flex: 1,
  },
});

export default SignUpScreen;
