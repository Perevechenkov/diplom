import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
     StyleSheet,
     ScrollView,
     View,
     Alert,
     KeyboardAvoidingView,
     ActivityIndicator,
     Text,
     Button,
     TouchableNativeFeedback,
} from 'react-native';
import { Card } from '../components/Card';

export const TaskItem = props => {
     return (
          <Card style={styles.task}>
               <TouchableNativeFeedback onPress={props.onSelect}>
                    <View style={styles.touchable}>
                         <Text style={styles.text}>{props.taskTitle}</Text>
                    </View>
               </TouchableNativeFeedback>
          </Card>
     );
};

const styles = StyleSheet.create({
     task: {
          height: 50,
          marginHorizontal: 20,
          marginVertical: 10,
          overflow: 'hidden',
     },
     touchable: {
          height: '100%',
          justifyContent: 'center',
     },
     text: {
          textAlign: 'center',
     },
});
