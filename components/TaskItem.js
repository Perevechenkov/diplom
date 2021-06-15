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
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { TASKS } from '../data/data';
import { Card } from '../components/Card';
import Colors from '../constants/Colors';

export const TaskItem = props => {
     const isDiagnostic = TASKS.find(
          task => task.id === props.taskId && task.id === 'diagnostic'
     );

     const assignedTasks = useSelector(state => state.tasks.assignedTasks);
     const completedTasks = useSelector(state => state.tasks.completedTasks);

     const isCompleted = completedTasks.find(task => props.taskId === task);

     const renderTask = isDiagnostic => {
          if (isDiagnostic && assignedTasks.length === 0) {
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
          } else {
               return (
                    <TouchableNativeFeedback onPress={props.onSelect}>
                         <View style={styles.touchableContainer}>
                              <View style={styles.textContainer}>
                                   <Text style={styles.text}>
                                        {props.taskTitle}
                                   </Text>
                              </View>
                              <View style={styles.iconsContainer}>
                                   {isCompleted && (
                                        <View>
                                             <Icon
                                                  name='md-checkmark-outline'
                                                  size={22}
                                                  color={Colors.green}
                                             />
                                        </View>
                                   )}
                                   <View style={styles.arrow}>
                                        <Icon
                                             name='md-caret-forward-outline'
                                             size={22}
                                             color={Colors.gray}
                                        />
                                   </View>
                              </View>
                         </View>
                    </TouchableNativeFeedback>
               );
          }
     };

     return (
          <View
               style={[
                    styles.task,
                    isDiagnostic && assignedTasks.length === 0
                         ? styles.diagnosticTask
                         : [],
               ]}
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
          flexDirection: 'row',
          alignItems: 'center',
          height: '100%',

          paddingLeft: 20,
     },
     diagnosticContainer: {
          height: '100%',
          alignItems: 'center',
          paddingVertical: 20,
     },
     textContainer: {
          width: '80%',
     },
     titleText: {
          color: Colors.activeText,
          fontSize: 20,
          marginBottom: 10,
     },
     iconsContainer: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '20%',
          paddingRight: 10,
     },
     arrow: { marginLeft: 10 },
});
