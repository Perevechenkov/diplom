import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

export const Card = props => {
     return (
          <View style={{ ...styles.card, ...props.style }}>
               {props.children}
          </View>
     );
};

const styles = StyleSheet.create({
     card: {
          elevation: 5,
          borderRadius: 10,
          backgroundColor: Colors.white,
          overflow: 'hidden',
     },
});
