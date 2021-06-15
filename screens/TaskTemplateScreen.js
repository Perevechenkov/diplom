import React, { useState, useEffect } from 'react';

import {
     StyleSheet,
     ScrollView,
     FlatList,
     View,
     Text,
     Button,
     Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton } from '../components/CustomHeaderButton';
import { DiagnosticTask } from './tasks/DiagnosticTask';
import { CheckListTask } from './tasks/CheckListTask';
import { MyButton } from '../components/MyButton';
import { completeTask, setTasks } from '../store/tasks-actions';
import { GenericTask } from './tasks/GenericTask';

export const TaskTemplateScreen = props => {
     const { taskObj } = props.route.params;
     const [currentTask, setCurrentTask] = useState(taskObj);

     const tasks = useSelector(state => state.tasks.tasks);
     const allUpcomingTasks = useSelector(state => state.tasks.upcomingTasks);
     const upcomingTasks = allUpcomingTasks.filter(
          taskId => taskId !== currentTask.id
     );

     const dispatch = useDispatch();

     let nextTaskObj;
     let nextAssignedTasks;

     useEffect(() => {
          props.navigation.setOptions({
               headerTitle: currentTask.title,
          });
     }, [currentTask]);

     const isLastAssignedTask = () => {
          if (
               allUpcomingTasks.length === 1 &&
               currentTask.id === allUpcomingTasks[0]
          ) {
               return true;
          } else return false;
     };

     const selectNextTaskHandler = (taskObj, assignedTasks) => {
          nextTaskObj = taskObj;
          nextAssignedTasks = assignedTasks;
     };

     const submitHandler = () => {
          if (!nextTaskObj && currentTask.id === 'diagnostic') {
               Alert.alert('Ошибка', 'Выполните задание', [{ text: 'OK' }]);
          } else {
               if (currentTask.id === 'diagnostic') {
                    dispatch(setTasks(nextAssignedTasks));
                    setCurrentTask(nextTaskObj);
               } else if (isLastAssignedTask()) {
                    dispatch(completeTask(currentTask.id));
                    props.navigation.navigate('Tasks');
               } else {
                    dispatch(completeTask(currentTask.id));
                    const upcomingTasksObjects = tasks.filter(
                         task => upcomingTasks.indexOf(task.id) >= 0
                    );
                    setCurrentTask(upcomingTasksObjects[0]);
               }
          }
     };

     const content = task => {
          switch (task.type) {
               case 'task':
                    switch (task.id) {
                         case 'diagnostic':
                              return (
                                   <DiagnosticTask
                                        onNextTask={selectNextTaskHandler}
                                   />
                              );
                         default:
                              return <GenericTask task={task} />;
                    }
               case 'checkList':
                    return <CheckListTask task={task} />;
               default:
                    return;
          }
     };

     return (
          <View style={styles.screen}>
               {content(currentTask)}
               <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                         <MyButton
                              title={'На главную'}
                              onPress={() => {
                                   props.navigation.navigate('Tasks');
                              }}
                         />
                    </View>
                    <View style={styles.button}>
                         <MyButton
                              title={'Применить'}
                              onPress={submitHandler}
                         />
                    </View>
               </View>
          </View>
     );
};

export const TaskTemplateScreenOptions = navData => {
     return {
          headerLeft: () => (
               <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                         title='Menu'
                         iconName={'md-menu'}
                         onPress={() => {
                              navData.navigation.toggleDrawer('Tasks');
                         }}
                    />
               </HeaderButtons>
          ),
     };
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
          paddingVertical: 5,
     },
     buttonsContainer: {
          //width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-around',
     },
     button: {
          marginTop: 5,
          width: '40%',
     },
});
