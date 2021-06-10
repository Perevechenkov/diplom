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

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton } from '../components/CustomHeaderButton';
import { DiagnosticTask } from './tasks/DiagnosticTask';
import { CheckListTask } from './tasks/CheckListTask';
import { MyButton } from '../components/MyButton';

export const TaskTemplateScreen = props => {
     const { taskObj } = props.route.params;
     const [currentTask, setCurrentTask] = useState(taskObj);
     let currentTaskObj;
     let nextTaskObj;

     useEffect(() => {
          props.navigation.setOptions({
               headerTitle: currentTask.title,
          });
     }, [currentTask]);

     const selectNextTaskHandler = taskObj => {
          nextTaskObj = taskObj;
     };

     const submitHandler = () => {
          if (currentTask.type === 'checkList') {
               props.navigation.navigate('Tasks');
          } else {
               if (!nextTaskObj) {
                    Alert.alert('Ошибка', 'Выполните задание', [
                         { text: 'OK' },
                    ]);
               } else {
                    setCurrentTask(nextTaskObj);
                    currentTaskObj = nextTaskObj;
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
               <View style={styles.button}>
                    <MyButton
                         title={
                              currentTask.type === 'checkList'
                                   ? 'На главную'
                                   : 'Применить'
                         }
                         onPress={submitHandler}
                    />
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
     button: {
          marginTop: 5,
          alignSelf: 'center',
          width: '60%',
     },
});
