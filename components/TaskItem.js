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
import { TASKS } from '../data/data';
import { Card } from '../components/Card';
import Colors from '../constants/Colors';

export const TaskItem = props => {
     const isDiagnostic = TASKS.find(
          task => task.id === props.taskId && task.id === 'diagnostic'
     );

     const renderTask = isDiagnostic => {
          if (!isDiagnostic) {
               return (
                    <TouchableNativeFeedback onPress={props.onSelect}>
                         <View style={styles.touchableContainer}>
                              <Text style={styles.text}>{props.taskTitle}</Text>
                         </View>
                    </TouchableNativeFeedback>
               );
          } else {
               return (
                    <TouchableNativeFeedback onPress={props.onSelect}>
                         <View style={styles.diagnosticContainer}>
                              <Text style={styles.titleText}>
                                   {props.taskTitle}
                              </Text>
                              <Text style={{ textAlign: 'center' }}>
                                   Перед началом выполнения упражнений мы
                                   рекомендуем вам пройти диагностику
                              </Text>
                         </View>
                    </TouchableNativeFeedback>
               );
          }
     };

     return (
          <View
               style={[styles.task, isDiagnostic ? styles.diagnosticTask : []]}
          >
               {renderTask(isDiagnostic)}
          </View>
     );
};

const styles = StyleSheet.create({
     task: {
          height: 50,
          borderBottomColor: Colors.lightGray,
          borderBottomWidth: 1,
     },
     diagnosticTask: {
          height: 120,
     },
     touchableContainer: {
          height: '100%',
          justifyContent: 'center',
          paddingLeft: 20,
     },
     diagnosticContainer: {
          height: '100%',
          alignItems: 'center',
          paddingVertical: 20,
     },
     titleText: {
          color: Colors.activeText,
          fontSize: 20,
          marginBottom: 10,
     },
});
