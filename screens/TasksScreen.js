import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Card } from '../components/Card';
import { TaskItem } from '../components/TaskItem';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

export const TasksScreen = props => {
     const tasks = useSelector(state => state.tasks.tasks);
     const assignedTasks = useSelector(state => state.tasks.assignedTasks);
     const upcomingTasks = useSelector(state => state.tasks.upcomingTasks);
     const completedTasks = useSelector(state => state.tasks.completedTasks);

     const renderTaskList = dataArr => {
          return dataArr.map(task => (
               <TaskItem
                    key={task.id}
                    taskId={task.id}
                    taskTitle={task.title}
                    onSelect={() => {
                         props.navigation.navigate('CurrentTask', {
                              taskObj: task,
                         });
                    }}
               />
          ));
     };

     const renderTasks = () => {
          if (assignedTasks.length !== 0) {
               const assignedTasksObjects = tasks.filter(
                    task => assignedTasks.indexOf(task.id) >= 0
               );
               const otherTasksObjects = tasks.filter(
                    task => assignedTasks.indexOf(task.id) < 0
               );

               return (
                    <View>
                         <Text style={styles.text}>Рекомендуемые задания</Text>
                         {renderTaskList(assignedTasksObjects)}
                         <Text style={styles.text}>Необязательные задания</Text>
                         {renderTaskList(otherTasksObjects)}
                    </View>
               );
          } else {
               return renderTaskList(tasks);
          }
     };

     return (
          <View style={styles.screen}>
               <ScrollView>{renderTasks()}</ScrollView>
          </View>
     );
};

export const TasksScreenOptions = navData => {
     return {
          headerTitle: 'Задания',
          headerLeft: () => (
               <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                         title='Menu'
                         iconName={'md-menu'}
                         onPress={() => {
                              navData.navigation.toggleDrawer();
                         }}
                    />
               </HeaderButtons>
          ),
     };
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
     },

     text: {
          fontSize: 18,
          padding: 10,
     },
});
