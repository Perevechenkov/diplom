import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const CheckListItem = props => {
     const [value, setValue] = useState(false);

     return (
          <View style={styles.container}>
               <TouchableWithoutFeedback onPress={() => setValue(!value)}>
                    <View style={styles.content}>
                         <CheckBox
                              value={value}
                              onValueChange={newValue => setValue(newValue)}
                         />
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
     content:{
          flexDirection: 'row',
          alignItems: 'center',
     }
});
