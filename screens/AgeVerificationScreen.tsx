import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createInstitutionalUser, loadUserId, updateTermsAndConditions } from '../redux/slices/userSlice';
import { selectUserId, selectInstitutionalUserId } from '../redux/selectors/userSelectors';
import ScreenWrapper from '../components/ScreenWrapper';
import CheckBox from 'expo-checkbox';

const AgeVerificationScreen = () => {
  const [isAdult, setIsAdult] = useState(null);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const institutionalUserId = useSelector(selectInstitutionalUserId);


  useEffect(()=>{
    console.log("userId", userId)
    console.log("institutionalUserId", institutionalUserId)
  }, [userId, institutionalUserId])

  useEffect(() => {
    if (userId) {
      dispatch(createInstitutionalUser(userId));
    }
    console.log("userId", userId);
  }, [userId, dispatch]);

  const handleConfirmPress = () => {
    if (isAdult) {
      if (isTermsAccepted) {
        dispatch(updateTermsAndConditions({ institutionId: institutionalUserId, userId }));
        navigation.navigate('IdPhotos');
      }
    } else {
      navigation.navigate('ParentalConsent2');
    }
  };

  return (
    <ScreenWrapper
      headerTitle="Age verification"
      onButtonPress={handleConfirmPress}
      notShowingButton={false}
      showBackButton={true}
      buttonText="Confirm"
      buttonDisabled={isAdult === null || (isAdult && !isTermsAccepted)}
    >
      <View style={styles.header}>
        <Text style={styles.subtitle}>Step 1/5: Please verify your age</Text>
        <Text style={styles.description}>
          Confirm if you are an adult
        </Text>
      </View>

      <View style={styles.radioContainer}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setIsAdult(true)}>
          <View style={[styles.radioCircle, isAdult === true && styles.selected]} />
          <Text style={styles.radioText}>Yes, and I will present my ID to verify my age.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => setIsAdult(false)}>
          <View style={[styles.radioCircle, isAdult === false && styles.selected]} />
          <Text style={styles.radioText}>No, but I will get my parents consent.</Text>
        </TouchableOpacity>
      </View>

      {isAdult && (
        <View style={styles.footer}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isTermsAccepted}
              onValueChange={setIsTermsAccepted}
              style={styles.circularCheckbox}
              color={isTermsAccepted ? '#66D19E' : undefined}
            />
            <Text style={styles.checkboxLabel}>
              I accept the{" "}
              <Text style={styles.link} onPress={() => Linking.openURL('https://app.websitepolicies.com/policies/view/9s1986u4')}>Terms and Conditions</Text>,
              {" "} 
              <Text style={styles.link} onPress={() => Linking.openURL('https://app.websitepolicies.com/policies/view/s99ikisp')}>Privacy Policy</Text>, 
              {" "}
              <Text style={styles.link} onPress={() => Linking.openURL('https://app.websitepolicies.com/policies/view/519m6z9r')}>DMCA Policy</Text>, 
              {" "}
              <Text style={styles.link} onPress={() => Linking.openURL('https://app.websitepolicies.com/policies/view/tvq9mzwd')}>Acceptable Use Policy</Text>, and 
              {" "}
              <Text style={styles.link} onPress={() => Linking.openURL('https://app.websitepolicies.com/policies/view/4fsjsezz')}>Disclaimer</Text>.
            </Text>
          </View>
        </View>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
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
  header: {
    marginBottom: 16,
  },
  radioContainer: {
    marginBottom: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 16,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selected: {
    backgroundColor: '#666',
  },
  radioText: {
    fontSize: 14,
    color: '#050505',
    fontFamily: 'Urbanist-Medium'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  circularCheckbox: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    flex: 1,
    fontFamily: "Urbanist-SemiBold"
  },
  link: {
    color: '#004d00',
    textDecorationLine: 'underline',
  },
});

export default AgeVerificationScreen;
