import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import CustomTextInput from '../components/CustomTextInput';

const TermsAndConditionsScreen = () => {
  const [email, setEmail] = useState('');
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const navigation = useNavigation();

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEnd = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    setIsScrolledToEnd(isEnd);
  };

  const handleConfirmPress = () => {
    navigation.navigate('IdPhotos');
  };
  useEffect(()=>{
    console.log("isEnd", isScrolledToEnd)
 },[isScrolledToEnd])

  return (
    <ScreenWrapper
    headerTitle={'Personal information'}
    onButtonPress={handleConfirmPress}
    notShowingButton={true}
    showBackButton={true}
    // buttonDisabled={!isScrolledToEnd}
  > 
 <View style={styles.header}>
        <Text style={styles.subtitle}>Step 1/3: Please provide an email and read our terms</Text>
        <Text style={styles.description}>
        We will send you the results of your test to your email
        </Text>
        <CustomTextInput placeholder="Email" style={{ marginVertical: 8 }} />

      </View>
      <View style={styles.termsContainer}>
        <ScrollView style={styles.scrollView} onScroll={handleScroll}>
          {/* <Text style={styles.termsText}> */}
            {/** Content of the terms and conditions **/}
            {/* **Terms and Conditions**

            1. [Privacy Policy](https://app.websitepolicies.com/policies/view/s99ikisp)
               This policy covers how we use your personal information. We take your privacy seriously and will take all measures to protect your personal information.

            2. [Terms and Conditions](https://app.websitepolicies.com/policies/view/9s1986u4)
               These terms and conditions outline the rules and regulations for the use of our app.

            3. [Refund Policy](https://app.websitepolicies.com/policies/view/4fsjsezz)
               This policy explains our refund policy for the products and services purchased from our app.

            4. [Data Protection Policy](https://app.websitepolicies.com/dsar/view/vpqqso1u)
               This policy describes how we handle and protect your personal data.

            5. [Cookie Policy](https://app.websitepolicies.com/policies/view/519m6z9r)
               This policy explains how we use cookies and similar technologies to recognize you when you visit our website.

            6. [Disclaimer](https://app.websitepolicies.com/policies/view/tvq9mzwd)
               This disclaimer outlines the limitations of liability for the use of our app.

            **For more details, please refer to the provided links.** */}
          {/* </Text> */}
          <Text style={styles.termsText}>
            <Text style={styles.sectionTitle}>Terms and Conditions</Text>
            {'\n'}
            These terms outline the rules for using our app. By using our services, you agree to these terms. Key points include account security, content ownership, billing, accuracy of information, and prohibited uses. For disputes, Florida laws apply.
            {'\n\n'}
            <Text style={styles.link}>https://app.websitepolicies.com/policies/view/9s1986u4</Text>
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.sectionTitle}>Privacy Policy</Text>
            {'\n'}
            <Text style={styles.sectionText}>We respect your privacy and are committed to protecting it. This policy describes the types of information we collect from you, how we use it, and your rights regarding your personal information. We will not share your data without your consent.
            </Text>{'\n\n'}
            <Text style={styles.link}>https://app.websitepolicies.com/policies/view/s99ikisp</Text>
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.sectionTitle}>Refund Policy</Text>
            {'\n'}
            This policy explains our refund terms for products and services purchased. If you are not satisfied, you may be eligible for a refund within a specified period.
            {'\n\n'}
            <Text style={styles.link}>https://app.websitepolicies.com/policies/view/4fsjsezz</Text>
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.sectionTitle}>Data Protection Policy</Text>
            {'\n'}
            This policy describes how we handle and protect your personal data. We take appropriate measures to ensure the security and confidentiality of your information.
            {'\n\n'}
            <Text style={styles.link}>https://app.websitepolicies.com/dsar/view/vpqqso1u</Text>
          </Text>

        </ScrollView>
      </View>

    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    marginBottom: 16,
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
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontFamily: "Urbanist-Light"
  },
  termsContainer: {
    flex: 1,
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  termsText: {
    fontSize: 14,
    marginTop: 16,
  },
  sectionText: {
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: "bold"
},
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
  confirmButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#007BFF',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default TermsAndConditionsScreen;
