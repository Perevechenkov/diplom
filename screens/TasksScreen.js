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
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Card } from '../components/Card';
import { TaskItem } from '../components/TaskItem';
import { CustomHeaderButton } from '../components/CustomHeaderButton';

export const TasksScreen = props => {
     return (
          <View style={styles.screen}>
               <ScrollView>
                    <TaskItem
                         title={'Диагностика'}
                         onSelect={() => {
                              props.navigation.navigate('Images', {
                                   taskTitle: 'Диагностика',
                              });
                         }}
                    />
                    <TaskItem title={'Пережитые травмы'} />
                    <TaskItem title={'Гигиена сна'} />
                    <TaskItem title={'Дыхательные техники'} />
                    <TaskItem title={'Упражнения релаксации'} />
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
