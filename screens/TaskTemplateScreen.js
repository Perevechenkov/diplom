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
import { IMAGES } from '../data/dummy-data';
import { DiagnosticTask } from './tasks/DiagnosticTask';
import { CheckListTask } from './tasks/CheckListTask';

export const TaskTemplateScreen = props => {
     const [currentTask, setCurrentTask] = useState('Diagnostic');
     useEffect(() => {
          props.navigation.setOptions({
               headerTitle: currentTask,
          });
     });

     const content = id => {
          switch (id) {
               case 'Diagnostic':
                    return <DiagnosticTask />;
               case 'CheckList':
                    return <CheckListTask />;
          }
     };

     const buttonHandler = () => {
          setCurrentTask('CheckList');
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
