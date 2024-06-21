import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native';

interface CustomDatePickerProps {
  label?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  style?: object;
  onDateChange?: (date: Date) => void;
  value?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label = 'Date of birth',
  iconName = 'calendar',
  iconColor = 'black',
  style,
  onDateChange,
  value,
}) => {
  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    if (value) {
      setDate(new Date(value));
    }
  }, [value]);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    if (onDateChange) {
      onDateChange(currentDate as Date);
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputTitle}>{label}</Text>}

      <View style={[styles.container, style]}>
        <TextInput
          style={styles.input}
          placeholder=""
          value={date ? date.toISOString().split('T')[0] : ''}
          editable={false}
        />
        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          style={styles.iconContainer}
        >
          <Ionicons name={iconName} size={24} color={iconColor} />
        </TouchableOpacity>
        {showPicker && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={showPicker}
            onRequestClose={() => setShowPicker(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.pickerContainer}>
                <DateTimePicker
                  value={date || new Date()}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
                {/* <TouchableOpacity
                  onPress={() => setShowPicker(false)}
                  style={styles.closeButton}
                >
                  <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity> */}
              </View>
            </View>
          </Modal>
        )}
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputTitle: {
    fontFamily: "Urbanist-Light",
    margin: 4,
  },
  input: {
    flex: 1,
    padding: 15,
    fontFamily: 'Urbanist-Medium',
    color: '#3A2012',
    fontSize: 16,
  },
  iconContainer: {
    padding: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pickerContainer: {
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
  },
});

export default CustomDatePicker;
