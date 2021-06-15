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

     return (
          <View style={styles.container}>
               <TouchableWithoutFeedback onPress={() => setValue(!value)}>
                    <View style={styles.content}>
                         <View style={styles.checkboxContainer}>
                              <CheckBox
                                   tintColors={{ true: Colors.primary }}
                                   value={value}
                                   onValueChange={newValue =>
                                        setValue(newValue)
                                   }
                              />
                         </View>
                         <Text style={styles.text}>{props.children}</Text>
                    </View>
               </TouchableWithoutFeedback>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          padding: 5,
          borderBottomColor: Colors.lightGray,

          borderBottomWidth: 1,
     },
     content: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     checkboxContainer: {
          width: '10%',
     },
     text: {
          width: '90%',
     },
});
