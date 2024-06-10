import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { login } from '../redux/slices/userSlice';
import { selectAuthenticated } from '../redux/selectors/userSelectors';
import { Formik } from 'formik';
import { authValidationSchema } from '../schemas/authValidationSchema';
import AuthScreenBase from '../components/AuthScreenBase';
import Logo from '../components/Logo';
import AuthInputContainer from '../components/AuthInputContainer';
import ActionButton from '../components/ActionButton';
import AuthLinkComponent from '../components/AuthLinkComponent';
import CustomAlert from '../components/CustomAlert';
import { Text } from 'react-native';

type RootStackParamList = {
  SignUp: undefined;
  InstitutionalHome: undefined;
  FaceRecognitionSignIn: { onVerified: () => void };
};

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const authenticated = useSelector(selectAuthenticated);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = async (values: { email: string; password: string }) => {
    console.log('Sending login request with values:', values);
    const resultAction = await dispatch(login(values));
    console.log('Authenticated state:', authenticated);

    if (login.fulfilled.match(resultAction)) {
      navigation.navigate('InstitutionalHome');
    } else if (login.rejected.match(resultAction)) {
      setError(resultAction.payload as string);
    }
  };

  return (
    <AuthScreenBase>
      <Logo />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={authValidationSchema}
        onSubmit={handleSignIn}
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
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}
            {touched.password && errors.password && (
              <Text>{errors.password}</Text>
            )}
            <ActionButton
              text="Sign in"
              onPress={handleSubmit as any}
              color="#66D19E"
            />
          </>
        )}
      </Formik>
      <AuthLinkComponent
        onPress={handleSignUp}
        message="Don't have an account?"
        linkText="Sign up now"
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

export default SignInScreen;
