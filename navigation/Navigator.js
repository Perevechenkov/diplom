import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {
     createDrawerNavigator,
     DrawerItemList,
} from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import { InputScreen, InputScreenOptions } from '../screens/InputScreen';
import Colors from '../constants/Colors';
import { TasksScreen, TasksScreenOptions } from '../screens/TasksScreen';
import {
     TaskTemplateScreen,
     TaskTemplateScreenOptions,
} from '../screens/TaskTemplateScreen';
import { MyButton } from '../components/MyButton';

const defaultNavOptions = {
     headerStyle: {
          backgroundColor: Colors.primary,
     },
     headerTintColor: 'white',
};

const TasksStackNavigator = createStackNavigator();

export const TasksNavigator = () => {
     return (
          <TasksStackNavigator.Navigator screenOptions={defaultNavOptions}>
               <TasksStackNavigator.Screen
                    name='Tasks'
                    component={TasksScreen}
                    options={TasksScreenOptions}
               />
               <TasksStackNavigator.Screen
                    name='CurrentTask'
                    component={TaskTemplateScreen}
                    options={TaskTemplateScreenOptions}
               />
          </TasksStackNavigator.Navigator>
     );
};

const InputStackNavigator = createStackNavigator();

export const InputNavigator = () => {
     return (
          <InputStackNavigator.Navigator screenOptions={defaultNavOptions}>
               <InputStackNavigator.Screen
                    name='Input'
                    component={InputScreen}
                    options={InputScreenOptions}
               />
          </InputStackNavigator.Navigator>
     );
};

const MainDrawerNavigator = createDrawerNavigator();

export const MainNavigator = () => {
     return (
          <MainDrawerNavigator.Navigator
               drawerContentOptions={{
                    activeTintColor: Colors.primary,
               }}
               drawerContent={props => {
                    return (
                         <View style={{ flex: 1, paddingTop: 20 }}>
                              <SafeAreaView
                                   forceInset={{
                                        top: 'alvays',
                                        horizontal: 'never',
                                   }}
                              >
                                   <DrawerItemList {...props} />
                                   <MyButton title='Выход' onPress={() => {}} />
                              </SafeAreaView>
                         </View>
                    );
               }}
          >
               <MainDrawerNavigator.Screen
                    name='Tasks'
                    component={TasksNavigator}
                    options={{
                         drawerIcon: props => (
                              <Ionicons
                                   name={'md-checkbox'}
                                   size={23}
                                   color={props.color}
                              />
                         ),
                    }}
               />
               <MainDrawerNavigator.Screen
                    name='Input'
                    component={InputNavigator}
                    options={{
                         drawerIcon: props => (
                              <Ionicons
                                   name={'md-add-circle-outline'}
                                   size={23}
                                   color={props.color}
                              />
                         ),
                    }}
               />
          </MainDrawerNavigator.Navigator>
     );
};
