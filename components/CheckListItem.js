import React, { useState, useEffect } from 'react';
import {
     StyleSheet,
     Text,
     View,
     TouchableWithoutFeedback,
     Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../constants/Colors';

export const CheckListItem = props => {
     const [value, setValue] = useState(false);

     useEffect(() => {
          props.onCheckHandler(value, props.id);
     }, [value]);

     const renderCheckbox = () => {
          if (Platform.OS === 'ios') {
               return (
                    <CheckBox
                         onCheckColor={Colors.purple}
                         value={value}
                         onValueChange={newValue => setValue(newValue)}
                    />
               );
          } else if (Platform.OS === 'android') {
               return (
                    <CheckBox
                         tintColors={{ true: Colors.purple }}
                         value={value}
                         onValueChange={newValue => setValue(newValue)}
                    />
               );
          }
     };

     return (
          <View style={styles.container}>
               <TouchableWithoutFeedback onPress={() => setValue(!value)}>
                    <View style={styles.content}>
                         {renderCheckbox()}
                         {props.children}
                    </View>
               </TouchableWithoutFeedback>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          padding: 5,
          marginVertical: 5,
          borderColor: '#ccc',
          borderRadius: 5,
          borderWidth: 1,
     },
     content: {
          flexDirection: 'row',
          alignItems: 'center',
     },
});
