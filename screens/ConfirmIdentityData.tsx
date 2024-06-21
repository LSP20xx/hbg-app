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
import {selectIdentificationLoading,
    selectIdentificationError,
    selectIdentificationName,
    selectIdentificationSurname,
    selectIdentificationIdNumber,
    selectIdentificationNationality,
    selectIdentificationDateOfBirth,} from '../redux/selectors/identificationSelectors';
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
  }, []);

  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#66D19E" />
      </View>
    );
  }

  return (
    <ScreenWrapper
      headerTitle={'Confirm your data'}
      onButtonPress={() => navigation.navigate('FaceRecognition')}
      notShowingButton={false}
      showBackButton={true}
    >
      <Text style={styles.subtitle}>Step 3/5: Confirm your identity data</Text>
      <Text style={styles.description}>
        Please check your data carefully before confirm
      </Text>

      <CustomTextInput
        label="Name"
        value={name || ''}
        editable={true}
      />
      <CustomTextInput
        label="Surname"
        value={surname || ''}
        editable={true}
      />
      <CustomTextInput
        label="Id number"
        value={idNumber || ''}
        editable={true}
      />
      <CustomTextInput
        label="Nationality"
        value={nationality || ''}
        editable={true}
      />
    <CustomDatePicker
        label="Date of birth"
        iconName="calendar"
        iconColor="black"
        value={dateOfBirth}
        onDateChange={(date) => console.log(date)}
      />
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
});

export default ConfirmIdentityDataScreen;
