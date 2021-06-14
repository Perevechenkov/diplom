import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../constants/Colors';
import { Card } from './Card';

export const Advice = props => {
     return (
          <Card style={styles.cardContainer}>
               <View
                    style={[
                         styles.container,
                         props.isWarning
                              ? styles.warningColor
                              : styles.adviceColor,
                    ]}
               >
                    {props.children}
               </View>
          </Card>
     );
};

const styles = StyleSheet.create({
     cardContainer: {
          marginBottom: 10,
          marginHorizontal: 10,
     },
     container: {
          padding: 10,
     },
     adviceColor: { backgroundColor: Colors.activeBG },
     warningColor: { backgroundColor: Colors.warningBG },
});
