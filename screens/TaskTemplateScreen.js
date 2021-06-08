import React, { useState, useEffect } from 'react';

import {
     StyleSheet,
     ScrollView,
     FlatList,
     View,
     Text,
     Button,
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton } from '../components/CustomHeaderButton';
import { IMAGES, TASKS } from '../data/dummy-data';
import { DiagnosticTask } from './tasks/DiagnosticTask';
import { CheckListTask } from './tasks/CheckListTask';
import { CheckHygieneTask } from './tasks/CheckHygieneTask';

export const TaskTemplateScreen = props => {
     const id = props.route.params.taskId;
     const [currentTask, setCurrentTask] = useState(id);
     const taskObj = TASKS.find(task => currentTask === task.id);

     useEffect(() => {
          props.navigation.setOptions({
               headerTitle: taskObj.title,
          });
     }, [currentTask]);

     const content = id => {
          switch (id) {
               case 'diagnostic':
                    return <DiagnosticTask />;
               case 'checkList':
                    return <CheckListTask />;
               case 'hygiene':
                    return <CheckHygieneTask />;
          }
     };

     const buttonHandler = () => {
          setCurrentTask(taskObj.nextTask);
     };

     return (
          <View style={styles.screen}>
               {content(currentTask)}
               <View style={styles.button}>
                    <Button title='Next' onPress={buttonHandler} />
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
