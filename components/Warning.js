import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../constants/Colors';

export const Warning = props => {
     return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
     container: {
          padding: 5,
          marginVertical: 5,
          borderColor: 'red',
          borderRadius: 5,
          borderWidth: 2,
     },
});
