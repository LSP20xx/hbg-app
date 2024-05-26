import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const FaceRecognitionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <TouchableOpacity style={{ alignSelf: 'flex-start', marginBottom: 16 }}>
          <Text style={{ fontSize: 24 }}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          Verify your identity
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>
          Step 4/4: Choose a biometrics method
        </Text>
        <Text style={{ fontSize: 14, color: '#666', marginBottom: 32 }}>
          Ensure your face is fully visible and well-lit
        </Text>
        <View
          style={{
            width: 250,
            height: 250,
            borderRadius: 125,
            borderWidth: 1,
            borderColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <Text style={{ textAlign: 'center', color: '#666' }}>
            USER'S FRONT CAMERA ON REAL TIME
          </Text>
        </View>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Instructions to the user while we check identity
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FaceRecognitionScreen;
