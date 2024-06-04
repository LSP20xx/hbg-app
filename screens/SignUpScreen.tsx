import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import { authValidationSchema } from '../schemas/authValidationSchema';
import AuthScreenBase from '../components/AuthScreenBase';
import Logo from '../components/Logo';
import AuthInputContainer from '../components/AuthInputContainer';
import ActionButton from '../components/ActionButton';
import AuthLinkComponent from '../components/AuthLinkComponent';
import { Text } from 'react-native';
import api from '../api';
import CustomAlert from '../components/CustomAlert';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import {
  selectAuthenticated,
  selectIsInstitutional,
} from '../redux/selectors/userSelectors';
import { register } from '../redux/slices/userSlice';

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
    console.log('Authenticated state:', authenticated);

    if (register.fulfilled.match(resultAction)) {
      if (isInstitutional) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Verification', {
          screen: 'IdPhotos',
          params: {
            onVerified: () => {
              navigation.navigate('IdPhotos');
            },
          },
        });
      }
    } else if (register.rejected.match(resultAction)) {
      setError(resultAction.payload as string);
    }
  };

  return (
    <AuthScreenBase>
      <Logo />
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
          <>
            <AuthInputContainer
              email={values.email}
              setEmail={handleChange('email')}
              password={values.password}
              setPassword={handleChange('password')}
              isSignUp
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}
            {touched.password && errors.password && (
              <Text>{errors.password}</Text>
            )}
            <ActionButton
              text="Sign up"
              onPress={handleSubmit as any}
              color="#66D19E"
            />
          </>
        )}
      </Formik>
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
    </AuthScreenBase>
  );
};

export default SignUpScreen;
