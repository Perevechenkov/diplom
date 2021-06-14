import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Colors from '../constants/Colors';

export const MyButton = props => {
     return <Button {...props} color={Colors.button} />;
};
