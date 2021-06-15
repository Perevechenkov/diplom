import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Card } from '../components/Card';
import { TaskItem } from '../components/TaskItem';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
import { TASKS } from '../data/data';
import Colors from '../constants/Colors';

export const TasksScreen = props => {
     const assignedTasks = useSelector(state => state.tasks.assignedTasks);
     const upcomingTasks = useSelector(state => state.tasks.upcomingTasks);
     const completedTasks = useSelector(state => state.tasks.completedTasks);
     
     return (
          <View style={styles.screen}>
               <ScrollView>
                    {TASKS.map(task => (
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
                    ))}
               </ScrollView>
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
});
